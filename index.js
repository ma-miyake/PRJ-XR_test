var _callbackId ;
//AR画面のサイズ指定
var _windowSize = 400;
 
//requestanimationflameで繰り返す
function loopFunc ( timeStamp ) {
var videoImage = new Image();
//映像が映し出されているvideoタグを取得
var video = document.querySelector(‘video’);
 
//入力のvideo映像をcanvasに変換
videoImage = video;
var videoCnv = $(‘#vid_canvas’);
var videoCtx = videoCnv[0].getContext(‘2d’);
 
//合成先のcanvasを左右反転
videoCtx.transform(–1, 0, 0, 1, _windowSize, 0);
//入力画像の中央位置を正方形に切り抜くためのマージンを計算。
var widMargin = (video.videoWidth – _windowSize) / 2;
var heiMargin = (video.videoHeight – _windowSize) /2;
//キャプチャーしたカメラ映像の画像を表示
videoCtx.drawImage(videoImage,widMargin,heiMargin,_windowSize,_windowSize,0,0,_windowSize,_windowSize);
//キャプチャしたARモデルを表示
var arScene = document.querySelector(“.a-canvas”);
videoCtx.drawImage(arScene,0,0,_windowSize,_windowSize);
videoCtx.transform(–1, 0, 0, 1, _windowSize, 0);
_callbackId = requestAnimationFrame( loopFunc ) ;
}
 
//上記のrequestanimationframeが実行され動画がAR動画が描画される
function play(){
loopFunc();
};