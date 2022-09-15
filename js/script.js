// jquery基本構文
// $(“セレクタ”).メソッド(“パラメータ[引数]”);

const form = document.getElementById("upload");
const submitButton = document.getElementById("submit-button");
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');


// function post() {
//     const formData = new FormData(document.getElementById("upload"));
//     const action = upload.getAttribute("action");
//     const options = {
//         method: 'POST',
//         body: formData,
//     }

//     dispLoading("処理中...");

//     fetch(action, options).then((e) => {
//         if(e.status === 200) {
//         alert("保存しました。")
//         return
//         }
//         alert("保存できませんでした。")
//     })

// }

submitButton.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

// $('#upload').bind('ajax:complete', function(){
//   mask.classList.add('hidden');
//   modal.classList.add('hidden');
// });

$(function () {
  // const formData = new FormData(document.getElementById("upload"));
  // const action = upload.getAttribute("action");
  // console.log(action);

  $("#submit-button").on("click", function() {

    let $upfile = $('input[name="video"]');
    console.log(JSON.stringify($('input[name="video"]')));
    console.log(JSON.stringify($upfile.files));
    let formData = new FormData();
    console.log($upfile.prop('files')[0]);
    var file = $('input')[0].files[0];
    formData.append("video", file);
    console.log(formData);
    for (var [key, value] of formData.entries()) { 
      console.log(key, value);
    }
 
    // 処理前に Loading 画像を表示
    // dispLoading("処理中...");
 
    // 非同期処理
    $.ajax({
      url : "https://example.com",
      type:"post",
      data: formData,
      processData: false,
      contentType: false,
      cache: false,
      xhrFields: {
        responseType: "blob"
      },
    })
    // 通信成功時
    /*
    .done( function(data) {
      console.log("成功しました");
    })
    // 通信失敗時
    .fail( function(data) {
      console.log("失敗しました");
    })
    */
    // 処理終了時
    .always( function(data) {
      // Lading 画像を消す
      // removeLoading();
      mask.classList.add('hidden');
      modal.classList.add('hidden');
    });
  });
});

/* ------------------------------
Loading イメージ表示関数
引数： msg 画面に表示する文言
------------------------------ */
function dispLoading(msg){
    // 引数なし（メッセージなし）を許容
    if( msg == undefined ){
        msg = "";
    }
    // 画面表示メッセージ
    var dispMsg = "<div class='loadingMsg'>" + msg + "</div>";
    // ローディング画像が表示されていない場合のみ出力
    if($("#loading").length == 0){
        $("body").append("<div id='loading'>" + dispMsg + "</div>");
    }
}

/* ------------------------------
Loading イメージ削除関数
------------------------------ */
function removeLoading(){
    $("#loading").remove();
}