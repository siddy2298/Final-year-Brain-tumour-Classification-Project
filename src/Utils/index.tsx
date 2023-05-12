export async function fileUploadToBase64(file: any) {
    let response = await new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            resolve(reader.result!.toString())
        };
        reader.onerror = function (error) {
            resolve('')
        };
    })
    return response
}
