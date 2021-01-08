export default function getData(findType, keyFind, keyword) {
    const promise = new Promise ((resolve,reject) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/${findType}.php?${keyFind}=${keyword}`)
            .then(response => response.json())
            .then(responseJson => {
                resolve(responseJson.meals)
            }, err => {
                reject(err)
            })
    })
    return promise;
}