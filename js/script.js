// jquery基本構文
// $(“セレクタ”).メソッド(“パラメータ[引数]”);

function post() {
    $("body").text("Hello World!");
}

function finput(input) {
    console.log(input);
    console.log(input.files[0]);
}