const BASE_URL = "http://localhost:8080";

export function getSummonerTftMatchHistory(summonerName) {
    return fetch(BASE_URL + "/history/" + summonerName).then(res => res.json());
}

export function getSummonerNameFromPuuid(puuid) {
    return fetch(BASE_URL + "/summoner/" + puuid).then(res => res.json());
}

export function getPuuidFromSummonerName(summonerName) {
    return fetch(BASE_URL + "/summoners/" + summonerName).then(res => res.json());
}