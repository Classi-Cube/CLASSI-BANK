// -----------------警告-----------------
window.addEventListener('load', () => {
  const warningBar = document.getElementById('warning-bar');
  const closeBtn = document.getElementById('close-btn');
  if (sessionStorage.getItem('warningClosed') !=='true') {
    setTimeout(() => {
      if (warningBar) {
        warningBar.style.top = '0';
      }
    }, 500);

  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (warningBar) {
        warningBar.style.top = '-100px';
      }
      sessionStorage.setItem('warningClosed', 'true');
    });
  }
});
// -----------------サービスコンテンツ-----------------
const menu = document.querySelector('#service-menu')

const lists = [
  {
    name: '口座開設',
    img: 'bank.png',
    link: 'bank.html',
  },
  {
    name: 'アプリ',
    img: 'application.png',
    link: 'application.html',
  },
  {
    name: 'キャッシュレス',
    img: 'cashcard.png',
    link: 'cashcard.html',
  },
  {
    name: '投資信託',
    img: 'investment.png',
    link: 'investment.html',
  },
  {
    name: '保険',
    img: 'insurance.png',
    link: 'insurance.html',
  },
  {
    name: '年金・相続',
    img: 'pension.png',
    link: 'pension.html',
  },
  {
    name: 'ローン',
    img: 'loan.png',
    link: 'loan.html',
  },
  {
    name: 'その他サービス',
    img: 'other.png',
    link: 'other.html',
  },
];

for(let i = 0; i < lists.length; i++){
  const {name, img, link} = lists[i];
  const content = `<a href="${link}" class="service-card"><img src="img/${img}" alt=""><h2>${name}</h2></a>`;
  menu.insertAdjacentHTML('beforeend', content);
}
// -----------------ピックアップコンテンツ-----------------
const track = document.getElementById('slider-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const pickupData = [
  {
    img: 'pickup1.png',
  },
  {
    img: 'pickup2.png',
  },
  {
    img: 'pickup3.png',
  },
  {
    img: 'pickup4.png',
  },
]

for (const item of pickupData) {
  const content = `<div class="pickup-card"><img src="img/${item.img}" alt=""></div>`;
  track.insertAdjacentHTML('beforeend', content);
}

const slideCount = pickupData.length;
const cloneCount = 3;

for (let i = 0; i < cloneCount; i++) {
  track.appendChild(track.children[i].cloneNode(true));
}
for (let i = slideCount - 1; i >= slideCount - cloneCount; i--) {
  track.insertBefore(track.children[i].cloneNode(true), track.firstChild);
}

const allSlides = document.querySelectorAll('.pickup-card');
const slideWidth = allSlides[0].offsetWidth + 24;
let currentIndex = cloneCount;
let isTransitioning = false;
const transitionTime = 600;

const setInitialPosition = () => {
  track.style.transition = 'none';
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  setTimeout(() => {
    track.style.transition = `transform ${transitionTime / 1000}s ease-in-out`;
  }, 50);
};
setInitialPosition();

const moveSlide = (direction) => {
  if (isTransitioning) return;
  isTransitioning = true;
  
  currentIndex += direction;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  setTimeout(() => {
    isTransitioning = false;
  }, transitionTime);
};

// 「＞」ボタンの処理
nextBtn.addEventListener('click', () => {
  moveSlide(1);
});

// 「＜」ボタンの処理
prevBtn.addEventListener('click', () => {
  moveSlide(-1);
});


// ループ処理（ワープ）を行う関数
const handleLoop = () => {
  if (currentIndex === slideCount + cloneCount) {
    currentIndex = cloneCount;
    setInitialPosition();
  }
  if (currentIndex === 0) {
    currentIndex = slideCount;
    setInitialPosition();
  }
};

track.addEventListener('transitionend', handleLoop);

console.log("CLASSI BANKのスクリプトが正常に読み込まれました。");