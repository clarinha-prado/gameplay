//const REDIRECT_URI = 'https://auth.expo.io/@anonymous/gameplay-bf9ea97f-dac5-425c-bcad-49aef97418fa';
//const REDIRECT_URI = 'https%3A%2F%2Fauth.expo.io%2Fgameplay';
const REDIRECT_URI = 'https%3A%2F%2Fauth.expo.io%2F%40clarinha.prado%2Fgameplay';
const SCOPE = 'identify%20connections%20email%20guilds';
const RESPONSE_TYPE = 'token';
const CLIENT_ID = '858473822956552193';
const CDN_IMAGE = 'https://cdn.discordapp.com';

export {
    REDIRECT_URI,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
}

// https://discord.com/api/oauth2/authorize?client_id=858473822956552193&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds