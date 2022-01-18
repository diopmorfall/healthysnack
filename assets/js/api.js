//todo: fetch api (it won't be needed anymore if I save the json file; it's unfetchable)
export async function fetchUrl(url){
    try {
        let response = await fetch(url);

        return response.json();
    } catch (error) {
        console.warn(error);
    }
}

export function urlBuilder(url, params){
    return url + params;
}