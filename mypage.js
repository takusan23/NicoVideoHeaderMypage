// 読み込みが終わったら
window.onload = () => {
    // 新ヘッダーのとき
    const headerUserName = document.getElementsByClassName('common-header-1e1ifiy')[0]
    if (headerUserName === undefined) {
        // 新ヘッダーでなければ落とす
        return
    }
    // aタグへ置き換える
    const aTag = document.createElement('a')
    // ニコニコマイページをリンク先としてセット
    aTag.href = "https://www.nicovideo.jp/my/top"
    // 名前のある要素の部分に追加。
    headerUserName.append(aTag)
    // CSSをいじってdivタグ全体にaタグのhrefが掛かるようにする。
    aTag.style.display = 'block'
    aTag.style.position = 'absolute'
    aTag.style.top = '0'
    aTag.style.left = '0'
    aTag.style.height = '100%'
    aTag.style.width = '100%'
}