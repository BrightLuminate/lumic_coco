// src/pages/portfolio/Portfolio.jsx
// 작업물을 클릭하면 사용자 클릭 동작을 이용해 소리 있는 영상 재생을 시도합니다.
// 브라우저가 막는 경우 수동으로 재생할 수 있는 버튼을 표시합니다.
import React, { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { portfolio } from '../../Data';
import { RiLink } from 'react-icons/ri';
import './Portfolio.css';

const categoryOrder = [
  'All',
  'Showreel',
  'VFX Compositing',
  'AI-assisted VFX',
  'FX',
  '3D Modeling / Animation',
  'Game Trailer / Promo VFX',
  'Motion Graphics',
  'Cut Edit',
  'Storyboard / Planning & Design',
  'Web and App Design',
];

// 기존 데이터에는 대표 이미지에 .mp4가 저장된 작품도 있어 구분합니다.
const isVideoFile = (src) =>
  typeof src === 'string' && /\.(mp4|webm|ogg)(?:[?#].*)?$/i.test(src);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showSoundButton, setShowSoundButton] = useState(false);
  const [videoErrors, setVideoErrors] = useState({});
  const [videoReloadKeys, setVideoReloadKeys] = useState({});
  const videoRefs = useRef([]);

  const filteredPortfolio = activeCategory === 'All'
    ? portfolio
    : portfolio.filter((item) =>
        Array.isArray(item.category)
          ? item.category.includes(activeCategory)
          : item.category === activeCategory
      );

  // 플레이어가 실제로 마운트된 후, 작품 클릭 이벤트가 끝나기 전에 재생 요청합니다.
  // 일반적인 useEffect 자동재생보다 사용자의 클릭 제스처를 활용하기 유리합니다.
  const openModal = (project) => {
    videoRefs.current = [];
    setShowSoundButton(false);
    setVideoErrors({});
    setVideoReloadKeys({});

    flushSync(() => {
      setSelectedProject(project);
    });

    const firstVideo = videoRefs.current[0];
    if (!firstVideo) return;

    firstVideo.defaultMuted = false;
    firstVideo.muted = false;
    firstVideo.volume = 1;

    const playPromise = firstVideo.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch((error) => {
        if (error?.name === 'NotAllowedError') setShowSoundButton(true);
        // 다른 오류는 onError 이벤트에서 별도로 표시합니다.
      });
    }
  };

  const playWithSound = () => {
    const firstVideo = videoRefs.current[0];
    if (!firstVideo) return;

    firstVideo.defaultMuted = false;
    firstVideo.muted = false;
    firstVideo.volume = 1;

    const playPromise = firstVideo.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => setShowSoundButton(false))
        .catch((error) => {
          if (error?.name === 'NotAllowedError') setShowSoundButton(true);
        });
    } else {
      setShowSoundButton(false);
    }
  };

  const handleVideoError = (index, element) => {
    const code = element.error?.code;
    const descriptions = {
      1: '영상 불러오기가 중단되었습니다.',
      2: '네트워크 오류로 영상을 가져올 수 없습니다.',
      3: '영상 파일을 해석할 수 없습니다. 코덱을 확인하세요.',
      4: '영상 형식이 지원되지 않거나 파일 주소가 잘못되었습니다.',
    };
    console.error('[Portfolio] 영상 오류', {
      url: element.currentSrc,
      code,
      message: element.error?.message,
    });
    setVideoErrors((prev) => ({
      ...prev,
      [index]: descriptions[code] || '영상 로딩에 실패했습니다.',
    }));
  };

  const retryVideo = (index) => {
    setVideoErrors((prev) => {
      const next = { ...prev };
      delete next[index];
      return next;
    });
    setVideoReloadKeys((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const closeModal = () => {
    videoRefs.current.forEach((video) => video?.pause());
    videoRefs.current = [];
    setSelectedProject(null);
    setShowSoundButton(false);
    setVideoErrors({});
    setVideoReloadKeys({});
  };

  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  return (
    <section className="portfolio section">
      <h2 className="section-title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio-categories">
        {categoryOrder.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? 'category-active' : 'category-button'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-container container grid">
        {filteredPortfolio.map((item) => (
          <article
            className="portfolio-card"
            key={`${item.id}-${item.title}`}
            onClick={() => openModal(item)}
            onKeyDown={(event) => {
              if (event.target === event.currentTarget &&
                  (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                openModal(item);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${item.title} 상세 보기`}
          >
            <div className="portfolio-img-wrapper">
              {isVideoFile(item.img) ? (
                <video
                  src={item.img}
                  className="portfolio-img"
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={`${item.title} 미리보기`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={item.img}
                  alt={`Preview of ${item.title}`}
                  className="portfolio-img"
                />
              )}
            </div>

            <h3 className="portfolio-title">{item.title}</h3>
            <p className="portfolio-description">{item.description}</p>

            {item.skills?.length > 0 && (
              <div className="portfolio-skills">
                {item.skills.map((skill, index) => (
                  <img
                    src={skill}
                    alt={`Skill ${index + 1}`}
                    className="portfolio-skill"
                    key={index}
                  />
                ))}
              </div>
            )}

            {item.link && (
              <a
                href={item.link}
                className="portfolio-link"
                onClick={(event) => event.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLink className="link-icon" />
                Visit Project
              </a>
            )}
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="portfolio-modal show-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div className="modal-content" role="dialog" aria-modal="true" aria-label={selectedProject.title}>
            <button type="button" className="modal-close" onClick={closeModal}>
              닫기
            </button>

            <div className="modal-media-section">
              {selectedProject.media?.videos?.length > 0 && (
                <div className="modal-videos-grid">
                  {selectedProject.media.videos.map((video, index) => (
                    <div key={`modal-vid-${selectedProject.id}-${index}`}>
                      <video
                        key={`player-${selectedProject.id}-${index}-${videoReloadKeys[index] || 0}`}
                        ref={(element) => { videoRefs.current[index] = element; }}
                        src={video}
                        controls
                        playsInline
                        preload="metadata"
                        className="modal-video"
                        onError={(event) => handleVideoError(index, event.currentTarget)}
                        onLoadedMetadata={() => {
                          setVideoErrors((prev) => {
                            const next = { ...prev };
                            delete next[index];
                            return next;
                          });
                        }}
                        onPlay={() => {
                          if (index === 0) setShowSoundButton(false);
                        }}
                      />
                      {videoErrors[index] && (
                        <div role="alert" style={{
                          padding: 14,
                          marginTop: 10,
                          border: '1px solid #ea425a',
                          borderRadius: 10,
                          background: '#2b1820',
                          color: '#fff',
                          overflowWrap: 'anywhere',
                        }}>
                          <strong>영상 재생 오류</strong>
                          <p>{videoErrors[index]}</p>
                          <small>영상 경로: {String(video)}</small>
                          <div style={{ marginTop: 10 }}>
                            <button type="button" onClick={() => retryVideo(index)}>
                              다시 불러오기
                            </button>
                          </div>
                        </div>
                      )}
                      {index === 0 && showSoundButton && !videoErrors[index] && (
                        <button
                          type="button"
                          onClick={playWithSound}
                          style={{
                            display: 'block',
                            width: '100%',
                            marginTop: 10,
                            padding: '13px 16px',
                            border: '1px solid #ea425a',
                            borderRadius: 10,
                            background: '#b71d3c',
                            color: '#fff',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          ▶ 소리 켜고 영상 재생
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {selectedProject.media?.images?.length > 0 && (
                <div className="modal-images-grid">
                  {selectedProject.media.images.map((image, index) => (
                    <img
                      key={`modal-img-${selectedProject.id}-${index}`}
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      className="modal-image"
                    />
                  ))}
                </div>
              )}

              {!selectedProject.media?.videos?.length &&
                !selectedProject.media?.images?.length && (
                  <p className="no-media-message">미리보기 미디어가 없습니다.</p>
                )}
            </div>

            <div className="modal-text-content">
              <h3>{selectedProject.title}</h3>

              {/* fullDescription이 JSX일 수 있으므로 p 대신 div 사용 */}
              <div className="modal-full-description">
                {selectedProject.fullDescription}
              </div>

              {/* 프로젝트 자체의 상세 디자인이 없는 경우에만 기본 정보를 표시합니다. */}
              {typeof selectedProject.fullDescription === 'string' && (
                <>
                  <ul>
                    {selectedProject.period && (
                      <li><strong>기간:</strong> {selectedProject.period}</li>
                    )}
                    {selectedProject.stack && (
                      <li><strong>기술 스택:</strong> {selectedProject.stack}</li>
                    )}
                    {selectedProject.features?.length > 0 && (
                      <li>
                        <strong>주요 기능:</strong>
                        <ul>
                          {selectedProject.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      🔗 프로젝트 링크
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
