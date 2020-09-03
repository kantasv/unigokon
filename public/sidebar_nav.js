/*
このJSファイルを読み込むと、MDLが適用されているページの
ハンバーガーメニューを以下の通りに描画し、リンクも適用します
--
ダッシュボード
グループプロフィール編集
幹事プロフィール編集
グループマッチ開始
設定
お問い合わせorバグの報告
ヘルプ
ログアウト
--
*/

document.getElementById('sidebar_nav').innerHTML=
'<a class="mdl-navigation__link" href="dashboard.html">ダッシュボード</a>'+
'<a class="mdl-navigation__link" href="editGroupProfile.html">グループプロフィール編集</a>'+
'<a class="mdl-navigation__link" href="editUserProfile.html">幹事プロフィール編集</a>'+
'<a class="mdl-navigation__link" href="match.html">グループマッチ開始</a><br><br><br>'+
'<a class="mdl-navigation__link" href="/chat.html?chatroom=WHqZV6a0fZeNLORwvG7eHC8iG9A2_WHqZV6a0fZeNLORwvG7eHC8iG9A2">お問い合わせorバグの報告</a>'+
'<a class="mdl-navigation__link" href="help.html">ヘルプ</a>'+ 
'<a class="mdl-navigation__link" href="javascript:firebase.auth().signOut();setTimeout(changeLocationAfterSignOut,600);">ログアウト</a>'

function changeLocationAfterSignOut(){
	window.location.href='index.html'
}