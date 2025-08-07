const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    // 1. クリックされたアイテム自体の active クラスを切り替える
    item.classList.toggle('active');

    // 2. コンテンツ部分を取得
    const content = item.querySelector('.accordion-content');

    // 3. active クラスが付いているかチェックして、コンテンツを開閉する
    if (item.classList.contains('active')) {
      // 開く時: コンテンツの実際の高さに max-height を設定し、paddingも戻す
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.padding = '20px';
    } else {
      // 閉じる時: max-height を 0 にして畳み、paddingも消す
      content.style.maxHeight = '0';
      content.style.padding = '0 20px';
    }
  });
});

console.log("CLASSI BANKのスクリプトが正常に読み込まれました。");