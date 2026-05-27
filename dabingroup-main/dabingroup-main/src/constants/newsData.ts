export interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  images?: string[];
  longDescription?: string;
}

export const NOTICES: Notice[] = [
  {
    id: 5,
    title: '사랑의 열매 착한가게',
    date: '2026.04.05',
    category: '사회공헌',
    content: '작은 선택이 도시를 조금 더 따뜻하게 만듭니다💚',
    longDescription: '다빈그룹과 함께 계열사 다빈기획, 미도가\n사랑의열매 ‘착한가게’로 함께하게 되었습니다.\n그리고 그 의미 있는 순간이\n세종시 착한가게 1000호로 이어졌습니다.\n\n✨미도 세종 999호\n✨다빈그룹 세종 1000호🎉\n✨다빈기획 세종 1001호\n\n우리는 늘 보이는 결과물만이 아니라\n그 안에 담긴 가치까지 고민합니다.\n\n공간을 만들고, 디자인을 하며\n사람과 사람을 연결하는 일.\n\n그 과정 속에서\n조금 더 나은 세상을 만들 수 있다면\n그것이 우리가 하는 일의 이유라고 믿습니다.\n\n앞으로도 다빈그룹은\n보이지 않는 곳까지 고민하는\n따뜻한 선택을 이어가겠습니다.',
    images: []
  },
  {
    id: 4,
    title: '친환경장비 도입',
    date: '2026.03.10',
    category: 'ESG',
    content: '탄소중립 실천을 위해 다빈그룹에 최신 친환경 장비를 새롭게 도입하였습니다.',
    longDescription: '기후 위기에 대응하고 지속가능한 발전을 위해 다빈그룹은 친환경 장비 도입을 선언했습니다. 에너지 효율이 높은 최신 생산 설비와 출력 시스템을 통해 탄소 배출량을 절감하고, 더 건강한 도시 환경을 만드는 데 일조하겠습니다.',
    images: ['https://lh3.googleusercontent.com/d/1MZxIq9N3sSYxjZSrItPgAnJIV1DFLMsc']
  },
  {
    id: 3,
    title: '서울현병원 걷기대회',
    date: '2026.02.15',
    category: '행사',
    content: '행사에 필요한 모든 요소를 (주)다빈기획에서 직접 기획하고 준비했습니다.',
    longDescription: '무대 설치부터\n출발 아치, 현수막, 안내물, 인쇄물까지.\n\n행사에 필요한 모든 요소를\n(주)다빈기획에서 직접 기획하고 준비했습니다.\n\n✔ 무대 및 음향 세팅\n✔ 에어 아치 설치\n✔ 부스 및 현장 세팅\n✔ 안내지도 / 인쇄물 제작\n✔ 기념품 제작 및 납품\n\n현장의 흐름까지 고려한\n실제 운영 중심의 행사 준비.\n\n단순 제작이 아닌\n행사의 완성도를 만드는 작업입니다.\n\n👉 행사 기획부터 설치, 제작까지\n한 번에 가능한 (주)다빈기획\n\n제품 문의 및 견적상담은\n🏷 다빈기획 카카오채널로 문의주시면\n신속하게 응대해드리겠습니다 😇',
    images: ['https://lh3.googleusercontent.com/d/1lz-PekLV-j3cG4MERXKpgesd6UO7P5zv']
  },
  {
    id: 2,
    title: '2026년 설날 웹자보',
    date: '2026.01.25',
    category: '소식',
    content: '민족 대명절 설을 맞아 따뜻한 마음을 나누는 설날 웹자보입니다. 행복하고 즐거운 명절 되시길 바랍니다.',
    longDescription: '함께여서 더 든든했던 시간들,\n늘 보내주신 믿음과 응원에 진심으로 감사드립니다.\n\n다가오는 새해에도\n상생과 배려의 가치를 소중히 여기며\n지역과 함께 성장하는 기업이 되겠습니다.\n\n가족과 정이 가득한 설 연휴 보내시고\n올 한 해 건강과 행복이 가득하시길 바랍니다.\n\n새해 복 많이 받으세요 🍊\n(주)다빈그룹',
    images: ['https://lh3.googleusercontent.com/d/1hyHriZyoBijd4yR_EbCi_di2biWZZ-y0']
  },
  {
    id: 1,
    title: '2026년 신년웹자보',
    date: '2026.01.01',
    category: '소식',
    content: '2026년 새해를 맞이하여 다빈그룹의 비전과 희망을 담은 신년 웹자보를 전해드립니다.',
    longDescription: '✨ 2026년 병오년 ✨\n새해에도 힘차게 도약하며 새로운\n기회와 좋은 일들로 가득한\n한 해가 되시길 바랍니다.\n건강과 행복이 늘 함께하고,\n매 순간이 빛나는 2026년 되세요.',
    images: ['https://lh3.googleusercontent.com/d/1yZHa-NgJZ5seWCn6cXuGoulsdR46r6tr']
  }
];
