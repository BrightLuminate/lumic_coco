import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import './Data.css';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

// Skills
import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/Pro.webp';
import skillsImg6 from './assets/adobe-photoshop-logo.svg';
import skillsImg7 from './assets/django.webp';
import skillsImg8 from './assets/MySQL.webp';
// import skillsImg9 from './assets/Unity.png';
// import skillsImg10 from './assets/Blender.webp';
import skillsImg11 from './assets/Afer.png';
import skillsImg12 from './assets/AI.png';
// import skillsImg13 from './assets/pt.png';
// import skillsImg14 from './assets/zbrush.webp';
// // import skillsImg15 from './assets/3Dmax.png';
// import skillsImg16 from './assets/MAYA.png';
// import skillsImg15 from './assets/unreal.png';
// import skillsImg17 from './assets/Luke.webp';
// import skillsImg18 from './assets/MARI.png';
import skillsImg19 from './assets/Blender.jpeg';
import skillsImg20 from './assets/CInema4D.jpeg';

// Project
import projectImg1 from './assets/smart.png';
import projectImg2 from './assets/profiles.png';
import projectImg3 from './assets/kotoc.png';
import projectImg4 from './assets/videoprofil.png';
import projectImg5 from './assets/image.png';
import projectImg6 from './assets/image2.png';
import projectImg7 from './assets/smart.png';



// Image
import image1 from './assets/smart1.png';
import image2 from './assets/smart2.png';
import image3 from './assets/smart3.png';
import image4 from './assets/smart4.png';
import image5 from './assets/Fun1.png';
import image6 from './assets/Fun3.png';
import image7 from './assets/Fun4.png';
import image8 from './assets/Fun5.png';
import image9 from './assets/dog1.png';
import image10 from './assets/dog2.png';
import image11 from './assets/dog3.png';
import image12 from './assets/dog4.png';
import image13 from './assets/dog5.png';
import image14 from './assets/jawons1.png';
import image15 from './assets/jawons2.png';
import image16 from './assets/jawons3.png';
import image17 from './assets/jawons4.png';
import image18 from './assets/sideos1.png'
import image19 from './assets/sideos2.png';
import image20 from './assets/sideos3.png';
import image21 from './assets/sideos4.png';
import image22 from './assets/c0f67805-1e37-4450-acd1-63a955106103.png';


// 프로젝트 영상: 원본 파일은 src/assets/move/에 위치해야 합니다.
// Vite의 dist/는 빌드 결과물이며 소스 import 경로로 사용하지 않습니다.
import projectImg8 from './assets/move/move1.mp4';
import projectImg9 from './assets/move/move2.mp4';
import projectImg10 from './assets/move/move3.mp4';
import projectImg11 from './assets/move/move4.mp4';
import projectImg12 from './assets/move/move5.mp4';
import projectImg13 from './assets/move/move6.mp4';
import projectImg14 from './assets/move/move7.mp4';
import projectImg15 from './assets/move/move8.mp4';
import projectImg16 from './assets/move/move9.mp4';
import projectImg17 from './assets/move/move10.mp4';
import projectImg18 from './assets/move/move11.mp4';
import projectImg19 from './assets/move/move12.mp4';
import projectImg20 from './assets/move/move13.mp4';
import projectImg21 from './assets/move/move14.mp4';
import projectImg22 from './assets/move/move15.mp4';
import projectImg23 from './assets/move/move16.mp4';
import projectImg24 from './assets/move/move17.mp4';
import projectImg25 from './assets/move/move18.mp4';
import projectImg26 from './assets/move/move19.mp4';
import projectImg27 from './assets/move/move20.mp4';
import projectImg28 from './assets/move/move21.mp4';
import projectImg29 from './assets/move/move22.mp4';
import projectImg30 from './assets/move/move23.mp4';
import projectImg31 from './assets/move/move24.mp4';
import projectImg32 from './assets/move/move25.mp4';
import projectImg33 from './assets/move/move26.mp4';
import projectImg34 from './assets/move/move27.mp4';
import projectImg35 from './assets/move/move28.mp4';
import projectImg36 from './assets/move/move29.mp4';
import projectImg37 from './assets/move/move30.mp4';
import projectImg38 from './assets/move/move31.mp4';




// Color
import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';


// storybard Design

import Story1 from './assets/story1.png';
import Story2 from './assets/story2.png';
import Story3 from './assets/story3.png';
import Story4 from './assets/story4.png';
import Story5 from './assets/story5.png';
import Story6 from './assets/story6.png';
import Story7 from './assets/story7.png';
import Story8 from './assets/story8.png';

// 이 부분을 실제 파일명과 확장자(.jpg)에 맞게 수정합니다.
import Story9 from './assets/story11.jpg';
import Story10 from './assets/story12.jpg';
import Story11 from './assets/story13.jpg';
import Story12 from './assets/story14.jpg';
import Story13 from './assets/story15.jpg';
import Story14 from './assets/story16.jpg';
import Story15 from './assets/story17.jpg';
import Story16 from './assets/story18.jpg';
import Story17 from './assets/story19.jpg';


// Links
export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    title: 'Name : ',
    description: '최도현 / Lumic',
  },

  {
    title: 'Role : ',
    description: 'Junior VFX Compositor',
  },

  {
    title: 'Based in : ',
    description: 'Seoul, Korea',
  },

  {
    title: 'Availability : ',
    description: 'Open to Junior Compositor Opportunities',
  },

  {
    title: 'Email : ',
    description: 'grace71394@gmail.com',
  },

  {
    title: 'Languages : ',
    description: 'Korean / Basic English Communication',
  },
];

// Skill
export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Beginner',
    category: 'designer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Beginner',
    category: 'designer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Beginner',
    category: 'designer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Beginner',
    category: 'designer',
  },

  {
    id: 5,
    img: skillsImg8,
    title: 'MySQL',
    level: 'Beginner',
    category: 'designer',
  },

//   {
//     id: 7,
//     img: skillsImg17,
//     title: 'NUKE',
//     level: 'Beginner',
//     category: 'developer',
//   },

//   {
//     id: 8,
//     img: skillsImg16,
//     title: 'MAYA',
//     level: 'Beginner',
//     category: 'developer',
//   },
//    {
//     id: 9,
//     img: skillsImg13,
//     title: 'Substance 3D Painter',
//     level: 'Beginner',
//     category: 'developer',
//   },
//  {
//     id: 10,
//     img: skillsImg14,
//     title: 'ZBRUSH',
//     level: 'Beginner',
//     category: 'developer',
//   },
// {
//     id: 11,
//     img: skillsImg18,
//     title: 'MARI',
//     level: 'Beginner',
//     category: 'developer',
//   },

 {
    id: 10,
    img: skillsImg19,
    title: 'Blender',
    level: 'Beginner',
    category: 'Video & Motion',
  },
   {
    id: 11,
    img: skillsImg20,
    title: 'CINEMA 4D',
    level: 'Intermediate',
    category: 'Video & Motion',
  },

  {
    id: 12,
    img: skillsImg5,
    title: 'Premiere Pro',
    level: 'Intermediate',
    category: 'Video & Motion',
  },
 
  {
    id: 13,
    img: skillsImg11,
    title: 'After Effects',
    level: 'Intermediate',
    category: 'Video & Motion',
  },

  {
    id: 14,
    img: skillsImg6,
    title: 'Photoshop',
    level: 'Beginner',
    category: 'Video & Motion',
  },

  {
    id: 15,
    img: skillsImg12,
    title: 'Illustrator',
    level: 'Intermediate',
    category: 'Video & Motion',
  },
  // {
  //   id: 16,
  //   img: skillsImg15,
  //   title: 'UNREAL',
  //   level: 'Beginner',
  //   category: 'developer',
  // },
 


  // {
  //   id: 13,
  //   img: skillsImg9,
  //   title: 'Unity',
  //   level: 'Beginner',
  //   category: 'developer',
  // },
];

// Resume
export const resume = [
  {
    id: 1,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2019 - 2023',
    title: '명지대학교 (한국음악과) <span> 전통예술원 </span>',
    desc: '전통예술 전공을 통해 무대 감각, 리듬감, 장면의 흐름을 이해하며 예술적 표현력을 쌓았습니다.',
  },

  {
    id: 2,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2015 - 2019',
    title: '전주예술고등학교 <span> 국악과 </span>',
    desc: '국악 전공을 기반으로 공연 예술과 감정 표현, 무대 구성에 대한 기초를 다졌습니다.',
  },

  
  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2026.09 - 2026.11',
    title: '[과정평가형] 멀티미디어 콘텐츠제작전문가(영상편집, 프리미어, 에펙, VFX) <span> 그린컴퓨터아트학원 </span>',
    desc: `영상 콘텐츠 기획 및 스토리보드 제작부터 Premiere Pro 기반 영상 편집, After Effects 모션그래픽·VFX 합성 및 후반작업을 학습했습니다. Cinema 4D와 Blender를 활용한 3D 모델링·텍스처링·애니메이션, Photoshop·Illustrator 기반 2D 그래픽 제작과 디지털 색채 운용까지 익히며 영상·CG 콘텐츠 제작 전반의 실무 역량을 습득했습니다.`,
  },
    

  {
    id: 4,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2026.01 - 2026.03',
    title: '2D 모션 그래픽 <span> KH영상아카데미 </span>',
    desc: `After Effects를 활용해 키네틱 타이포그래피, 트랙 매트, 카메라 레이어, 글리치 효과, 발광 연출 등을 학습했습니다. 
    모션그래픽 작업을 통해 장면 전환, 화면 구성, 시각적 리듬감에 대한 이해를 쌓았습니다.`,
  },

  {
    id: 5,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2024.10 - 2025.04',
    title: 'Unity 게임프로그래밍 실무 프로젝트 제작 <span> 아텐츠게임아카데미 </span>',
    desc: `C#과 Unity 엔진을 활용해 게임 프로젝트의 기획, 디자인, 구현 과정을 경험했습니다. 
    3D 공간, 카메라 움직임, 인터랙티브 콘텐츠 제작 흐름을 이해하며 기술적 문제 해결력을 키웠습니다.`,
  },

  {
    id: 6,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2024.03 - 2024.09',
    title: 'AI(인공지능) 융합 풀스택 개발자 과정 <span> 미래융합교육원 </span>',
    desc: `Python, 웹 개발, 데이터베이스, 클라우드 기반 서비스를 학습하고 팀 프로젝트를 진행했습니다. 
    개발 경험을 통해 문제 분석, 구조 설계, 협업 및 기술적 사고력을 강화했습니다.`,
  },

  {
    id: 7,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2021.06 - 2021.10',
    title: '디지털 영상교육 전문가 양성과정 <span> 전주정보문화산업진흥원 </span>',
    desc: `영상 이론, 카메라 활용, 편집 기초, Premiere Pro, Final Cut Pro, After Effects를 학습했습니다. 
    영상 제작 흐름과 후반 작업의 기본 구조를 이해하는 계기가 되었습니다.`,
  },
];

 

  






// Awards / Certificates
export const sward = [
  {
    id: 1,
    category: 'certificate',
    icon: <RiBriefcase4Fill />,
    year: '2024.04.21',
    title: '컴퓨터 활용 1급',
    desc: `- 대한상공회의소`,
  },

  {
    id: 2,
    category: 'awardsd', // awardsd 로 컴퓨터 로  수상것들 
    icon: <RiBriefcase4Fill />,
    year: '2024.09.03',
    title: 'AI(인공지능) SW 풀스택 개방과정 프로젝트 최우수상',
    desc: `- 미래융합교육원`,
  },

  {
    id: 3,
    category: 'certificate',
    icon: <RiBriefcase4Fill />,
    year: '2024.09.03',
    title: '실무 프로젝트 AI(인공지능) SW 풀스택 과정 수료증',
    desc: `- 미래융합교육원`,
  },

  {
    id: 4,
    category: 'certificate',
    icon: <RiBriefcase4Fill />,
    year: '2021.10.08',
    title: '디지털 영상 기술 전문 인력 수료증',
    desc: `- 정보문화산업`,
  },

  {
    id: 5,
    category: 'certificate',
    icon: <RiBriefcase4Fill />,
    year: '2022.05.22',
    title: '1종 대형 면허 / 2종 면허',
    desc: `- 서울 경찰청장`,
  },

  {
    id: 6,
    category: 'certificate',
    icon: <RiBriefcase4Fill />,
    year: '2022.05.29',
    title: '지텔프 Level.2 50점',
    desc: `- 국제공인영어`,
  },

  {
    id: 7,
    category: 'awards',
    icon: <RiBriefcase4Fill />,
    year: '2016.09.10',
    title: '정읍 전국 청소년 국악 경연대회 여성가족 장관상',
    desc: `- 전국 청소년국악경연회`,
  },

  {
    id: 8,
    category: 'awards',
    icon: <RiBriefcase4Fill />,
    year: '2017.09.07',
    title: '전북대 콩쿨 성학부 동상',
    desc: `- 전북대학교 예술대학장`,
  },

  {
    id: 9,
    category: 'certificate',
    icon: <RiBriefcase4Fill />,
    year: '2022.04.22',
    title: '한국사 능력 검정시험 3급',
    desc: `- 국사편찬위원회`,
  },
];





const PREMIUM_PROJECTS = {
  // 신규 Motion Graphics 작업물 5편 (등록 순서: 18 → 22)
  18: {
    kicker: "VR GAMERS / LOGO MOTION",
    headline: ["DIGITAL LOGO", "IN MOTION."],
    subtitle: "Logo Animation · Glitch · Glow · After Effects",
    tags: ["Logo Animation", "Glitch FX", "Motion Graphics"],
    conceptTitle: "분리와 결합으로 완성하는 디지털 로고 모션",
    concept: "검은 배경 위에서 VR GAMERS 로고가 등장해 분리·이동한 뒤 다시 결합하도록 구성한 After Effects 로고 애니메이션 연습 작품입니다. 글리치와 글로우를 활용하여 디지털한 분위기와 짧은 영상의 역동적인 흐름을 표현했습니다.",
    period: '미기재',
    software: "After Effects",
    work: "Logo Animation / Keyframe Animation",
    extraLabel: "EFFECTS",
    extra: "Glitch / Glow / Timing",
    category: 'Motion Graphics',
    directions: [["Logo Reveal & Assembly", "로고의 분리·이동·재결합 과정을 키프레임 애니메이션으로 구성했습니다."], ["Glitch & Glow", "글리치와 글로우를 활용하여 디지털하고 선명한 로고 표현을 연습했습니다."], ["Timing & Motion", "로고가 등장하고 마무리되는 속도와 전환 타이밍을 조절했습니다."]],
    link: "https://youtu.be/4yr7KbdYFkA",
    linkType: 'WATCH THE PROJECT',
    disclaimer: "* 기존 작품을 참고해 제작한 경우에만 모작으로 표시해야 합니다. 본 영상은 개인 연습 작업입니다.",
  },
  19: {
    kicker: "DIMA / ABSTRACT MOTION",
    headline: ["SHAPES IN", "RHYTHM."],
    subtitle: "Abstract Motion Graphics · Shapes · Typography",
    tags: ["Shape Animation", "Typography", "Copy Practice"],
    conceptTitle: "도형과 색채로 이어지는 추상 모션",
    concept: "컬러 라인, 기하학적 도형과 타이포그래피를 결합해 화면의 움직임이 자연스럽게 연결되도록 제작한 After Effects 기반 추상 모션그래픽 모작 연습 작품입니다.",
    period: '미기재',
    software: "After Effects",
    work: "Shape Animation / Typography / Transition",
    extraLabel: "TECHNIQUE",
    extra: "Shape Layers / Keyframe Timing",
    category: 'Motion Graphics',
    directions: [["Shape & Geometry", "Shape Layer를 활용하여 컬러 라인과 기하학적 오브젝트의 이동·크기 변화·회전을 구현했습니다."], ["Typography Transitions", "타이포그래피 변화를 화면 구성과 연결하여 자연스러운 장면 전환을 연습했습니다."], ["Color & Rhythm", "선명한 색상과 도형의 움직임을 활용해 밝고 경쾌한 리듬을 표현했습니다."]],
    link: "https://youtube.com/shorts/PKvb8Tzl6Fk",
    linkType: 'WATCH THE PROJECT',
    disclaimer: "* 개인 학습 및 포트폴리오 목적의 비공식 모작 작품입니다. 원본 영상과 디자인의 권리는 각 권리자에게 있습니다.",
  },
  20: {
    kicker: "KAKAO STYLE / UI MOTION",
    headline: ["CARDS IN", "MOTION."],
    subtitle: "UI Animation · Card Motion · Typography",
    tags: ["UI Motion", "Card Animation", "Copy Practice"],
    conceptTitle: "카드와 타이포그래피가 만드는 자연스러운 UI 전환",
    concept: "카카오스타일의 UI 디자인과 카드형 콘텐츠 전환을 참고하여 제작한 개인 모션그래픽 모작 연습 작품입니다. 어두운 배경에서 콘텐츠 카드가 이동하며 이미지와 텍스트가 자연스럽게 바뀌도록 구성했습니다.",
    period: '미기재',
    software: "미기재",
    work: "UI Motion / Card Animation / Typography",
    extraLabel: "FOCUS",
    extra: "Layout Animation / Transitions",
    category: 'Motion Graphics',
    directions: [["Card Layout", "여러 콘텐츠 카드를 정돈된 화면 구조에 배치하고 정보의 흐름을 고려했습니다."], ["UI Motion & Typography", "카드 이동과 이미지·텍스트 전환을 연결해 UI 기반 모션을 연습했습니다."], ["Transition Timing", "오브젝트의 이동 속도와 장면 전환 타이밍을 맞춰 매끄러운 흐름을 구성했습니다."]],
    link: "https://youtu.be/QBbIK5M-Z_A",
    linkType: 'WATCH THE PROJECT',
    disclaimer: "* 개인 학습용 비공식 모작 작품입니다. 원본 디자인 및 관련 콘텐츠의 권리는 각 권리자에게 있습니다.",
  },
  21: {
    kicker: "MONGTTANG / AD MOTION",
    headline: ["YOUTH IN", "MOTION."],
    subtitle: "Public Platform · Advertisement · Motion Graphics",
    tags: ["Ad Motion", "Typography", "Copy Practice"],
    conceptTitle: "경쾌한 그래픽으로 플랫폼의 메시지를 전달하다",
    concept: "서울시 청소년 종합 플랫폼 ‘몽땅’ 홍보영상을 참고해 타이포그래피, 그래픽 오브젝트, 스마트폰 UI, 캐릭터 요소의 움직임을 재현한 광고형 모션그래픽 모작 연습 작품입니다.",
    period: '미기재',
    software: "미기재",
    work: "Motion Graphics / Typography / UI Motion",
    extraLabel: "PRODUCTION FOCUS",
    extra: "Characters / Transitions / Graphics",
    category: 'Motion Graphics',
    directions: [["Advertisement Structure", "홍보영상의 밝고 경쾌한 화면 전개와 정보 전달 구조를 분석했습니다."], ["Graphic & UI Motion", "타이포그래피와 그래픽 오브젝트, 스마트폰 UI 및 캐릭터 애니메이션을 구성했습니다."], ["Transitions & Timing", "장면별 오브젝트의 위치와 전환 속도, 애니메이션 타이밍을 맞춰 연출했습니다."]],
    link: "https://youtu.be/6RLj6HMJHWE",
    linkType: 'WATCH THE PROJECT',
    disclaimer: "* 개인 학습 및 포트폴리오 목적의 비공식 모작 작품입니다. 원본 영상과 브랜드의 권리는 각 권리자에게 있습니다.",
  },
  22: {
    kicker: "RED BULL / BRAND MOTION",
    headline: ["ENERGY IN", "MOTION."],
    subtitle: "Brand Animation · 2D Motion Graphics · Logo Reveal",
    tags: ["Logo Animation", "Brand Motion", "2D Graphics"],
    conceptTitle: "브랜드의 상징을 역동적인 모션으로 표현하다",
    concept: "Red Bull의 황소 로고와 브랜드 컬러를 모티브로 산맥, 선인장 등 그래픽 요소를 조합해 제작한 비공식 2D 로고 애니메이션 개인 연습 작품입니다. 움직임과 타이포그래피 전환을 마지막 제품 이미지로 연결했습니다.",
    period: '미기재',
    software: "After Effects / Illustrator",
    work: "Logo Animation / Brand Animation / Product Reveal",
    extraLabel: "PRODUCTION FOCUS",
    extra: "Graphic Composition / Typography",
    category: 'Motion Graphics',
    directions: [["Brand Visual Identity", "황소 로고와 브랜드 색상을 중심으로 그래픽 요소를 배치해 역동적인 화면을 구성했습니다."], ["Animation & Typography", "로고 구성 요소와 타이포그래피에 움직임을 부여하고 장면 전환의 타이밍을 조절했습니다."], ["Product Reveal", "마지막 제품 이미지로 자연스럽게 연결되도록 전체 모션 흐름을 구성했습니다."]],
    link: "https://youtu.be/wPlVY1DSE00",
    linkType: 'WATCH THE PROJECT',
    disclaimer: "* 개인 학습 및 포트폴리오 목적의 비공식 브랜드 모션그래픽입니다. Red Bull의 로고·상표 권리는 해당 권리자에게 있으며 공식 광고나 협업 작품이 아닙니다.",
  },
  // 신규 작품: Spider-Man 테마 Cinema 4D 개인 3D 작업 3편
  15: {
    kicker: 'SPIDER-MAN / CINEMA 4D ANIMATION',
    headline: ['HERO IN', 'MOTION.'],
    subtitle: 'Character Animation · 3D Scene · Camera Movement',
    tags: ['Cinema 4D', '3D Animation', 'Camera Work'],
    conceptTitle: '캐릭터와 카메라로 완성한 3D 시네마틱 연출',
    concept: 'Spider-Man을 모티브로 Cinema 4D에서 3D 공간과 캐릭터를 구성하고, 캐릭터의 움직임과 카메라 애니메이션, 웹 연출을 결합한 개인 3D 애니메이션 연습 작품입니다.',
    period: '미기재',
    software: 'Cinema 4D',
    work: '3D Animation / Character Animation / Camera Animation',
    extraLabel: 'PRODUCTION FOCUS',
    extra: 'Scene Composition / Motion / Rendering',
    category: '3D Modeling / Animation',
    directions: [
      ['Character & Scene Setup', 'Spider-Man 테마를 바탕으로 캐릭터와 오브젝트를 배치하고, 장면의 구도와 3D 공간감을 구성했습니다.'],
      ['Camera Animation', '카메라 움직임과 캐릭터의 동선을 연결해 짧은 시네마틱 장면의 흐름을 연습했습니다.'],
      ['Motion & Rendering', '캐릭터 애니메이션과 웹 연출을 조합하고, 최종 렌더링을 통해 3D 연출 과정을 경험했습니다.'],
    ],
    link: 'https://youtu.be/HKN0Vz5RWIc',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* Spider-Man을 모티브로 한 개인 학습용 비공식 3D 연습 작품입니다. 원작 캐릭터와 관련된 권리는 각 권리자에게 있습니다.',
  },
  16: {
    kicker: 'SPIDER-MAN / HELICOPTER CG VFX',
    headline: ['CG MEETS', 'REALITY.'],
    subtitle: 'Helicopter CG · Scene Composition · VFX Practice',
    tags: ['Cinema 4D', 'CG Compositing', 'VFX'],
    conceptTitle: '도심 실사 장면에 3D 요소를 결합하다',
    concept: '도심 배경에 헬리콥터와 Spider-Man 테마의 캐릭터 CG 요소를 배치하고, 카메라 구도와 오브젝트의 위치·크기·움직임을 조정하여 실사 영상과 3D 요소가 자연스럽게 어우러지도록 구성한 개인 CG/VFX 연습 작품입니다.',
    period: '미기재',
    software: 'Cinema 4D',
    work: 'CG Compositing / 3D Animation / Camera Work',
    extraLabel: 'PRODUCTION FOCUS',
    extra: 'VFX / Scene Composition / Object Placement',
    category: '3D Modeling / Animation',
    directions: [
      ['CG Scene Composition', '도심 배경의 카메라 구도를 기준으로 헬리콥터와 캐릭터 요소를 배치해 장면을 구성했습니다.'],
      ['Scale & Camera Matching', '실사 배경에 맞게 오브젝트의 위치와 크기, 움직임을 조절하는 과정을 연습했습니다.'],
      ['VFX Integration', '3D CG와 실사 영상이 자연스럽게 연결되도록 시점과 동작의 일관성에 중점을 두었습니다.'],
    ],
    link: 'https://youtu.be/4x4bphl4EHc',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* Spider-Man을 모티브로 한 개인 학습용 비공식 CG/VFX 연습 작품입니다. 원작 캐릭터와 관련된 권리는 각 권리자에게 있습니다.',
  },
  17: {
    kicker: 'SPIDER-MAN / PRISON ENVIRONMENT',
    headline: ['SHADOWS OF', 'THE PRISON.'],
    subtitle: '3D Environment · Character Animation · Cinematic Camera',
    tags: ['Cinema 4D', '3D Modeling', 'Lighting'],
    conceptTitle: '어두운 감옥 공간에 시네마틱한 깊이를 더하다',
    concept: 'Cinema 4D에서 어두운 감옥을 배경으로 3D 환경을 구성하고, Spider-Man 테마 캐릭터 배치와 카메라 연출, 애니메이션, 라이팅을 통해 공간감과 분위기를 표현한 개인 3D 연습 작품입니다.',
    period: '미기재',
    software: 'Cinema 4D',
    work: '3D Modeling / Scene Design / Character Animation',
    extraLabel: 'PRODUCTION FOCUS',
    extra: 'Camera Animation / Lighting / Rendering',
    category: '3D Modeling / Animation',
    directions: [
      ['Environment & Scene Design', '어두운 감옥 환경을 중심으로 공간 구조와 캐릭터 배치를 구성했습니다.'],
      ['Lighting & Atmosphere', '라이팅과 장면 구도를 활용하여 감옥 특유의 어두운 분위기와 깊이감을 표현했습니다.'],
      ['Camera & Character Motion', '캐릭터 애니메이션과 카메라 이동을 연결해 공간감이 자연스럽게 전달되도록 연출했습니다.'],
    ],
    link: 'https://youtu.be/MdPBxeVrVSU',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* Spider-Man을 모티브로 한 개인 학습용 비공식 3D 연습 작품입니다. 원작 캐릭터와 관련된 권리는 각 권리자에게 있습니다.',
  },
  13: {
    kicker: 'DELIVER US FROM EVIL / CREATIVE TRAILER',
    headline: ['DARKNESS', 'IN PURSUIT.'],
    subtitle: 'Action Thriller · Creative Fan-Made Trailer · Re-Editing',
    tags: ['Creative Trailer', 'Action Editing', 'Sound Design'],
    conceptTitle: '추격과 복수의 감정을 새로운 트레일러로 재구성하다',
    concept: '영화 《다만 악에서 구하소서》의 기존 장면을 활용하여 새로운 흐름으로 기획한 개인 창작 예고편입니다. DARK / CHASE / REVENGE / RESCUE / DUEL의 다섯 키워드를 중심으로 대립과 추격, 감정의 긴장감을 짧은 시네마틱 트레일러에 담았습니다.',
    period: '미기재',
    software: 'Adobe Premiere Pro',
    work: 'Creative Trailer Re-Editing / Cut Editing / Storyboard Design',
    extraLabel: 'KEYWORDS & SOUND',
    extra: 'Dark / Chase / Revenge / Rescue / Duel · Sound Design',
    category: 'Personal Creative Work / Fan-Made Trailer',
    directions: [
      ['Planning & Storyboard', '다섯 가지 핵심 키워드에 맞춰 예고편의 스토리 흐름을 기획하고, 장면 구성과 스토리보드를 설계했습니다.'],
      ['Cinematic Action Editing', '추격전과 인물 간 대립을 중심으로 장면을 재배치하고, 컷 타이밍과 화면 구도를 고려하여 액션의 속도감과 긴장감을 높였습니다.'],
      ['Sound Design & Rhythm', '배경음악과 효과음을 장면 전환에 맞춰 구성하고, 추격의 속도감과 액션의 타격감이 자연스럽게 전달되도록 편집했습니다.'],
    ],
    link: 'https://youtu.be/Y9hWX69J79s',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 포트폴리오용 비공식 팬메이드 창작·재편집 예고편입니다. 원본 영화의 영상·음원 권리는 각 권리자에게 있으며 공식 예고편이 아닙니다.',
  },
  14: {
    kicker: 'SWEET & SOUR / ROMANCE TRAILER',
    headline: ['LOVE IN', 'TRANSITION.'],
    subtitle: 'Romance Film · Trailer Copy Practice · Fan-Made Re-Edit',
    tags: ['Romance', 'Emotional Editing', 'Trailer Re-Edit'],
    conceptTitle: '설렘에서 갈등까지, 사랑의 감정선을 편집하다',
    concept: '영화 《새콤달콤》의 기존 영상 소스를 재구성한 로맨스 영화 예고편 모작 및 개인 재편집 작품입니다. 인물의 대사와 표정, 관계 변화를 따라 사랑의 시작과 현실적인 갈등이 자연스럽게 이어지도록 구성했습니다.',
    period: '미기재',
    software: 'Adobe Premiere Pro',
    work: 'Trailer Re-Editing / Cut Editing / Scene Composition',
    extraLabel: 'EDITING STYLE',
    extra: 'Romantic Storytelling / Emotional Editing / Pacing & Rhythm',
    category: 'Personal Practice Work / Fan-Made Trailer',
    directions: [
      ['Romantic Storytelling', '설레는 사랑의 시작부터 갈등과 감정 변화까지 이어지는 주요 장면을 선택하고 예고편의 이야기 흐름을 구성했습니다.'],
      ['Dialogue & Emotional Continuity', '인물의 대사와 표정, 관계 변화를 연결하여 로맨스 특유의 감정선과 몰입감을 살렸습니다.'],
      ['Cut Editing & Pacing', '장면 전환과 컷 편집의 타이밍, 전개 속도와 영상 리듬을 조절해 감성적인 트레일러의 완성도를 높였습니다.'],
    ],
    link: 'https://youtu.be/2SvEC6L1ljQ',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 포트폴리오용 비공식 팬메이드 예고편 모작·재편집 작품입니다. 원본 영화의 영상·음원 권리는 각 권리자에게 있습니다.',
  },
  12: {
    kicker: 'EXTREME JOB / TRAILER RE-EDIT',
    headline: ['COMEDY', 'MEETS ACTION.'],
    subtitle: 'Film Trailer · Fan-Made Re-Edit · Personal Practice',
    tags: ['Trailer Editing', 'Comedy & Action', 'Fan-Made'],
    conceptTitle: '웃음과 긴장감을 하나의 예고편으로 재구성하다',
    concept: '영화 《극한직업》의 기존 영상 소스를 재편집한 비공식 팬메이드 예고편입니다. 유쾌한 코미디와 액션을 중심으로 대사, 인물의 리액션과 주요 장면을 재배치해 예고편의 흐름과 몰입감을 표현했습니다.',
    period: '미기재',
    software: 'Adobe Premiere Pro',
    work: 'Trailer Re-Editing / Cut Editing / Scene Composition',
    extraLabel: 'EDITING STYLE',
    extra: 'Comedy & Action / Pacing & Rhythm',
    category: 'Film Editing / Fan-Made Trailer',
    directions: [
      ['Storytelling & Scene Composition', '영화의 주요 장면을 예고편 구성에 맞게 선별하고 배치하여 코미디와 액션의 흐름이 자연스럽게 이어지도록 편집했습니다.'],
      ['Dialogue & Reaction Editing', '인물들의 대사와 리액션을 이어 붙이며 코믹한 타이밍과 장면 간 연결감을 살렸습니다.'],
      ['Pacing, Rhythm & Trailer Editing', '컷 타이밍과 장면 전환, 전개 속도를 조절해 웃음과 긴장감이 조화를 이루도록 구성했습니다.'],
    ],
    link: 'https://youtu.be/nH_dwY5dGGc',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 포트폴리오 목적의 비공식 재편집 작품이며, 원본 영화의 영상·음원 권리는 각 권리자에게 있습니다.',
  },


  "3": {
    "kicker": "KOREAN ART / EMOTIONAL MOTION",
    "headline": [
      "SOUND OF",
      "EMOTION."
    ],
    "subtitle": "Traditional Pansori · Emotional Motion Graphics",
    "tags": [
      "Motion Graphics",
      "Pansori",
      "Sound Visualization"
    ],
    "conceptTitle": "전통의 소리를 움직임으로 표현하다",
    "concept": "판소리의 정서와 인간 내면의 감정을 색채와 움직임으로 표현한 모션그래픽 프로젝트입니다. 전통예술의 호흡과 리듬을 현대적인 영상 언어로 재해석했습니다.",
    "period": "2021.08.01 — 08.20",
    "software": "After Effects / Premiere Pro",
    "work": "Motion Graphics / Audio Visualization",
    "extraLabel": "SOUND CONCEPT",
    "extra": "Korean Traditional Music / Pansori",
    "category": "Emotional Motion Graphics",
    "directions": [
      [
        "Sound & Rhythm",
        "판소리의 음성·리듬과 감정의 흐름을 시각적 움직임으로 표현했습니다."
      ],
      [
        "Emotion & Color",
        "감정 변화에 따라 색채와 시각 효과를 전환하여 분위기를 전달했습니다."
      ],
      [
        "Traditional & Digital",
        "전통 소리의 감각을 디지털 모션그래픽과 결합해 새로운 시각적 표현을 시도했습니다."
      ]
    ],
    "link": "https://www.youtube.com/watch?v=ZH9wK5BsBj4",
    "linkType": "WATCH THE PROJECT"
  },
  "4": {
    "kicker": "SMART FACTORY / CUT EDITING",
    "headline": [
      "SMART FACTORY",
      "IN FOCUS."
    ],
    "subtitle": "Technology Showcase · AI Manufacturing · Cut Editing",
    "tags": [
      "Cut Editing",
      "AI Manufacturing",
      "Tech Showcase"
    ],
    "conceptTitle": "복잡한 기술을 명확한 영상으로 전달하다",
    "concept": "ROS 기반 물류 로봇, AI 품질 검사, 데이터 시각화 등 스마트 팩토리의 주요 기능을 핵심 장면 중심으로 재구성한 컷편집 프로젝트입니다.",
    "period": "2024.06.27 — 08.20",
    "software": "Premiere Pro / Editing",
    "work": "Cut Editing / Project Showcase",
    "extraLabel": "TECHNOLOGY",
    "extra": "ROS / Python / Django / AWS S3 / MySQL",
    "category": "Cut Edit / Technology Presentation",
    "directions": [
      [
        "System Showcase",
        "물류 로봇의 QR 인식·라인트레이싱·장애물 탐지 등 동작 장면을 기능별로 보여줍니다."
      ],
      [
        "AI & Data",
        "머신러닝 품질 검사 결과와 API·클라우드 연동, 데이터 시각화 화면을 중심으로 구성했습니다."
      ],
      [
        "Editing & Story Flow",
        "기술 소개와 성과가 빠르게 전달되도록 장면을 선별하고 편집의 흐름을 정리했습니다."
      ]
    ],
    "link": "https://www.youtube.com/watch?v=tacMyginHlI",
    "linkType": "WATCH THE PROJECT"
  },
  "5": {
    "kicker": "SMART FACTORY / FULL STACK",
    "headline": [
      "INTELLIGENT",
      "FACTORY."
    ],
    "subtitle": "Robotics · AI Quality Inspection · System Development",
    "tags": [
      "ROS",
      "Machine Learning",
      "Full Stack"
    ],
    "conceptTitle": "로봇 제어와 AI 품질 검사를 하나로 연결하다",
    "concept": "ROS 기반 물류 로봇 제어, AI 품질 검사, Django API와 AWS 연동을 결합한 스마트 팩토리 시스템 개발 프로젝트입니다.",
    "period": "2024.06.27 — 08.20",
    "software": "ROS / Python / Django / MySQL",
    "work": "System Development / API Integration",
    "extraLabel": "PLATFORM",
    "extra": "AWS S3 / HTML / CSS / JavaScript",
    "category": "Web and App Design",
    "directions": [
      [
        "Robotics Control",
        "QR 인식, 라인트레이싱, 장애물 탐지를 활용한 물류 로봇 제어 기능을 구현했습니다."
      ],
      [
        "AI Quality Inspection",
        "머신러닝 기반 품질 검사와 분류 결과를 시스템에 연결했습니다."
      ],
      [
        "Data & Integration",
        "Django REST API, 데이터베이스 및 AWS S3 연동과 데이터 시각화 기능을 구성했습니다."
      ]
    ],
    "link": "https://github.com/BrightLuminate/myproject.git",
    "linkType": "VIEW REPOSITORY"
  },
  "6": {
    "kicker": "TRADITIONAL ARTS / WEB DESIGN",
    "headline": [
      "ART MEETS",
      "DIGITAL."
    ],
    "subtitle": "Artist Website · Web Development · Cultural Experience",
    "tags": [
      "React",
      "Responsive Web",
      "UI / UX"
    ],
    "conceptTitle": "전통예술의 이야기를 디지털 공간으로 옮기다",
    "concept": "류재원 교수님의 공연 정보와 예술 활동을 체계적으로 소개하는 개인 웹사이트입니다. 공연 콘텐츠 탐색과 사용자 경험을 중심으로 설계했습니다.",
    "period": "2024.11.20 — 12.20",
    "software": "React / CSS / JavaScript",
    "work": "Web Development / UI·UX Design",
    "extraLabel": "CONTENT",
    "extra": "Traditional Music / Performance Archive",
    "category": "Web and App Design",
    "directions": [
      [
        "Performance Showcase",
        "예정 공연과 지난 공연을 시각적으로 구분하여 쉽게 탐색할 수 있도록 구성했습니다."
      ],
      [
        "Category & Navigation",
        "국악 전통·국악 판타지 카테고리 필터와 직관적인 탐색 구조를 설계했습니다."
      ],
      [
        "Responsive Experience",
        "모바일을 포함한 여러 화면 크기에서 공연 이미지와 정보를 보기 쉽게 배치했습니다."
      ]
    ],
    "link": "https://github.com/BrightLuminate/jawnproject.git",
    "linkType": "VIEW REPOSITORY"
  },
  "7": {
    "kicker": "PORTFOLIO / INTERACTION DESIGN",
    "headline": [
      "MOTION-DRIVEN",
      "WEB."
    ],
    "subtitle": "React · Framer Motion · Portfolio Experience",
    "tags": [
      "React",
      "Framer Motion",
      "Responsive"
    ],
    "conceptTitle": "움직임과 탐색 경험을 결합한 웹 포트폴리오",
    "concept": "React와 Framer Motion으로 제작한 포트폴리오 사이트입니다. 페이지 전환과 내비게이션, 모바일 최적화를 통해 자연스러운 사용자 흐름을 구현했습니다.",
    "period": "2024.05.25 — 06.01",
    "software": "React / Framer Motion / JavaScript",
    "work": "Front-end / Interaction Design",
    "extraLabel": "FRONTEND",
    "extra": "HTML / CSS / Responsive Web",
    "category": "Web and App Design",
    "directions": [
      [
        "Motion Transitions",
        "PageTransition과 StairTransition을 활용해 페이지 전환의 흐름을 설계했습니다."
      ],
      [
        "Responsive Navigation",
        "모바일 내비게이션과 다양한 화면 크기를 고려해 탐색 경험을 구성했습니다."
      ],
      [
        "Portfolio Presentation",
        "Stats 컴포넌트와 콘텐츠 배치로 정보를 시각적으로 전달했습니다."
      ]
    ],
    "link": "https://github.com/BrightLuminate/portfolio",
    "linkType": "VIEW REPOSITORY"
  },
  
  "8": {
    "kicker": "COMMUNITY / WEB APPLICATION",
    "headline": [
      "CONNECT",
      "TOGETHER."
    ],
    "subtitle": "Dog Community · Flask · Messaging Application",
    "tags": [
      "Flask",
      "Messaging",
      "Web App"
    ],
    "conceptTitle": "반려견 커뮤니티를 위한 소통 플랫폼",
    "concept": "반려견을 주제로 사용자들이 소통할 수 있도록 회원가입과 로그인, 친구 목록, 채팅 기능을 구현한 Flask 기반 웹 애플리케이션입니다.",
    "period": "2024.06.13 — 06.20",
    "software": "Flask / HTML / CSS / JavaScript",
    "work": "Full-stack Web Development",
    "extraLabel": "CORE FEATURES",
    "extra": "Authentication / Friends / Chat",
    "category": "Web and App Design",
    "directions": [
      [
        "Account & Access",
        "회원가입, 로그인, 비밀번호 찾기 등 계정 관련 기능을 구현했습니다."
      ],
      [
        "Messaging Experience",
        "친구 목록과 채팅창 UI를 구성해 사용자 간 소통 흐름을 설계했습니다."
      ],
      [
        "Application Integration",
        "Flask 백엔드와 프론트엔드를 연결하고 반응형 UI 및 기능 테스트를 진행했습니다."
      ]
    ],
    "link": "https://github.com/BrightLuminate/Messaging.git",
    "linkType": "VIEW REPOSITORY"
  },
  "9": {
    "kicker": "VIDEO / WEB PORTFOLIO",
    "headline": [
      "SHOWCASE",
      "YOUR WORK."
    ],
    "subtitle": "Video Portfolio · Flask · UI / UX",
    "tags": [
      "Flask",
      "Video Portfolio",
      "Web Design"
    ],
    "conceptTitle": "영상 작업을 돋보이게 만드는 포트폴리오 공간",
    "concept": "영상 및 예술 콘텐츠를 소개하는 Flask 기반 웹 포트폴리오입니다. 콘텐츠 중심 UI와 로그인 기능을 포함해 기획부터 개발까지 진행했습니다.",
    "period": "2024.04.26 — 05.11",
    "software": "Flask / HTML / CSS / JavaScript",
    "work": "Web Development / UI·UX Design",
    "extraLabel": "CONTENT TYPE",
    "extra": "Video / Image / Project Archive",
    "category": "Web and App Design",
    "directions": [
      [
        "Visual Showcase",
        "영상과 이미지를 중심으로 프로젝트가 잘 드러나도록 갤러리와 상세 화면을 구성했습니다."
      ],
      [
        "UI & Information Flow",
        "콘텐츠 탐색 구조와 화면 디자인을 기획하고 웹 인터페이스를 개발했습니다."
      ],
      [
        "Authentication & Testing",
        "로그인·로그아웃 기능을 구현하고 사이트 기능을 점검했습니다."
      ]
    ],
    "link": "https://github.com/BrightLuminate/project.git",
    "linkType": "VIEW REPOSITORY"
  },
  "10": {
    "kicker": "DEXTER / STORYBOARD DESIGN",
    "headline": [
      "DESIGN THE",
      "EXPERIENCE."
    ],
    "subtitle": "Mobile Web · Storyboard · Cinematic UI / UX",
    "tags": [
      "Storyboard",
      "Mobile UX",
      "Dark UI"
    ],
    "conceptTitle": "시네마틱 경험을 설계하는 모바일 스토리보드",
    "concept": "덱스터 스튜디오의 브랜드 정체성을 재해석한 모바일 UI/UX 스토리보드 작업입니다. 정보 구조와 화면 흐름을 실제 개발 협업을 고려하여 기획했습니다.",
    "period": "2026.06.01 — 06.05",
    "software": "Canva / Illustrator",
    "work": "Storyboard / UX Planning / UI Design",
    "extraLabel": "DESIGN SYSTEM",
    "extra": "Navigation / Cards / Infographics",
    "category": "Storyboard / Planning & Design",
    "directions": [
      [
        "Cinematic Identity",
        "다크 UI와 메인 비주얼을 통해 영상·VFX 기업의 분위기를 표현했습니다."
      ],
      [
        "Navigation & Information",
        "ABOUT US, CONTENTS, CAREERS 등 주요 메뉴를 연결하는 탐색 흐름과 다국어 확장성을 고려했습니다."
      ],
      [
        "Screen-by-screen Planning",
        "카드, 슬라이드, 타임라인, 채용 프로세스 등을 스토리보드로 구조화했습니다."
      ]
    ],
    "link": "https://youtu.be/nk8BP-Y-HzY",
    "linkType": "WATCH THE PROJECT"
  },
  "11": {
    "kicker": "DEXTER / COLOR SYSTEM",
    "headline": [
      "COLOR BUILDS",
      "IDENTITY."
    ],
    "subtitle": "Cinematic Dark UI · Color Guidelines · Visual System",
    "tags": [
      "Color Guide",
      "UI Design",
      "Storyboard"
    ],
    "conceptTitle": "컬러 시스템으로 정리한 시네마틱 브랜드 경험",
    "concept": "덱스터 스튜디오 모바일 웹사이트 스토리보드의 색상 사용 원칙을 정리한 디자인 작업입니다. 화면별 시각적 일관성과 콘텐츠 가독성에 집중했습니다.",
    "period": "2026.06.01 — 06.05",
    "software": "Canva / Illustrator",
    "work": "UI Color System / Storyboard",
    "extraLabel": "MAIN PALETTE",
    "extra": "Charcoal / White / Black / Dexter Red",
    "category": "Storyboard / Planning & Design",
    "directions": [
      [
        "Color Usage Ratio",
        "Dark Charcoal 60%, White 20%, Black 10%, Point Red 10%의 사용 비중을 기준으로 컬러를 구성했습니다."
      ],
      [
        "Page-specific Palette",
        "WHAT WE DO, 회사 연혁, 콘텐츠 상세, CAREERS 등 페이지 성격에 따라 보조 색상을 구분했습니다."
      ],
      [
        "Visual Consistency",
        "강조색과 명도 대비, 그라데이션 단계를 활용해 사이트 전반의 톤을 통일했습니다."
      ]
    ],
    "link": "https://youtu.be/nk8BP-Y-HzY",
    "linkType": "WATCH THE PROJECT"
  },
  23: {
    kicker: 'SMILE 2 / HORROR TRAILER EDIT',
    headline: ['FEAR BEHIND', 'THE SMILE.'],
    subtitle: 'Horror Trailer · Cinematic Re-Editing · Personal Practice',
    tags: ['Horror Editing', 'Trailer Re-Edit', 'Sound Design'],
    conceptTitle: '미소 뒤의 공포, 불안과 긴장감을 편집하다',
    concept: '영화 《스마일 2(SMILE 2)》의 예고편을 참고해 기존 영상 소스를 새롭게 구성한 개인 모작·재편집 작품입니다. 인물의 표정과 심리적 불안, 고조되는 긴장감을 장면 구성과 컷 타이밍, 사운드의 강약으로 전달하는 데 중점을 두었습니다.',
    period: '미기재',
    software: 'Adobe Premiere Pro / Adobe After Effects',
    work: 'Movie Trailer Editing / Horror Editing / Cut Editing',
    extraLabel: 'EDITING FOCUS',
    extra: 'Sound Design / Scene Composition / Tension & Rhythm',
    category: 'Movie Trailer Copy Practice / Horror Trailer Editing',
    directions: [
      ['Psychological Tension', '인물의 표정과 정적인 장면을 배치해 심리적인 불안과 섬뜩한 분위기를 강조했습니다.'],
      ['Cut Editing & Contrast', '빠른 장면 전환과 정적인 순간을 대비시켜 공포와 긴장감이 점차 높아지는 예고편의 편집 리듬을 연습했습니다.'],
      ['Sound Design & Atmosphere', '사운드의 강약과 장면 전환 타이밍을 맞춰 공포 영화 특유의 몰입감을 표현했습니다.'],
    ],
    link: 'https://youtu.be/5tRqCg_HD5M',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 포트폴리오 목적으로 제작한 비공식 영화 예고편 모작·재편집 작품입니다. 원본 영화, 영상 및 음악의 권리는 각 권리자에게 있으며 공식 제작사와 무관합니다.',
  },

  24: {
    kicker: 'LG U+ / ADVERTISEMENT MOTION',
    headline: ['EVERYDAY', 'IN MOTION.'],
    subtitle: 'Brand Advertisement · Typography Animation · Copy Practice',
    tags: ['Motion Graphics', 'Typography', 'Advertisement Copy'],
    conceptTitle: '가족의 아침, 시간의 흐름을 타이포그래피로 표현하다',
    concept: 'LG U+ 브랜드 광고 영상을 참고하여 After Effects로 제작한 개인 모션그래픽 모작 작품입니다. 가족의 평범한 아침을 담은 실사 영상 위에 시간 표시, 텍스트 애니메이션과 컬러 포인트를 더해 브랜드 메시지가 자연스럽게 전달되도록 구성했습니다.',
    period: '미기재',
    software: 'Adobe After Effects',
    work: 'Motion Graphics / Typography Animation / Video Compositing',
    extraLabel: 'EDITING FOCUS',
    extra: 'Text Animation / Time Display / Advertisement Motion',
    category: 'Advertisement Copy Practice / Motion Graphics',
    directions: [
      ['Typography & Time Flow', '가족의 아침과 시간의 흐름에 따라 시간 표기와 타이포그래피가 변화하도록 키프레임을 조절했습니다.'],
      ['Live-action Compositing', '실사 영상 위에 글자와 컬러 포인트를 합성하여 원본 광고의 시각적인 구성을 연습했습니다.'],
      ['Transitions & Message Delivery', '장면 전환과 텍스트 등장 타이밍을 조정해 짧은 광고에서도 메시지가 자연스럽게 이어지도록 연출했습니다.'],
    ],
    link: 'https://youtu.be/EsKBNwuBkuE',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 포트폴리오 목적의 비공식 광고 모작 작품입니다. 원본 영상과 LG U+ 브랜드 관련 권리는 해당 권리자에게 있으며 공식 광고·협업 작품이 아닙니다.',
  },
  25: {
    kicker: 'EMOTION MUSHROOM / 2D ICON MOTION',
    headline: ['FOUR EMOTIONS', 'ONE STORY.'],
    subtitle: '2D Character Icons · Emotion Design · Motion Graphics',
    tags: ['2D Animation', 'Emotion Icons', 'Character Design'],
    conceptTitle: '네 가지 감정을 귀여운 버섯 캐릭터로 시각화하다',
    concept: '《희노애락(喜怒哀樂)》은 기쁨, 분노, 슬픔, 즐거움의 네 가지 감정을 친근한 버섯 캐릭터 아이콘으로 표현한 개인 2D 애니메이션 포트폴리오입니다. 노랑·빨강·파랑·주황의 컬러와 표정, 움직임을 사용해 감정의 차이가 직관적으로 드러나도록 구성했습니다.',
    period: '2026',
    software: '미기재',
    work: '2D Character Design / Emotion Icon Design / 2D Animation',
    extraLabel: 'VISUAL STORYTELLING',
    extra: 'Emotion Colors / Facial Expression / Character Motion',
    category: '2D Animation / Character Motion Graphics',
    directions: [
      ['Emotion-based Color Design', '노란색, 빨간색, 파란색, 주황색으로 감정별 분위기를 구분하고 캐릭터의 개성을 강조했습니다.'],
      ['Expression & Character Motion', '버섯 캐릭터의 표정과 제스처를 각 감정에 맞게 구성해 감정의 변화가 명확히 전달되도록 표현했습니다.'],
      ['Friendly Visual Storytelling', '추상적인 감정을 친근한 2D 아이콘과 애니메이션으로 풀어 누구나 쉽게 이해할 수 있도록 기획했습니다.'],
    ],
    link: 'https://youtu.be/eCqErvw7GoQ',
    linkType: 'WATCH THE PROJECT',
  },
  26: {
    kicker: 'TIMO / FOUR EMOTIONS ANIMATION',
    headline: ['ONE CHARACTER', 'FOUR EMOTIONS.'],
    subtitle: 'Timo · 2D Character Animation · Emotional Storytelling',
    tags: ['2D Animation', 'Character Expressions', 'Emotion Motion'],
    conceptTitle: '티모 하나로 표현하는 희·노·애·락의 감정 변화',
    concept: '《티모 희노애락(喜怒哀樂)》은 하나의 캐릭터 티모를 바탕으로 기쁨, 분노, 슬픔, 즐거움이라는 네 가지 감정을 표현한 2D 애니메이션 아이콘 포트폴리오입니다. 캐릭터의 동일한 디자인을 유지하면서 표정, 제스처, 색채, 배경 효과와 움직임을 변화시켜 감정의 특징을 시각적으로 전달했습니다.',
    period: '2026',
    software: '미기재',
    work: '2D Character Design / 2D Animation / Motion Graphics',
    extraLabel: 'EMOTION DESIGN',
    extra: '喜 Joy / 怒 Anger / 哀 Sadness / 樂 Fun',
    category: '2D Animation / Character Motion Graphics / Icon Design',
    directions: [
      ['喜 · Joy & 怒 · Anger', '기쁨은 밝은 표정과 따뜻한 자연 배경으로, 분노는 강렬한 표정과 역동적인 움직임으로 대비시켰습니다.'],
      ['哀 · Sadness & 樂 · Fun', '슬픔은 먹구름과 비, 눈물과 움츠린 자세로, 즐거움은 선명한 색채와 음악·그래픽 효과로 연출했습니다.'],
      ['Consistent Character, Different Feelings', '하나의 티모 캐릭터 디자인을 일관되게 유지하면서 표정·동작·컬러·배경을 달리해 네 가지 감정을 효과적으로 구분했습니다.'],
    ],
    link: 'https://youtu.be/coxmNu-gWJU',
    linkType: 'WATCH THE PROJECT',
  },
  27: {
    kicker: 'MOGRAPH WORLD / 3D NEWS INTRO',
    headline: ['WORLD NEWS', 'IN MOTION.'],
    subtitle: 'Cinema 4D · After Effects · Broadcast Motion Design',
    tags: ['3D Motion Graphics', 'MoGraph', 'News Intro'],
    conceptTitle: '회전하는 지구본과 3D 그래픽으로 뉴스의 역동성을 표현하다',
    concept: '《MoGraph World – NEWS Intro》는 Cinema 4D와 Adobe After Effects를 활용해 제작한 개인 3D 뉴스 인트로 포트폴리오입니다. 방송 뉴스의 지구본과 회전형 그래픽을 모티브로 오브젝트의 반복 배열, 회전 링, 카메라 움직임을 결합해 입체적인 공간감과 속도감을 표현했습니다.',
    period: '미기재',
    software: 'Cinema 4D / Adobe After Effects',
    work: '3D Motion Graphics / MoGraph Animation / News Intro Design',
    extraLabel: '3D TECHNIQUES',
    extra: 'Cloner / Random Effector / Sweep & Lathe / Camera Animation',
    category: '3D Motion Graphics / Broadcast Design / News Intro Animation',
    directions: [
      ['Cloner & Random Effector', 'Cinema 4D Cloner로 반복 구조를 만들고 MoGraph Random Effector로 오브젝트의 위치·회전·크기를 변화시켜 역동적인 움직임을 구성했습니다.'],
      ['Sweep & Lathe Modeling', 'Sweep 및 Lathe Generator로 뉴스 그래픽을 모델링하고 지구본 주변을 회전하는 링 구조를 설계했습니다.'],
      ['Camera Motion & Broadcast Finish', '카메라 애니메이션으로 공간의 깊이와 속도감을 강조하고 After Effects를 함께 활용해 방송 뉴스 인트로 형태로 완성했습니다.'],
    ],
    link: 'https://youtu.be/SY2VDK9eZX8',
    linkType: 'WATCH THE PROJECT',
  },
  28: {
    kicker: 'SPIDER-MAN / SD CHARACTER MODELING',
    headline: ['SMALL HERO', 'BIG CHARACTER.'],
    subtitle: 'Cinema 4D · Blender · 3D Character Modeling & Texturing',
    tags: ['SD Character', '3D Modeling', 'Texturing', 'Fan Art'],
    conceptTitle: '스파이더맨을 귀여운 SD 캐릭터로 재해석하다',
    concept: '《Spider-Man SD Character》는 Cinema 4D와 Blender를 활용하여 스파이더맨을 SD(Super Deformed) 비율로 재해석한 비공식 개인 3D 캐릭터 포트폴리오입니다. 머리와 몸의 비율을 단순화하면서 얼굴 형태, 눈 디자인, 의상 디테일과 색상 균형을 조정해 원작 캐릭터의 개성을 살렸습니다. Cinema 4D에서 기본 구조와 실루엣을 모델링한 후 FBX로 내보내 Blender에서 머티리얼·텍스처·라이팅·렌더링을 진행했습니다.',
    period: '미기재',
    software: 'Cinema 4D / Blender',
    work: '3D Character Modeling / SD Character Design / Texturing / Rendering',
    extraLabel: 'PRODUCTION WORKFLOW',
    extra: 'Cinema 4D Modeling / FBX Transfer / Blender Materials & Lighting',
    category: '3D Modeling / Character Design / Texturing',
    directions: [
      ['SD Character Modeling', '스파이더맨의 형태를 SD 비율로 단순화하고 정면·후면·측면에서 자연스럽게 보이는 실루엣과 신체 구조를 Cinema 4D에서 제작했습니다.'],
      ['FBX Workflow & Texturing', 'Cinema 4D 모델을 FBX로 내보낸 뒤 Blender로 가져와 재질, 텍스처, 눈과 의상 디테일 및 색상 균형을 조정했습니다.'],
      ['Lighting & Final Rendering', 'Blender에서 라이팅과 최종 렌더링을 구성하여 SD 캐릭터의 귀엽고 간결한 조형과 시각적 완성도를 높였습니다.'],
    ],
    link: 'https://youtu.be/vXOgFuDLpWw',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 비상업적 포트폴리오를 위해 제작한 비공식 팬아트입니다. Spider-Man 캐릭터와 관련된 지식재산권은 각 권리자에게 있으며 공식 제작사와 무관합니다.',
  },
  29: {
    kicker: 'SPIDER-MAN / SD CHARACTER MODELING',
    headline: ['SMALL HERO', 'BIG CHARACTER.'],
    subtitle: 'Cinema 4D · Blender · 3D Character Modeling & Texturing',
    tags: ['SD Character', '3D Modeling', 'Texturing', 'Fan Art'],
    conceptTitle: '스파이더맨을 귀여운 SD 캐릭터로 재해석하다',
    concept: '《Spider-Man SD Character》는 Cinema 4D와 Blender를 활용하여 스파이더맨을 SD(Super Deformed) 비율로 재해석한 비공식 개인 3D 캐릭터 포트폴리오입니다. 머리와 몸의 비율을 단순화하면서 얼굴 형태, 눈 디자인, 의상 디테일과 색상 균형을 조정해 원작 캐릭터의 개성을 살렸습니다. Cinema 4D에서 기본 구조와 실루엣을 모델링한 후 FBX로 내보내 Blender에서 머티리얼·텍스처·라이팅·렌더링을 진행했습니다.',
    period: '미기재',
    software: 'Cinema 4D / Blender',
    work: '3D Character Modeling / SD Character Design / Texturing / Rendering',
    extraLabel: 'PRODUCTION WORKFLOW',
    extra: 'Cinema 4D Modeling / FBX Transfer / Blender Materials & Lighting',
    category: '3D Modeling / Character Design / Texturing',
    directions: [
      ['SD Character Modeling', '스파이더맨의 형태를 SD 비율로 단순화하고 정면·후면·측면에서 자연스럽게 보이는 실루엣과 신체 구조를 Cinema 4D에서 제작했습니다.'],
      ['FBX Workflow & Texturing', 'Cinema 4D 모델을 FBX로 내보낸 뒤 Blender로 가져와 재질, 텍스처, 눈과 의상 디테일 및 색상 균형을 조정했습니다.'],
      ['Lighting & Final Rendering', 'Blender에서 라이팅과 최종 렌더링을 구성하여 SD 캐릭터의 귀엽고 간결한 조형과 시각적 완성도를 높였습니다.'],
    ],
    link: 'https://youtu.be/5M65qDoDpR0',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 비상업적 포트폴리오를 위해 제작한 비공식 팬아트입니다. Spider-Man 캐릭터와 관련된 지식재산권은 각 권리자에게 있으며 공식 제작사와 무관합니다.',
  },
  30: {
    kicker: 'VENOM / CINEMATIC TRAILER RE-EDIT',
    headline: ['DARKNESS', 'UNLEASHED.'],
    subtitle: 'Film Trailer · Cinematic Editing · Sound Design · Personal Practice',
    tags: ['Trailer Re-Editing', 'Cinematic Editing', 'Sound Design'],
    conceptTitle: '어둠과 액션의 긴장감을 새로운 예고편으로 재구성하다',
    concept: '영화 《베놈(VENOM)》의 예고편을 참고하여 제작한 개인 모작·재편집 포트폴리오입니다. 원작의 어둡고 긴장감 넘치는 분위기와 강렬한 액션을 바탕으로 인물의 감정 변화, 장면 흐름, 컷 길이와 전환 타이밍을 재구성했습니다. 음악의 리듬과 효과음의 강약을 조절해 시네마틱 예고편의 몰입감을 높이는 편집 방식을 연습했습니다.',
    period: '미기재',
    software: 'Adobe Premiere Pro / Adobe After Effects',
    work: 'Trailer Editing / Cinematic Editing / Cut Editing / Sound Design / Scene Composition / Color Adjustment',
    extraLabel: 'EDITING FOCUS',
    extra: 'Action Pacing / Sound Rhythm / Scene Composition / Color Adjustment',
    category: 'Movie Trailer Copy Practice / Cinematic Video Editing',
    directions: [
      ['Cinematic Storytelling', '인물의 감정 변화와 주요 액션 장면을 새롭게 배치하여 예고편의 전개와 긴장감이 이어지도록 구성했습니다.'],
      ['Action Cuts & Pacing', '액션의 속도감에 맞춰 컷 길이와 전환 타이밍을 조정하고 정적인 순간과 역동적인 순간의 대비를 표현했습니다.'],
      ['Sound Design & Color Adjustment', '음악의 리듬과 효과음의 강약을 컷 편집에 연결하고 색상 조정으로 어두운 시네마틱 분위기를 강조했습니다.'],
    ],
    link: 'https://youtu.be/04q-URLpty4',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습 및 포트폴리오 목적으로 제작한 비공식 영화 예고편 모작·재편집 작품입니다. 원본 영화, 영상 및 음악의 저작권은 각 권리자에게 있으며 공식 제작사와 무관합니다.',
  },
  31: {
    kicker: 'DELIVER US FROM EVIL / TRAILER PLANNING & STORYBOARD',
    headline: ['PLAN THE CHASE', 'FRAME THE STORY.'],
    subtitle: 'Creative Trailer Planning · Storyboard Design · Cinematic Direction',
    tags: ['Trailer Planning', 'Storyboard', 'Visual Direction', '60 Shots'],
    conceptTitle: '추격·복수·구원의 감정선을 90초 예고편으로 설계하다',
    concept: '영화 《다만 악에서 구하소서(Deliver Us from Evil)》를 바탕으로 기획한 1분 30초 분량의 개인 창작 예고편 기획서·스토리보드 프로젝트입니다. 원작 인물과 갈등 구조를 분석하고 추격, 복수, 구원의 키워드로 이야기를 새롭게 재구성했습니다. 관객의 호기심과 긴장감이 단계적으로 높아지도록 시퀀스와 컷 구성, 카메라 구도, 색감, 음악 및 효과음 계획을 설계했습니다.',
    period: '미기재',
    software: '기획서 / 스토리보드 (사용 소프트웨어 미기재)',
    work: 'Trailer Planning / Storyboard Design / Sequence Structure / Camera Composition / Sound Direction',
    extraLabel: 'PLANNING SCOPE',
    extra: '90 Seconds / 12 Storyboard Sections / Approximately 60 Shots',
    category: 'Storyboard / Planning & Design',
    directions: [
      ['Story & Character Analysis', '주요 인물의 서로 다른 목적과 갈등 구조를 분석하고 추격·복수·구원의 감정 대비를 중심으로 새로운 90초 예고편 스토리를 기획했습니다.'],
      ['Cinematic Planning & Visual Direction', '다크 시네마틱 콘셉트를 바탕으로 카메라 구도, 장면 전환, 컷 편집 리듬, 색감, 음악과 효과음의 활용 방향을 구체화했습니다.'],
      ['Storyboard & Shot Breakdown', '12개 스토리보드 구성을 통해 약 60컷을 시각화하고 장면별 흐름과 긴장감이 단계적으로 고조되도록 설계했습니다.'],
    ],
    link: 'https://youtu.be/uXSPWwZ-tt8',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 원작 영화를 참고해 개인 기획·학습 및 비상업적 포트폴리오 목적으로 제작한 비공식 팬메이드 예고편 기획·스토리보드 작업입니다. 원본 영화와 관련 콘텐츠의 권리는 각 권리자에게 있으며 공식 제작사와 무관합니다.',
  },

  32: {
    kicker: 'SUPERMAN VS SUPERGIRL / CG & VFX ANALYSIS',
    headline: ['SAME LEGACY', 'DIFFERENT VFX.'],
    subtitle: 'Visual Effects Breakdown · CG Comparison · Technical Research',
    tags: ['VFX Analysis', 'CG Comparison', 'Technical Breakdown', 'Visual Integration'],
    conceptTitle: '같은 영웅, 다른 시각효과 — 합성 아티스트의 관점으로 비교하다',
    concept: '《같은 영웅, 다른 시각효과》는 《슈퍼맨(Superman, 2025)》과 《슈퍼걸(Supergirl, 2026)》의 CG/VFX 표현 방식을 동일한 기준으로 비교하는 비공식 개인 연구 포트폴리오입니다. 매치무브·컬러·라이팅·합성 경계·알파 채널·모션·시각적 통합성을 관찰하고, 주요 장면별 강점과 개선 가능성을 표와 그래프로 정리하여 기술적 판단 및 커뮤니케이션 역량을 연습했습니다. 자료에 수록된 점수와 평가는 제작사 공식 평가가 아닌 개인의 분석 결과입니다.',
    period: '2026 (개인 연구 포트폴리오)',
    software: '분석 및 시각화 도구 미기재',
    work: 'VFX Breakdown / CG Comparison / Matchmove & Color Analysis / Technical Evaluation / Visual Integration',
    extraLabel: 'ANALYSIS CRITERIA',
    extra: 'Matchmove / Lighting & Color / Edges & Alpha / Motion / Visual Integration / Technical Reporting',
    category: 'VFX Analysis / CG Comparison / Visual Effects Research',
    directions: [
      ['Compositing & Integration', '매치무브 정확도, 컬러·톤 및 조명 일치도, 엣지 품질, 알파 채널 일관성, 실사와 CG의 시각적 통합성을 비교했습니다.'],
      ['Motion, CG Use & Visual Quality', '프레임·모션 오류, 모션 블러, CG 활용 범위, 레퍼런스 대비 품질, 장르·연출 의도, 예술적 완성도를 기준으로 장면별 표현을 살펴봤습니다.'],
      ['Technical Evaluation & Reporting', '기술적 오류 탐지, 평가 방법과 근거, 결과의 신뢰성, 개선 방향 및 커뮤니케이션을 검토하고 표·그래프로 분석 내용을 정리했습니다.'],
    ],
    link: 'https://youtu.be/fagikc37iYU',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 영화 CG/VFX의 표현을 비교하기 위해 제작한 비공식 개인 연구·포트폴리오입니다. 원본 영화·영상·이미지의 권리는 각 권리자에게 있으며 공식 제작사와 무관합니다. 점수와 비교 결과는 개인이 설정한 분석 기준에 따른 주관적 평가이며 제작사 공식 기술 평가가 아닙니다.',
  },
  33: {
    kicker: '3D PHYSICS SIMULATION / CINEMA 4D',
    headline: ['GRAVITY', 'IN MOTION.'],
    subtitle: '3D Motion Graphics · Physics Simulation · Dynamics Animation',
    tags: ['Cinema 4D', 'Physics Simulation', '3D Motion Graphics'],
    conceptTitle: '중력과 충돌이 만들어내는 3D 움직임을 시각화하다',
    concept: '《3D Physics Simulation》은 Cinema 4D로 제작한 개인 3D 물리 시뮬레이션 및 모션그래픽 포트폴리오입니다. 다양한 3D 오브젝트가 중력에 따라 낙하하고 서로 충돌하며 바닥에 쌓이는 움직임을 표현했습니다. 검은 공간과 붉은색·푸른색 계열의 오브젝트, 재질과 라이팅을 활용해 형태와 질감을 강조하고, 카메라 구도를 통해 물리적인 상호작용이 자연스럽게 전달되도록 구성했습니다.',
    period: '2026 (개인 연습 작품)',
    software: 'Cinema 4D',
    work: '3D Motion Graphics / Physics Simulation / Dynamics Animation / Object Animation',
    extraLabel: 'SIMULATION FOCUS',
    extra: 'Gravity / Collision / Material & Lighting / Camera Composition',
    category: '3D Motion Graphics / Physics Simulation / 3D Animation',
    directions: [
      ['Gravity & Object Dynamics', '다양한 형태의 3D 오브젝트가 중력에 의해 떨어지고 움직이는 과정을 Cinema 4D 물리 시뮬레이션으로 구성했습니다.'],
      ['Collision & Accumulation', '오브젝트들이 서로 충돌하고 바닥에 쌓이는 물리적 상호작용과 애니메이션의 자연스러운 흐름을 연습했습니다.'],
      ['Material, Lighting & Camera', '어두운 공간에 붉은색과 푸른색 계열의 재질·라이팅을 적용하고, 낙하와 충돌이 잘 보이도록 카메라 구도를 조정했습니다.'],
    ],
    link: 'https://youtu.be/eGmacerJh_o',
    linkType: 'WATCH THE PROJECT',
  },
  34: {
    kicker: 'LUMIC SHOWREEL 2026 / CREATIVE PORTFOLIO',
    headline: ['EVERY FRAME', 'TELLS A STORY.'],
    subtitle: 'VFX Compositing · 3D Animation · Motion Graphics · Film Editing',
    tags: ['VFX Showreel', '3D Animation', 'Motion Graphics', 'Film Editing'],
    conceptTitle: '작은 움직임에도 이야기를, 하나의 장면에도 감정을 담다',
    concept: '《LUMIC SHOWREEL 2026》은 VFX 합성, Cinema 4D·Blender 기반 3D 모델링과 애니메이션, After Effects 모션그래픽, 영화 예고편 모작·재편집 및 영상 기획·스토리보드를 한 편으로 재구성한 종합 영상 포트폴리오입니다. 판소리를 전공하며 익힌 이야기의 흐름, 감정 변화, 리듬과 호흡에 대한 감각을 영상 제작으로 확장했습니다. 작업별 특성이 드러나도록 주요 장면을 선별하고, 컷의 길이와 전환 타이밍 및 음악과 화면의 리듬을 고려해 쇼릴을 구성했습니다.',
    period: '2026 · Personal Portfolio Showreel',
    software: 'After Effects / Premiere Pro / Photoshop / Illustrator / Cinema 4D / Blender',
    work: 'VFX Compositing / 3D Modeling & Animation / Motion Graphics / Film Editing / Storyboard Design',
    extraLabel: 'SHOWREEL DISCIPLINES',
    extra: 'CGI / Texturing & Rendering / Physics Simulation / Typography / Sound Design / Visual Planning',
    category: 'VFX Showreel / Motion Graphics Showreel / 3D Portfolio / Creative Portfolio',
    directions: [
      ['VFX Compositing & CG', '실사 장면과 CG 오브젝트를 결합하며 카메라 구도·크기·움직임·공간감의 조화를 고려한 VFX 합성 연습을 소개했습니다.'],
      ['3D Modeling, Animation & Dynamics', 'Cinema 4D와 Blender를 활용한 캐릭터 모델링·텍스처링·라이팅·렌더링, MoGraph·Cloner·물리 시뮬레이션 및 카메라 애니메이션 작업을 담았습니다.'],
      ['Motion Graphics & Character Animation', 'After Effects로 제작한 로고·타이포그래피·2D 캐릭터·광고형 모션그래픽과 키프레임·색채·전환 연출을 소개했습니다.'],
      ['Film Trailer, Editing & Sound', '영화 예고편 모작·재편집 및 개인 창작 예고편에서 컷 편집의 속도, 스토리텔링, 사운드 디자인과 시네마틱한 흐름을 보여줍니다.'],
      ['Storyboard, Visual Planning & VFX Analysis', '기획서와 스토리보드를 통해 컷·카메라·색감·사운드를 설계하고, CG/VFX 비교 분석으로 매치무브·컬러·엣지·시각적 통합성 등을 평가하는 연습을 담았습니다.'],
    ],
    link: 'https://youtu.be/Ri9FkoxiPdA',
    linkType: 'WATCH THE PROJECT',
    disclaimer: '* 개인 학습·창작 및 취업 포트폴리오 목적의 종합 영상입니다. 일부 콘텐츠는 기존 영화·브랜드·캐릭터를 참고한 비공식 모작·재편집 또는 팬아트를 포함하며 원본 콘텐츠의 저작권과 지식재산권은 각 권리자에게 있습니다. 공식 제작사·브랜드와 무관합니다.',
  },
  35: {
    kicker: 'LUMIC / CREATIVE PORTFOLIO WEBSITE 2026',
    headline: ['BEYOND', 'IMAGINATION.'],
    subtitle: 'Creative Portfolio Website · Cinematic Web Experience · Promo Film',
    tags: ['Visual Storytelling', 'Portfolio Website', 'Cinematic Motion'],
    conceptTitle: '상상에서 시작된 아이디어를 하나의 시각적 경험으로 연결하다',
    concept: '《LUMIC Creative Portfolio Website 2026》은 VFX 합성, 3D 애니메이션, 모션그래픽과 영상 편집 작업을 하나의 디지털 공간에서 소개하기 위해 제작한 개인 포트폴리오 웹사이트 프로모션 영상입니다. 우주와 행성을 모티브로 블랙 계열의 배경과 빛, 그래픽 요소, 타이포그래피를 결합한 다크 시네마틱 디자인으로 LUMIC의 시각적 정체성을 표현했습니다. 웹사이트의 메인 화면부터 프로젝트 카테고리, 포트폴리오 갤러리, About Me, 기술 소개 및 제작 프로세스까지 하나의 이야기처럼 연결되도록 화면 흐름과 음악의 리듬을 고려해 구성했습니다.',
    period: '2026 · Personal Portfolio Website Promotion',
    software: '웹사이트·프로모션 영상 제작 (세부 사용 소프트웨어 미기재)',
    work: 'Website Promotion / Visual Storytelling / Cinematic Editing / Typography / UI Showcase',
    extraLabel: 'VISUAL IDENTITY',
    extra: 'Space & Planet Motif / Dark Cinematic UI / Motion & Rhythm',
    category: 'Web and App Design / Creative Portfolio / Website Promotion',
    directions: [
      ['Cosmic Visual Identity', '우주와 행성을 모티브로 검은 배경, 빛과 그래픽 요소, 타이포그래피를 조합해 LUMIC만의 다크 시네마틱 콘셉트를 구현했습니다.'],
      ['Website & Project Showcase', '메인 화면, 프로젝트 카테고리, 포트폴리오 갤러리, About Me, 기술 소개와 제작 프로세스를 일관된 화면 흐름으로 보여줍니다.'],
      ['Cinematic Editing & Music Rhythm', '작업물이 단순히 나열되지 않도록 장면 전환과 그래픽 움직임, 음악의 리듬과 컷 타이밍을 조절하여 하나의 시각적 이야기로 재구성했습니다.'],
    ],
    link: 'https://youtu.be/RUzUE4aGtw0',
    linkType: 'WATCH THE PROJECT',
  },
};


// Portfolio detail design system: the same structure as the GUCCI project.
// Update each project's text in PREMIUM_PROJECTS rather than duplicating JSX.
const PremiumProjectDetail = ({ project }) => {
  const isVideo = project.linkType === 'WATCH THE PROJECT';
  return (
    <article className="project-detail project-detail--luxury" aria-label={`${project.headline.join(' ')} 프로젝트 상세`}>
      <div className="luxury-version">✦ LUMIC · PREMIUM PROJECT DETAIL</div>
      <div className="luxury-hero">
        <div className="luxury-kicker">
          <span className="luxury-kicker__dot" aria-hidden="true" />
          {project.kicker}
          <span className="luxury-kicker__line" aria-hidden="true" />
        </div>
        <h2 className="luxury-hero__headline">
          {project.headline[0]}<span className="luxury-title-break" />
          <em>{project.headline[1]}</em>
        </h2>
        <p className="luxury-hero__subtitle">{project.subtitle}</p>
        <div className="luxury-hero__tags" aria-label="프로젝트 키워드">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>

      <section className="luxury-intro" aria-label="프로젝트 소개">
        <div className="luxury-intro__symbol" aria-hidden="true">✦</div>
        <div className="luxury-intro__body">
          <span className="luxury-intro__label">01 / THE CONCEPT</span>
          <h3>{project.conceptTitle}</h3>
          <p>{project.concept}</p>
        </div>
      </section>

      <section className="luxury-section" aria-label="프로젝트 정보">
        <header className="luxury-section__heading">
          <span>02</span><h3>PROJECT INFO</h3><i aria-hidden="true" />
        </header>
        <div className="luxury-facts">
          {[
            ['◷', 'PRODUCTION PERIOD', project.period],
            ['✳', 'SOFTWARE', project.software],
            ['▣', 'MY WORK', project.work],
            ['◈', project.extraLabel, project.extra],
            ['◇', 'CATEGORY', project.category],
            ['◎', 'CREATED BY', 'LUMIC / COCO'],
          ].map(([icon, label, value]) => (
            <div className="luxury-fact" key={label}>
              <span className="luxury-fact__icon" aria-hidden="true">{icon}</span>
              <div className="luxury-fact__body">
                <span className="luxury-fact__label">{label}</span>
                <strong>{value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="luxury-section" aria-label="제작 및 디자인 방향">
        <header className="luxury-section__heading">
          <span>03</span><h3>CREATIVE DIRECTION</h3><i aria-hidden="true" />
        </header>
        <div className="luxury-story">
          {project.directions.map(([heading, description], index) => (
            <div className="luxury-story__item" key={heading}>
              <span className="luxury-story__number">{String(index + 1).padStart(2, '0')}</span>
              <div><h4>{heading}</h4><p>{description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <a className="luxury-watch" href={project.link} target="_blank" rel="noopener noreferrer">
        <span className="luxury-watch__play" aria-hidden="true">{isVideo ? '▶' : '↗'}</span>
        <span className="luxury-watch__copy">
          <small>{project.linkType}</small>
          <strong>{isVideo ? '영상 작업물 보러가기' : '프로젝트 코드 보러가기'}</strong>
        </span>
        <span className="luxury-watch__arrow" aria-hidden="true">↗</span>
      </a>
      {project.disclaimer && <p className="luxury-disclaimer">{project.disclaimer}</p>}
    </article>
  );
};

// Portfolio: uploadOrder 값이 클수록 최신 작업물로 위쪽에 표시됩니다.
// uploadOrder가 없는 기존 프로젝트는 id를 등록 순서로 사용합니다.
// Portfolio
export const portfolio = [
  {
    id: 2,
    img: projectImg6,
    title: '모션그래픽 구찌 꿀벌 광고',
    description: `럭셔리 브랜드 구찌의 꿀벌 모티프를 활용한 모션그래픽 광고 영상입니다.
구찌의 시그니처 패턴과 꿀벌 이미지를 조화롭게 사용하여 브랜드의 아이덴티티를 강조하고, 세련된 영상미를 통해 시청자의 몰입도를 높였습니다.
`,

    
fullDescription: (
      <article className="project-detail project-detail--luxury" aria-label="구찌 꿀벌 광고 프로젝트 상세" style={{display:'block', width:'100%', boxSizing:'border-box', color:'#eae5e9', textAlign:'left', fontSize:'14px', lineHeight:1.75, whiteSpace:'normal', wordBreak:'keep-all',minWidth:0,maxWidth:'100%',writingMode:'horizontal-tb'}}>
        <div className="luxury-version" style={{display:'inline-flex', alignItems:'center', gap:8, border:'1px solid rgba(232,188,135,.35)', background:'rgba(232,188,135,.08)', color:'#efce9f', borderRadius:40, padding:'5px 12px', fontSize:10, fontWeight:800, letterSpacing:1.3, marginBottom:12}}>✦ LUMIC · PREMIUM PROJECT DETAIL</div>
        <div className="luxury-hero" style={{border:'1px solid rgba(233,69,91,.22)', borderRadius:18, background:'linear-gradient(120deg,#34202b 0%,#1b1a24 60%,#15141d 100%)', padding:'clamp(22px, 5%, 36px)', marginBottom:20, boxShadow:'0 15px 30px rgba(0,0,0,.18)', overflow:'hidden'}}>
          <div className="luxury-kicker"><span className="luxury-kicker__dot" /> GUCCI / MOTION DESIGN <span className="luxury-kicker__line" /></div>
          <p className="luxury-hero__headline" style={{fontFamily:'Georgia, serif', fontSize:'clamp(30px, 5vw, 54px)', letterSpacing:-1.5, lineHeight:1.05, fontWeight:800, margin:'15px 0', color:'#fff'}}>BEE ICON<br /><em>IN MOTION.</em></p>
          <p className="luxury-hero__subtitle">Luxury Brand Advertisement · Personal Copy Practice</p>
          <div className="luxury-hero__tags" aria-label="프로젝트 키워드">
            <span>Motion Graphics</span><span>Brand Film</span><span>Copy Practice</span>
          </div>
        </div>

        <section className="luxury-intro" aria-label="프로젝트 소개" style={{display:'flex', alignItems:'center', gap:18, padding:22, borderRadius:16, background:'linear-gradient(135deg,rgba(110,39,54,.4),rgba(33,31,41,.97))', border:'1px solid rgba(233,69,91,.3)', marginBottom:28}}>
          <div className="luxury-intro__symbol" aria-hidden="true" style={{flex:'0 0 54px', height:54, display:'grid', placeItems:'center', borderRadius:'50%', border:'1px solid rgba(220,178,122,.42)', color:'#e9c28c', fontSize:28}}>✦</div>
          <div className="luxury-intro__body">
            <span className="luxury-intro__label">01 / THE CONCEPT</span>
            <h3>브랜드의 상징을 움직임으로 표현하다</h3>
            <p>럭셔리 패션 브랜드 GUCCI(구찌)의 <strong>꿀벌 모티프</strong>와 시그니처 패턴을 활용한 개인 모작 광고입니다. 절제된 화면 구성과 감각적인 움직임으로 고급스러운 브랜드 분위기를 표현했습니다.</p>
          </div>
        </section>

        <section className="luxury-section" aria-labelledby="gucci-info-heading">
          <header className="luxury-section__heading"><span>02</span><h3 id="gucci-info-heading">PROJECT INFO</h3><i /></header>
          <div className="luxury-facts" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',gap:12, marginBottom:6}}>
            <div className="luxury-fact" style={{display:'flex',alignItems:'flex-start',gap:12,minWidth:0,padding:17,borderRadius:14,border:'1px solid rgba(255,255,255,.10)',background:'linear-gradient(155deg,#292630,#1b1a23)',boxShadow:'0 3px 12px rgba(0,0,0,.1)'}}><span className="luxury-fact__icon" aria-hidden="true">◷</span><div><span className="luxury-fact__label">PRODUCTION PERIOD</span><strong>2021.08.20 — 08.31</strong></div></div>
            <div className="luxury-fact" style={{display:'flex',alignItems:'flex-start',gap:12,minWidth:0,padding:17,borderRadius:14,border:'1px solid rgba(255,255,255,.10)',background:'linear-gradient(155deg,#292630,#1b1a23)',boxShadow:'0 3px 12px rgba(0,0,0,.1)'}}><span className="luxury-fact__icon" aria-hidden="true">✳</span><div><span className="luxury-fact__label">SOFTWARE</span><strong>After Effects<br />Premiere Pro</strong></div></div>
            <div className="luxury-fact" style={{display:'flex',alignItems:'flex-start',gap:12,minWidth:0,padding:17,borderRadius:14,border:'1px solid rgba(255,255,255,.10)',background:'linear-gradient(155deg,#292630,#1b1a23)',boxShadow:'0 3px 12px rgba(0,0,0,.1)'}}><span className="luxury-fact__icon" aria-hidden="true">▣</span><div><span className="luxury-fact__label">MY WORK</span><strong>Motion Graphics<br />Object Animation<br />Advertisement Design</strong></div></div>
            <div className="luxury-fact" style={{display:'flex',alignItems:'flex-start',gap:12,minWidth:0,padding:17,borderRadius:14,border:'1px solid rgba(255,255,255,.10)',background:'linear-gradient(155deg,#292630,#1b1a23)',boxShadow:'0 3px 12px rgba(0,0,0,.1)'}}><span className="luxury-fact__icon" aria-hidden="true">♫</span><div><span className="luxury-fact__label">SOUNDTRACK</span><strong>The Greatest Show</strong><small>The Greatest Showman OST</small></div></div>
            <div className="luxury-fact" style={{display:'flex',alignItems:'flex-start',gap:12,minWidth:0,padding:17,borderRadius:14,border:'1px solid rgba(255,255,255,.10)',background:'linear-gradient(155deg,#292630,#1b1a23)',boxShadow:'0 3px 12px rgba(0,0,0,.1)'}}><span className="luxury-fact__icon" aria-hidden="true">◇</span><div><span className="luxury-fact__label">CATEGORY</span><strong>Luxury Brand Advertising<br />Motion Graphic Copy</strong></div></div>
            <div className="luxury-fact" style={{display:'flex',alignItems:'flex-start',gap:12,minWidth:0,padding:17,borderRadius:14,border:'1px solid rgba(255,255,255,.10)',background:'linear-gradient(155deg,#292630,#1b1a23)',boxShadow:'0 3px 12px rgba(0,0,0,.1)'}}><span className="luxury-fact__icon" aria-hidden="true">◎</span><div><span className="luxury-fact__label">CREATED BY</span><strong>LUMIC / COCO</strong></div></div>
          </div>
        </section>

        <section className="luxury-section" aria-labelledby="gucci-overview-heading">
          <header className="luxury-section__heading"><span>03</span><h3 id="gucci-overview-heading">CREATIVE DIRECTION</h3><i /></header>
          <div className="luxury-story" style={{padding:'2px 20px', border:'1px solid rgba(255,255,255,.09)', borderRadius:16, background:'rgba(255,255,255,.025)',marginBottom:24}}>
            <div className="luxury-story__item"><span className="luxury-story__number">01</span><div><h4>Visual Identity</h4><p>구찌의 꿀벌 이미지와 시그니처 패턴을 조화롭게 배치해 브랜드가 가진 고급스럽고 세련된 인상을 시각화했습니다.</p></div></div>
            <div className="luxury-story__item"><span className="luxury-story__number">02</span><div><h4>Motion &amp; Camera</h4><p>오브젝트 애니메이션, 카메라 움직임, 화면 전환을 연결해 역동적이면서도 자연스러운 흐름을 구성했습니다.</p></div></div>
            <div className="luxury-story__item"><span className="luxury-story__number">03</span><div><h4>Rhythm &amp; Editing</h4><p>음악의 비트와 장면 전환의 타이밍을 맞춰 영상 전체에 리듬감과 몰입도를 더했습니다.</p></div></div>
          </div>
        </section>

        <a className="luxury-watch" style={{display:'flex',alignItems:'center',gap:16,padding:'18px 20px',borderRadius:14,border:'1px solid rgba(233,69,91,.65)',background:'linear-gradient(110deg,rgba(129,30,51,.45),rgba(42,25,35,.7))',textDecoration:'none',color:'#fff'}} href="https://www.youtube.com/watch?v=jrRqNdDuej4" target="_blank" rel="noopener noreferrer" aria-label="구찌 광고 영상 작업물 유튜브에서 보기">
          <span className="luxury-watch__play" aria-hidden="true">▶</span>
          <span className="luxury-watch__copy"><small>WATCH THE PROJECT</small><strong>영상 작업물 보러가기</strong></span>
          <span className="luxury-watch__arrow" aria-hidden="true">↗</span>
        </a>
        <p className="luxury-disclaimer">* 본 작업은 학습을 위한 개인 모작이며 GUCCI의 공식 광고가 아닙니다.</p>
      </article>
    ),

    period: '2021.08.20 ~ 2021.08.31',
    stack: 'After Effects, Premiere Pro',
    skills: [skillsImg5, skillsImg11],
    features: [],
    link: 'https://www.youtube.com/watch?v=jrRqNdDuej4',
    category: 'Motion Graphics',
    media: {
      videos: [projectImg8].filter(Boolean),
      images: [],
     
    },
  },

{
  id: 3,
  img: projectImg5,
  title: '서편제 원망',

  description: '전통 판소리의 정서를 시각 기술로 재해석한 감성 모션그래픽 프로젝트.',

  fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[3]} />,

    period: '2021.08.01 ~ 2021.08.20',
  stack: 'After Effects, Premiere Pro',
  skills: [skillsImg5, skillsImg11],

  features: [
    '감정 분석을 활용한 음향 시각화',
    '판소리 음성 데이터를 활용한 모션 구현',
    '색채 이론에 기반한 감정 전이 시각 효과 연출',
  ],

  link: 'https://www.youtube.com/watch?v=ZH9wK5BsBj4',
  category: 'Motion Graphics',

  media: {
    videos: [projectImg9].filter(Boolean),
    images: [],
  },
},


{
  id: 4,
  img: projectImg7,
  title: '스마트 팩토리 AI 제조 공정 및 품질 검사 시스템 (컷편집)',

  description:
    'AI 기반 제조 공정과 품질 검사 시스템의 핵심 기술 및 주요 기능을 효과적으로 전달하는 컷편집 영상 프로젝트.',

  fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[4]} />,

    period: '2024.06.27 ~ 2024.08.20',

  stack:
    'ROS, Python, Django, MySQL, AWS S3, HTML/CSS, JavaScript',

  skills: [
    skillsImg1,
    skillsImg2,
    skillsImg3,
    skillsImg4,
    skillsImg7,
  ],

  features: [
    'ROS 기반 물류 로봇 제어 (QR 인식, 라인트레이싱, 장애물 탐지) 시연 영상',
    'Django REST API 서버 및 AWS S3 연동을 통한 데이터 흐름 시각화',
    '품질 검사용 머신러닝 모델의 학습 및 분류 결과 하이라이트',
    '관제 시스템의 DB 설계 및 양방향 통신 구현 시연',
    'REST API 기반 데이터 시각화 및 품질 지표 표시 화면 요약',
  ],

  link: 'https://www.youtube.com/watch?v=tacMyginHlI',

  category: 'Cut Edit',

  media: {
    videos: [projectImg10].filter(Boolean),
    images: [],
  },
},


  {
    id: 5,
    img: projectImg1,
    title: '스마트 팩토리 AI 제조 공정 및 품질 검사 시스템',
    description: 'AI 기반 공정 제어 및 품질 검사를 수행하는 스마트 팩토리 시스템 개발 프로젝트.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[5]} />,

    period: '2024.06.27 ~ 2024.08.20',
    stack: 'ROS, Python, Django, MySQL, AWS S3, HTML/CSS, JavaScript',
    skills: [skillsImg1, skillsImg2, skillsImg3, skillsImg4, skillsImg7],
    features: [
      'ROS 기반 물류 로봇 제어 (QR 인식, 라인트레이싱, 장애물 탐지)',
      'Django REST API 서버 및 AWS S3 연동',
      '품질 검사용 머신러닝 모델 학습 및 분류',
      '관제 시스템을 위한 DB 설계 및 양방향 통신',
      'REST API 기반 데이터 시각화 및 품질 지표 표시',
    ],
    link: 'https://github.com/BrightLuminate/myproject.git',
    category: 'Web and App Design',
    media: {
      videos: [].filter(Boolean),
      images: [image1, image2, image3, image4],
      
    },
  },

  {
    id: 6,
    img: image14,
    title: '류재원 교수님 개인 웹사이트 구축',
    description: 'React 기반 개인 웹사이트 구축 프로젝트입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[6]} />,

    period: '2024.11.20 ~ 2024.12.20',
    stack: 'React CSS, JavaScript',
    skills: [skillsImg4, skillsImg2, skillsImg3],
    features: [
      '반응형 웹 디자인: 다양한 기기에서 최적화된 사용자 경험 제공',
      '공연 정보 관리: 다가오는 공연 및 지난 공연 정보를 효율적으로 등록 및 관리',
      '카테고리 필터링: 국악 전통, 국악 판타지 등 공연 장르별 필터링 기능 구현',
      '직관적인 UX/UI: 사용자 친화적인 인터페이스 디자인',
      '갤러리/미디어 섹션: 공연 사진 및 영상 등을 효과적으로 전시할 수 있는 구조',
    ],
    link: 'https://github.com/BrightLuminate/jawnproject.git',
    category: 'Web and App Design',
    media: {
      videos: [projectImg11],
      images: [image14, image15,  image16, image17 ],

    },
  },

  {
    id: 7,
    img: projectImg2,
    title: 'Framer Motion 기반 포트폴리오 웹사이트',
    description: 'React와 Framer Motion으로 구현한 사용자 친화적 포트폴리오 웹사이트 프로젝트입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[7]} />,

    period: '2024.05.25 ~ 2024.06.01',
    stack: 'React, Framer Motion, HTML, CSS, JavaScript',
    skills: [skillsImg4, skillsImg1, skillsImg2, skillsImg3],
    features: [
      'PageTransition 및 StairTransition 컴포넌트로 페이지 전환 효과 구현',
      '모바일 최적화를 위한 MobileNav 컴포넌트 개발',
      'Stats 컴포넌트를 활용한 통계 시각화',
      '반응형 웹 디자인 적용',
      '테스트 및 배포 환경 구축',
    ],
    link: 'https://github.com/BrightLuminate/portfolio',
    category: 'Web and App Design',
    media: {
      videos: [projectImg12].filter(Boolean),
      images: [image5, image6, image7, image8],
      
    },
  },

  {
    id: 8,
    img: projectImg3,
    title: 'Flask 기반 강아지 메신저 웹사이트',
    description: 'Flask로 로그인, 회원관리, 채팅 기능이 구현된 반려견 메신저 웹 애플리케이션입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[8]} />,

    period: '2024.06.13 ~ 2024.06.20',
    stack: 'Flask, HTML, CSS, JavaScript',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    features: [
      '로그인, 회원가입, 비밀번호 찾기 기능 구현',
      '친구 목록 및 채팅창 UI 설계',
      'Flask 백엔드 및 프론트엔드 연동',
      'UI/UX 최적화 및 반응형 웹 디자인',
      '전체 테스트 및 버그 수정 완료',
    ],
    link: 'https://github.com/BrightLuminate/Messaging.git',
    category: 'Web and App Design',
    media: {
      videos: [],
      images: [image9, image10, image11, image12, image13],

    },
  },

  {
    id: 9,
    img: projectImg4,
    title: 'Flask 기반 영상 포트폴리오 웹사이트',
    description: '작품 소개를 위한 웹 기반 영상 포트폴리오 사이트를 Flask로 구현한 프로젝트입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[9]} />,

    period: '2024.04.26 ~ 2024.05.11',
    stack: 'Flask, HTML, CSS, JavaScript',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    features: [
      '영상 및 이미지 기반 콘텐츠 시각화',
      'UI/UX 디자인 및 페이지 구성 기획',
      'Flask 백엔드 개발 및 로그인/로그아웃 기능 구현',
      'HTML/CSS/JS 기반 프론트엔드 구축',
      '웹사이트 테스트 및 버그 수정',
    ],
    link: 'https://github.com/BrightLuminate/project.git',
    category: 'Web and App Design',
    media: {
      videos: [],
      images: [image18, image19, image20, image21],

    },
  },
  
  {
  id: 10,
    img: Story1,
    title: '덱스터 스튜디오 모바일 웹사이트 스토리보드 프로젝트',
    description: '실무 프로세스 기반의 모바일 웹 UI/UX 스토리보드 기획 및 디자인',
    
    // 스크린샷 2026-06-07 오후 8.02.45.png 처럼 완벽하게 나열되도록 데이터 단에서 HTML구조로 설계합니다.
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[10]} />,

    period: '2026.06.01 ~ 2026.06.05',
    stack: 'Canva, Illustrator',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    features: [
      '브랜드 정체성을 강화하는 시네마틱 다크 UI 및 히어로 영역',
      '개발 협업을 고려한 내비게이션 구조 및 다국어(EN/KR/CN) 확장성 설계',
      '탐색 피로도를 줄이는 카드 그리드 및 인터랙티브 슬라이드 UI',
      '방사형 구조도와 타임라인을 결합한 인포그래픽 기반 기업 연혁',
      '콘텐츠 중심의 모바일 최적화 작품 포스터 및 디테일 페이지',
      '스크롤 흐름에 따른 연속적 콘텐츠 탐색 및 동비주얼 미디어 섹션',
      '텍스트를 명확하게 구조화한 채용 절차 및 복리후생 아이콘 카드'
    ],
    link: 'https://youtu.be/nk8BP-Y-HzY',
    category: 'Storyboard / Planning & Design',
    media: {
      videos: [projectImg13].filter(Boolean),
      images: [Story1, Story2, Story3, Story4, Story5, Story6, Story7, Story8],
    },
  },

 {
    id: 11,
    img: Story1,
   title: '덱스터 스튜디오 시네마틱 다크 UI 컬러 가이드 시스템',
    description: '실무 프로세스 기반의 모바일 웹 UI/UX 스토리보드 기획 및 디자인',
    
    // 11.jpg, 12.jpg의 레이아웃 흐름에 맞춰 첫 번째, 두 번째 페이지의 컬러 체계를 명확히 구분했습니다.
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[11]} />,

    period: '2026.06.01 ~ 2026.06.05',
    stack: 'Canva, Illustrator',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    features: [
      '브랜드 정체성을 강화하는 시네마틱 다크 UI 및 히어로 영역',
      '개발 협업을 고려한 내비게이션 구조 및 다국어(EN/KR/CN) 확장성 설계',
      '탐색 피로도를 줄이는 카드 그리드 및 인터랙티브 슬라이드 UI',
      '방사형 구조도와 타임라인을 결합한 인포그래픽 기반 기업 연혁',
      '콘텐츠 중심의 모바일 최적화 작품 포스터 및 디테일 페이지',
      '스크롤 흐름에 따른 연속적 콘텐츠 탐색 및 동비주얼 미디어 섹션',
      '텍스트를 명확하게 구조화한 채용 절차 및 복리후생 아이콘 카드'
    ],
    link: 'https://youtu.be/nk8BP-Y-HzY',
    category: 'Storyboard / Planning & Design',
    media: {
      videos: [projectImg14].filter(Boolean),
      images: [Story9, Story10, Story11, Story12, Story13, Story14, Story15, Story16, Story17],
    },
  },


  {
    id: 12,
    // 유튜브 썸네일은 임시 이미지입니다. 직접 만든 썸네일로 교체해도 됩니다.
    img: 'https://img.youtube.com/vi/nH_dwY5dGGc/hqdefault.jpg',
    title: '극한직업 (Extreme Job) | 영화 예고편 모작',
    description: '영화 《극한직업》의 코미디와 액션을 재구성한 팬메이드 예고편 모작 및 재편집 포트폴리오.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[12]} />,
    period: '',
    stack: 'Adobe Premiere Pro',
    skills: [skillsImg5],
    features: [
      '영화 주요 장면 재구성을 통한 트레일러 스토리텔링',
      '대사와 리액션의 연결을 활용한 코미디 컷 편집',
      '액션 장면의 긴장감을 강조한 편집 타이밍',
      '장면 전환과 전개 속도를 고려한 리듬 구성',
    ],
    link: 'https://youtu.be/nH_dwY5dGGc',
    category: 'Cut Edit',
    media: {
      // 나중에 직접 만든 영상 파일을 추가하려면 아래 주석을 참고하세요.
      // 1) 위쪽 import 영역에: import extremeJobVideo from './assets/ExtremeJob.mp4';
      // 2) 아래 videos를: videos: [extremeJobVideo].filter(Boolean), 로 변경하세요.
      videos: [projectImg15].filter(Boolean),
      images: [],
    },
  },

  // 최신 작업물: 직접 제작한 MP4 파일과 썸네일은 나중에 연결하세요.
  // 같은 영상의 유튜브 링크는 상세 카드의 WATCH THE PROJECT 버튼에서 열립니다.
  {
    id: 13,
    img: 'https://img.youtube.com/vi/Y9hWX69J79s/hqdefault.jpg',
    title: '다만 악에서 구하소서 | 개인 창작 예고편',
    description: 'DARK / CHASE / REVENGE / RESCUE / DUEL을 중심으로 추격과 복수의 감정을 재구성한 액션 시네마틱 예고편 개인 창작·재편집 작품.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[13]} />,
    period: '',
    stack: 'Adobe Premiere Pro',
    skills: [skillsImg5],
    features: [
      '다섯 가지 핵심 키워드를 기반으로 한 기획 및 스토리보드 구성',
      '추격·대립·복수 장면을 활용한 시네마틱 컷 편집',
      '액션과 감정의 전개 속도를 고려한 장면 연결',
      '배경음악과 효과음을 활용한 사운드 디자인',
    ],
    link: 'https://youtu.be/Y9hWX69J79s',
    category: 'Cut Edit',
    media: {
      // 파일 준비 후 상단 import에 아래와 같이 추가:
      // import deliverUsVideo from './assets/DeliverUsFromEvil.mp4';
      // 그리고 videos: [deliverUsVideo].filter(Boolean) 로 바꾸세요.
      videos: [projectImg34].filter(Boolean),
      images: [],
    },
  },
  {
    id: 14,
    img: 'https://img.youtube.com/vi/2SvEC6L1ljQ/hqdefault.jpg',
    title: '새콤달콤 (Sweet & Sour) | 로맨스 영화 예고편 모작',
    description: '설렘과 현실적인 연애의 감정선을 중심으로 주요 장면을 재구성한 로맨스 영화 팬메이드 예고편 모작·재편집 작품.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[14]} />,
    period: '',
    stack: 'Adobe Premiere Pro',
    skills: [skillsImg5],
    features: [
      '설렘에서 갈등까지 감정선 중심의 트레일러 스토리텔링',
      '인물 대사·표정·관계 변화를 활용한 장면 구성',
      '컷 타이밍과 감정의 연속성을 고려한 재편집',
      '로맨스 분위기에 맞춘 영상 리듬과 전개 속도 조절',
    ],
    link: 'https://youtu.be/2SvEC6L1ljQ',
    category: 'Cut Edit',
    media: {
      // 파일 준비 후 상단 import에 아래와 같이 추가:
      // import sweetSourVideo from './assets/SweetAndSour.mp4';
      // 그리고 videos: [sweetSourVideo].filter(Boolean) 로 바꾸세요.
      videos: [projectImg17].filter(Boolean),
      images: [],
    },
  },

  // Spider-Man 연습 작품: MP4를 준비하면 각 프로젝트 media.videos 배열에 연결하세요.
  {
    id: 15,
    img: 'https://img.youtube.com/vi/HKN0Vz5RWIc/hqdefault.jpg',
    title: 'Spider-Man 3D Animation | Cinema 4D Practice',
    description: 'Spider-Man 테마로 캐릭터 애니메이션과 카메라 워크, 웹 연출을 구성한 Cinema 4D 개인 3D 연습 작품.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[15]} />,
    period: '',
    stack: 'Cinema 4D',
    skills: [skillsImg20],
    features: [
      'Spider-Man 테마의 3D 공간과 캐릭터 구성',
      '캐릭터 애니메이션 및 웹 연출',
      '시네마틱 카메라 애니메이션',
      '장면 구성과 렌더링 작업',
    ],
    link: 'https://youtu.be/HKN0Vz5RWIc',
    category: '3D Modeling / Animation',
    media: {
      // import spiderAnimationVideo from './assets/SpiderAnimation.mp4';
      // 파일 준비 후 videos: [spiderAnimationVideo].filter(Boolean) 로 변경
      videos: [projectImg18].filter(Boolean),
      images: [],
    },
  },
  {
    id: 16,
    img: 'https://img.youtube.com/vi/4x4bphl4EHc/hqdefault.jpg',
    title: 'Spider-Man VFX | Helicopter CG Compositing | Cinema 4D',
    description: '도심 실사 장면에 헬리콥터와 캐릭터 CG를 배치하며 카메라와 공간감을 연습한 개인 VFX 작업.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[16]} />,
    period: '',
    stack: 'Cinema 4D',
    skills: [skillsImg20],
    features: [
      '도심 실사 배경 기반 CG 장면 구성',
      '헬리콥터 및 캐릭터 CG 요소 배치',
      '카메라 구도와 오브젝트 크기·동작 조정',
      '실사와 3D 요소의 조화 및 CG 합성 연습',
    ],
    link: 'https://youtu.be/4x4bphl4EHc',
    category: '3D Modeling / Animation',
    media: {
      // import spiderHelicopterVideo from './assets/SpiderHelicopter.mp4';
      // 파일 준비 후 videos: [spiderHelicopterVideo].filter(Boolean) 로 변경
      videos: [projectImg19].filter(Boolean),
      images: [],
    },
  },
  {
    id: 17,
    img: 'https://img.youtube.com/vi/MdPBxeVrVSU/hqdefault.jpg',
    title: 'Spider-Man 3D Animation | Prison Scene | Cinema 4D',
    description: '어두운 감옥 환경을 배경으로 씬 디자인, 캐릭터 애니메이션, 라이팅과 카메라 연출을 연습한 3D 작품.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[17]} />,
    period: '',
    stack: 'Cinema 4D',
    skills: [skillsImg20],
    features: [
      '감옥 배경 3D 환경 모델링 및 씬 디자인',
      '캐릭터 배치와 애니메이션 구성',
      '카메라 워크를 통한 공간감 연출',
      '어두운 분위기의 라이팅 및 렌더링',
    ],
    link: 'https://youtu.be/MdPBxeVrVSU',
    category: '3D Modeling / Animation',
    media: {
      // import spiderPrisonVideo from './assets/SpiderPrison.mp4';
      // 파일 준비 후 videos: [spiderPrisonVideo].filter(Boolean) 로 변경
      videos: [projectImg20].filter(Boolean),
      images: [],
    },
  },


  // 신규 Motion Graphics 프로젝트: 영상 파일은 나중에 media.videos에 연결하세요.
  {
    id: 18,
    img: 'https://img.youtube.com/vi/4yr7KbdYFkA/hqdefault.jpg',
    title: "VR GAMERS 로고 애니메이션 | After Effects",
    description: "로고의 분리·재결합과 글리치·글로우를 활용한 After Effects 로고 모션그래픽 연습.",
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[18]} />,
    period: '',
    stack: "After Effects",
    skills: [skillsImg11],
    features: ["Logo Reveal & Assembly", "Glitch & Glow", "Timing & Motion"],
    link: "https://youtu.be/4yr7KbdYFkA",
    category: 'Motion Graphics',
    media: {
      // 현재 연결된 로컬 MP4를 재생합니다.
      videos: [projectImg21].filter(Boolean),
      images: [],
    },
  },
  {
    id: 19,
    img: 'https://img.youtube.com/vi/PKvb8Tzl6Fk/hqdefault.jpg',
    title: "디마(Dima) 추상 모션 그래픽 | 모작 연습",
    description: "컬러 라인과 도형, 타이포그래피를 활용한 추상 모션그래픽 모작 연습.",
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[19]} />,
    period: '',
    stack: "After Effects",
    skills: [skillsImg11],
    features: ["Shape & Geometry", "Typography Transitions", "Color & Rhythm"],
    link: "https://youtube.com/shorts/PKvb8Tzl6Fk",
    category: 'Motion Graphics',
    media: {
      // 현재 연결된 로컬 MP4를 재생합니다.
      videos: [projectImg22].filter(Boolean),
      images: [image22],
    },
  },
  {
    id: 20,
    img: 'https://img.youtube.com/vi/QBbIK5M-Z_A/hqdefault.jpg',
    title: "카카오스타일 UI 모션 그래픽 | 모작 연습",
    description: "콘텐츠 카드와 텍스트 전환을 연출한 카카오스타일 UI 모션그래픽 모작.",
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[20]} />,
    period: '',
    stack: "미기재",
    skills: [],
    features: ["Card Layout", "UI Motion & Typography", "Transition Timing"],
    link: "https://youtu.be/QBbIK5M-Z_A",
    category: 'Motion Graphics',
    media: {
      // 현재 연결된 로컬 MP4를 재생합니다.
      videos: [projectImg23].filter(Boolean),
      images: [],
    },
  },
  {
    id: 21,
    img: 'https://img.youtube.com/vi/6RLj6HMJHWE/hqdefault.jpg',
    title: "서울시 청소년 플랫폼 몽땅 | 광고 모션그래픽 모작",
    description: "서울시 청소년 플랫폼 몽땅 홍보영상의 UI·캐릭터·타이포그래피 모션을 재현한 연습 작업.",
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[21]} />,
    period: '',
    stack: "미기재",
    skills: [],
    features: ["Advertisement Structure", "Graphic & UI Motion", "Transitions & Timing"],
    link: "https://youtu.be/6RLj6HMJHWE",
    category: 'Motion Graphics',
    media: {
      // 현재 연결된 로컬 MP4를 재생합니다.
      videos: [projectImg24].filter(Boolean),
      images: [],
    },
  },
  {
    id: 22,
    img: 'https://img.youtube.com/vi/wPlVY1DSE00/hqdefault.jpg',
    title: "레드불 로고 애니메이션 | 브랜드 모션 그래픽",
    description: "레드불 로고와 브랜드 컬러를 활용한 비공식 2D 브랜드 모션그래픽 개인 작업.",
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[22]} />,
    period: '',
    stack: "After Effects / Illustrator",
    skills: [skillsImg11, skillsImg12],
    features: ["Brand Visual Identity", "Animation & Typography", "Product Reveal"],
    link: "https://youtu.be/wPlVY1DSE00",
    category: 'Motion Graphics',
    media: {
      // 현재 연결된 로컬 MP4를 재생합니다.
      videos: [projectImg25].filter(Boolean),
      images: [],
    },
  },
    {
    id: 23,
    img: 'https://img.youtube.com/vi/5tRqCg_HD5M/hqdefault.jpg',
    title: '스마일 2 (SMILE 2) | 공포 영화 예고편 모작·재편집',
    description: '심리적 불안과 공포의 긴장감을 컷 편집과 사운드의 강약으로 표현한 비공식 예고편 모작·재편집 작업.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[23]} />,
    period: '',
    stack: 'Adobe Premiere Pro, Adobe After Effects',
    skills: [skillsImg5, skillsImg11],
    features: [
      'Psychological Tension / 인물의 표정과 정적인 순간을 활용한 심리적 긴장감',
      'Cut Editing & Contrast / 빠른 컷과 정적 장면의 대비',
      'Sound Design & Atmosphere / 사운드의 강약과 분위기 연출',
    ],
    link: 'https://youtu.be/5tRqCg_HD5M',
    category: 'Cut Edit',
    media: {
      // 내 MP4를 import한 다음 videos: [smile2Video].filter(Boolean)로 바꾸세요.
      videos: [projectImg26].filter(Boolean),
      images: [],
    },
  },

  {
    id: 24,
    img: 'https://img.youtube.com/vi/EsKBNwuBkuE/hqdefault.jpg',
    title: 'LG U+ 브랜드 광고 모션그래픽 모작',
    description: '가족의 아침과 시간의 흐름을 타이포그래피·텍스트 애니메이션으로 표현한 LG U+ 비공식 광고 모작 작품.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[24]} />,
    period: '',
    stack: 'Adobe After Effects',
    skills: [skillsImg11],
    features: [
      'Typography & Time Flow / 시간 변화에 따른 타이포그래피 및 시간 표시 애니메이션',
      'Live-action Compositing / 실사 영상 위 텍스트와 컬러 포인트 합성',
      'Advertisement Motion / 브랜드 메시지와 장면 전환의 타이밍 조절',
    ],
    link: 'https://youtu.be/EsKBNwuBkuE',
    category: 'Motion Graphics',
    media: {
      // 직접 제작한 MP4 파일을 import한 뒤 videos: [lguVideo].filter(Boolean)로 연결하세요.
      videos: [projectImg27].filter(Boolean),
      images: [],
    },
  },

  {
    id: 25,
    img: 'https://img.youtube.com/vi/eCqErvw7GoQ/hqdefault.jpg',
    title: '희노애락 | 감정을 움직이는 버섯 2D 애니메이션 아이콘',
    description: '기쁨·분노·슬픔·즐거움을 네 가지 색상과 표정, 동작을 가진 귀여운 버섯 캐릭터로 시각화한 2D 모션그래픽 포트폴리오.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[25]} />,
    period: '2026',
    stack: '2D Character Design / 2D Animation / Motion Graphics',
    skills: [skillsImg11, skillsImg12],
    features: [
      'Emotion Icon Design / 기쁨·분노·슬픔·즐거움 감정 표현',
      'Character Animation / 버섯 캐릭터의 표정과 동작',
      'Visual Storytelling / 감정별 컬러와 그래픽 구분',
    ],
    link: 'https://youtu.be/eCqErvw7GoQ',
    category: 'Motion Graphics',
    media: { videos: [projectImg28].filter(Boolean), images: [] },
  },
  {
    id: 26,
    img: 'https://img.youtube.com/vi/coxmNu-gWJU/hqdefault.jpg',
    title: '티모 희노애락 | 감정을 움직이는 2D 애니메이션 아이콘',
    description: '하나의 티모 캐릭터를 통해 희(喜)·노(怒)·애(哀)·락(樂)을 표정, 제스처, 색채, 배경 효과로 표현한 2D 애니메이션.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[26]} />,
    period: '2026',
    stack: '2D Character Design / 2D Animation / Motion Graphics',
    skills: [skillsImg11, skillsImg12],
    features: [
      '喜 Joy / 자연 배경과 밝은 표정',
      '怒 Anger / 강렬한 표정과 역동적인 연출',
      '哀 Sadness / 먹구름·비·눈물·움츠린 자세',
      '樂 Fun / 밝은 색채·음악·그래픽 효과',
    ],
    link: 'https://youtu.be/coxmNu-gWJU',
    category: 'Motion Graphics',
    media: { videos: [projectImg29].filter(Boolean), images: [] },
  },

  {
    id: 27,
    img: 'https://img.youtube.com/vi/SY2VDK9eZX8/hqdefault.jpg',
    title: 'MoGraph World | 3D 뉴스 인트로 모션그래픽',
    description: 'Cinema 4D의 Cloner, Random Effector, Sweep·Lathe Generator와 카메라 애니메이션으로 지구본·회전 링을 구현한 3D 뉴스 인트로 개인 포트폴리오.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[27]} />,
    period: '미기재',
    stack: 'Cinema 4D / Adobe After Effects',
    skills: [skillsImg20, skillsImg11],
    features: [
      '3D Motion Graphics / 방송 뉴스 지구본과 회전형 그래픽',
      'MoGraph / Cloner · Random Effector',
      'Modeling / Sweep · Lathe Generator',
      'Camera Animation / 공간감과 속도감 구현',
    ],
    link: 'https://youtu.be/SY2VDK9eZX8',
    category: ['3D Modeling / Animation', 'Motion Graphics'],
    media: { videos: [projectImg30].filter(Boolean), images: [] },
  },

  {
    id: 28,
    img: 'https://img.youtube.com/vi/vXOgFuDLpWw/hqdefault.jpg',
    title: '스파이더맨 SD 캐릭터 | 3D 모델링 및 텍스처링',
    description: 'Cinema 4D에서 SD 스타일의 스파이더맨 캐릭터를 모델링하고 FBX로 Blender에 전달해 텍스처링·라이팅·렌더링까지 구현한 개인 3D 팬아트 포트폴리오.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[28]} />,
    period: '미기재',
    stack: 'Cinema 4D / Blender',
    skills: [skillsImg20, skillsImg19],
    features: [
      'SD Character Modeling / 정면·후면·측면 실루엣 및 비율 조정',
      'FBX Workflow / Cinema 4D에서 Blender로 모델 데이터 전달',
      'Texturing & Materials / 얼굴·눈·의상 디테일과 컬러 조정',
      'Lighting & Rendering / Blender 조명 설정 및 최종 렌더링',
    ],
    link: 'https://youtu.be/vXOgFuDLpWw',
    category: '3D Modeling / Animation',
    media: { videos: [projectImg31].filter(Boolean), images: [] },
  },


  {
    id: 29,
    img: 'https://img.youtube.com/vi/5M65qDoDpR0/hqdefault.jpg',
    title: '스파이더맨 SD 캐릭터 | 3D 모델링 및 텍스처링',
    description: 'Cinema 4D에서 SD 스타일의 스파이더맨 캐릭터를 모델링하고 FBX로 Blender에 전달해 텍스처링·라이팅·렌더링까지 구현한 개인 3D 팬아트 포트폴리오.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[29]} />,
    period: '미기재',
    stack: 'Cinema 4D / Blender',
    skills: [skillsImg20, skillsImg19],
    features: [
      'SD Character Modeling / 정면·후면·측면 실루엣 및 비율 조정',
      'FBX Workflow / Cinema 4D에서 Blender로 모델 데이터 전달',
      'Texturing & Materials / 얼굴·눈·의상 디테일과 컬러 조정',
      'Lighting & Rendering / Blender 조명 설정 및 최종 렌더링',
    ],
     link: 'https://youtu.be/5M65qDoDpR0',
    category: '3D Modeling / Animation',
    media: { videos: [projectImg32].filter(Boolean), images: [] },
  },

  {
    id: 30,
    img: 'https://img.youtube.com/vi/04q-URLpty4/hqdefault.jpg',
    title: 'VENOM | 베놈 영화 예고편 모작·재편집',
    description: '영화 《베놈(VENOM)》 예고편을 참고해 액션 장면과 감정 흐름을 재구성하고, 컷 편집·사운드 디자인·색상 조정으로 긴장감을 표현한 개인 모작·재편집 포트폴리오입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[30]} />,
    period: '미기재',
    stack: 'Adobe Premiere Pro / Adobe After Effects',
    skills: [skillsImg5, skillsImg11],
    features: [
      'Trailer Editing / 영화 예고편 구성과 스토리텔링',
      'Cinematic & Cut Editing / 액션 장면의 컷 길이와 타이밍 조절',
      'Sound Design / 음악 리듬과 효과음을 활용한 긴장감 연출',
      'Scene Composition & Color Adjustment / 장면 구성과 컬러 조정',
    ],
    link: 'https://youtu.be/04q-URLpty4',
    category: 'Cut Edit',
    media: { videos: [projectImg33].filter(Boolean), images: [] },
  },

  {
    id: 31,
    uploadOrder: 31,
    img: 'https://img.youtube.com/vi/uXSPWwZ-tt8/hqdefault.jpg',
    title: '다만 악에서 구하소서 | 개인 창작 예고편 기획서 & 스토리보드',
    description: '영화 《다만 악에서 구하소서》를 바탕으로 추격·복수·구원의 흐름을 기획한 90초 개인 창작 예고편 스토리보드. 12개 구성, 약 60컷으로 카메라 구도·컷 편집·사운드 연출을 설계했습니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[31]} />,
    period: '미기재',
    stack: 'Trailer Planning / Storyboard Design / Cinematic Direction',
    skills: [],
    features: [
      'Trailer Planning / 추격·복수·구원 중심의 90초 시퀀스 기획',
      'Story & Character Analysis / 인물 관계 및 갈등 구조 분석',
      'Visual Direction / 카메라 구도·색감·컷 편집 리듬 설계',
      'Sound Direction / 음악 및 효과음 활용 계획',
      'Storyboard Design / 총 12개 구성과 약 60컷 시각화',
    ],
    link: 'https://youtu.be/uXSPWwZ-tt8',
    category: 'Storyboard / Planning & Design',
    media: { videos: [projectImg16].filter(Boolean), images: [] },
  },

  {
    id: 32,
    uploadOrder: 32,
    img: 'https://img.youtube.com/vi/fagikc37iYU/hqdefault.jpg',
    title: '슈퍼맨(2025) VS 슈퍼걸(2026) | CG/VFX 기술 비교 분석',
    description: '《같은 영웅, 다른 시각효과》 — 슈퍼맨과 슈퍼걸의 매치무브, 컬러·라이팅, 엣지·알파, 프레임·모션, 실사·CG 통합성을 동일 기준으로 분석한 개인 VFX 연구 포트폴리오입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[32]} />,
    period: '2026 (개인 연구 포트폴리오)',
    stack: 'VFX Breakdown / CG Comparison / Matchmove Analysis / Color Matching / Edge & Alpha Analysis / Motion Analysis',
    skills: [],
    features: [
      'Matchmove Accuracy / 카메라 및 움직임 정합성',
      'Color & Lighting / 컬러·톤·조명 일치도',
      'Edge & Alpha / 합성 경계 품질과 알파 채널 일관성',
      'Frame & Motion / 프레임 오류와 모션 블러 분석',
      'Visual Integration / 실사와 CG의 자연스러운 결합',
      'Technical Evaluation / 오류 발견, 개선 방향 및 분석 근거',
      'Visual Reporting / 동일 평가 기준에 따른 표와 그래프 구성',
    ],
    link: 'https://youtu.be/fagikc37iYU',
    category: [ 'Storyboard / Planning & Design'],
    media: { videos: [projectImg35].filter(Boolean), images: [] },
  },

  {
    id: 33,
    uploadOrder: 33,
    img: 'https://img.youtube.com/vi/eGmacerJh_o/hqdefault.jpg',
    title: '3D Physics Simulation | Cinema 4D 물리 시뮬레이션',
    description: 'Cinema 4D에서 3D 오브젝트의 중력에 따른 낙하, 충돌, 쌓임을 구현하고 붉은색·푸른색 재질과 라이팅으로 입체감을 강조한 물리 시뮬레이션 개인 포트폴리오입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[33]} />,
    period: '2026 (Personal Practice Work)',
    stack: 'Cinema 4D / Physics Simulation / Dynamics Animation / Lighting / Camera Composition',
    skills: [skillsImg20],
    features: [
      '3D Motion Graphics / 3D 오브젝트의 움직임과 구성',
      'Physics Simulation / 중력에 의한 낙하 시뮬레이션',
      'Collision Simulation / 오브젝트 충돌 및 쌓임 표현',
      'Material Design & Lighting / 색상·재질·조명 설정',
      'Camera Composition / 시뮬레이션 장면의 카메라 구도',
    ],
    link: 'https://youtu.be/eGmacerJh_o',
    category: '3D Modeling / Animation',
    media: { videos: [projectImg36].filter(Boolean), images: [] },
  },

  {
    id: 34,
    uploadOrder: 34,
    img: 'https://img.youtube.com/vi/Ri9FkoxiPdA/hqdefault.jpg',
    title: 'LUMIC SHOWREEL 2026 | VFX · 3D · Motion Graphics · Film Editing',
    description: 'VFX 합성, 3D 모델링·애니메이션, 모션그래픽, 영화 예고편 편집, 기획·스토리보드 및 VFX 기술 분석 작업을 하나의 시네마틱 흐름으로 재구성한 2026 종합 영상 포트폴리오입니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[34]} />,
    period: '2026 · Personal Portfolio Showreel',
    stack: 'After Effects / Premiere Pro / Photoshop / Illustrator / Cinema 4D / Blender',
    skills: [skillsImg11, skillsImg5, skillsImg6, skillsImg12, skillsImg20, skillsImg19],
    features: [
      'VFX Compositing / 실사 영상과 3D CG의 시각적 통합',
      '3D Modeling & Animation / Cinema 4D·Blender 모델링, 텍스처링, 렌더링',
      'Physics & MoGraph / Cloner, 물리 시뮬레이션, 카메라 애니메이션',
      '2D Motion Graphics / 로고·타이포그래피·광고·캐릭터 애니메이션',
      'Film Editing / 영화 예고편 모작·재편집, 개인 창작 예고편, 사운드 디자인',
      'Storyboard & VFX Analysis / 영상 기획, 시퀀스 설계, 합성 품질 비교 분석',
    ],
    link: 'https://youtu.be/Ri9FkoxiPdA',
    category: [
      'VFX Compositing',
      '3D Modeling / Animation',
      'Motion Graphics',
      'Cut Edit',
      'Storyboard / Planning & Design',
    ],
    media: { videos: [projectImg37].filter(Boolean), images: [] },
  },

  {
    id: 35,
    uploadOrder: 35,
    img: 'https://img.youtube.com/vi/RUzUE4aGtw0/hqdefault.jpg',
    title: 'LUMIC | Creative Portfolio Website 2026 | Visual Storytelling Beyond Imagination',
    description: 'VFX·3D·모션그래픽·영상 편집 프로젝트를 하나의 디지털 공간에서 선보이는 LUMIC 포트폴리오 웹사이트 프로모션 영상입니다. 우주·행성 모티브의 다크 시네마틱 디자인과 장면 전환, 음악의 리듬으로 창작 작업을 연결했습니다.',
    fullDescription: <PremiumProjectDetail project={PREMIUM_PROJECTS[35]} />,
    period: '2026 · Personal Portfolio Website Promotion',
    stack: 'Cinematic Web Design / UI Showcase / Visual Storytelling / Typography / Video Editing',
    skills: [skillsImg4, skillsImg3, skillsImg11, skillsImg5],
    features: [
      'Visual Storytelling / 상상과 창작의 과정을 시각적 이야기로 구성',
      'Cosmic Design / 우주·행성 모티브의 다크 시네마틱 UI 콘셉트',
      'Portfolio Showcase / VFX·3D·모션그래픽·영상 편집 작업 소개',
      'Website Navigation / 메인 화면·카테고리·갤러리·About Me·기술 소개 구성',
      'Cinematic Editing / 화면 전환과 음악 리듬·컷 타이밍을 결합한 프로모션 편집',
    ],
    link: 'https://youtu.be/RUzUE4aGtw0',
    category: ['Web and App Design', 'Motion Graphics', 'Cut Edit'],
    media: { videos: [projectImg38].filter(Boolean), images: [] },
  },

].sort((a, b) => (b.uploadOrder ?? b.id) - (a.uploadOrder ?? a.id));

// Stats 자동 계산
const completedProjectCategories = [
 
   'VFX Compositing',
    'AI-assisted VFX',
    'FX',
    '3D Modeling / Animation',
    'Game Trailer / Promo VFX',
    'Motion Graphics',
    'Cut Edit',
    'Storyboard / Planning & Design',
];

const aiVfxCategories = [
  'AI-assisted VFX',
];

const countProjectsByCategories = (categories) => {
  return portfolio.filter((project) => {
    if (Array.isArray(project.category)) {
      return project.category.some((category) =>
        categories.includes(category)
      );
    }

    return categories.includes(project.category);
  }).length;
};
const countExperience = () => {
  return resume.filter((item) => item.category === 'experience').length;
};

const countAwards = () => {
  return sward.filter((item) => item.category === 'awardsd').length;
};

export const stats = [
  {
    no: `${countExperience()}+`,
    title: '교육 학습 과정',
  },

  {
    no: `${countProjectsByCategories(completedProjectCategories)}+`,
    title: '완성 프로젝트',
  },

  {
    no: `${countProjectsByCategories(aiVfxCategories)}+`,
    title: 'AI 활용 VFX',
  },

  {
    no: `${countAwards()}+`,
    title: '프로젝트 수상',
  },
];

// Themes
export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
