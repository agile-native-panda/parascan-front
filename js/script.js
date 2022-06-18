// jquery基本構文
// $(“セレクタ”).メソッド(“パラメータ[引数]”);

const form = document.getElementById("upload");
const submitButton = document.getElementById("submit-button");


function post() {
    const formData = new FormData(document.getElementById("upload"));
    const action = upload.getAttribute("action");
    const options = {
        method: 'POST',
        body: formData,
    }

    fetch(action, options).then((e) => {
        if(e.status === 200) {
        alert("保存しました。")
        return
        }
        alert("保存できませんでした。")
    })
}