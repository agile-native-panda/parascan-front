// jquery基本構文
// $(“セレクタ”).メソッド(“パラメータ[引数]”);

function post() {
    $("body").text("Hello World!");
}

async function finput(input) {
    console.log(input);
    const encodedFile = await base64Encode(input.files[0]);
    console.log(encodedFile);
}

function base64Encode(...parts) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => {
            const offset = reader.result.indexOf(",") + 1;
            resolve(reader.result.slice(offset));
        };
        reader.readAsDataURL(new Blob(parts));
    });
}
  
function base64Decode(text, charset) {
    return fetch(`data:text/plain;charset=${charset};base64,` + text).then(response => response.text());
}
  
function base64DecodeAsBlob(text, type = "text/plain;charset=UTF-8") {
    return fetch(`data:${type};base64,` + text).then(response => response.blob());
} 