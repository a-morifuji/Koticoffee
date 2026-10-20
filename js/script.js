window.addEventListener("load", function () {
    const loadingBox = document.querySelector(".loadingBox");

    // ページ読み込み後、5秒間ローディングを表示
    setTimeout(function () {
        // ページ本体を表示
        document.body.classList.add("loaded");

        if (loadingBox) {
            // ローディング画面をフェードアウト
            loadingBox.style.opacity = "0";
            loadingBox.style.visibility = "hidden";

            // フェードアウト後、要素そのものを削除
            setTimeout(function () {
                loadingBox.remove();
            }, 500);
        }
    }, 2000);
});

// メインビジュアルの画像 スライドショー
// PC版
$('#mainVisual').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 4000,
    fade: true,
    cssEase: 'ease-in-out',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
});

// SP版
$('#mainVisualSp').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 5000,
    fade: true,
    cssEase: 'ease-in-out',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
});





// ハンバーガーメニューをクリックすると、情報を表示
let hamMenu = document.getElementById('hamMenu');
console.log(hamMenu);

// ハンバーガーメニューのボタン
let hamBtn = document.querySelector('.hamBtn');
console.log(hamBtn);

// ボタンクリックイベント
hamBtn.addEventListener('click', function() {
    // クラス切り替え
    hamMenu.classList.toggle('open');
});






// フェードイン
let scrollTargets = document.querySelectorAll('.scrollTgt');
let buttons = document.querySelectorAll('.buttonFade');

window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    let windowH = window.innerHeight;

    scrollTargets.forEach(function(target) {
        let rect = target.getBoundingClientRect().top + scrollY;

        if (scrollY > rect - windowH + windowH / 4) {
            // ボタン以外を先に表示
            if (!target.classList.contains('buttonFade')) {
                target.classList.add('fadeIn');
            }
        }
    });

    buttons.forEach(function(button) {
        let rect = button.getBoundingClientRect().top + scrollY;

        if (scrollY > rect - windowH + windowH / 4) {
            // ボタン 遅れて表示
            setTimeout(function() {
                button.classList.add('fadeIn');
            }, 200);
        }
    });
});



// MENU見出しの固定を最後の画像で解除
const menuTitle = document.querySelector(".menuTitle");
const lastMenuItem = document.querySelector("#menu .menuGrid .item:last-child");

if (menuTitle && lastMenuItem) {
    // 指定した要素が画面内に入ったかチェック
    const menuObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                // クラス追加
                menuTitle.classList.add("menuTitleEnd");
            } else {
                // クラス削除
                menuTitle.classList.remove("menuTitleEnd");
            }
        },
        {
            threshold: 0.05
        }
    );

    menuObserver.observe(lastMenuItem);
}