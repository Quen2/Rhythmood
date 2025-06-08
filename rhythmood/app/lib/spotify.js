export default async function SpotifyTokken () {

    let access_token
    let token_expiration
    const CLIENT_ID = process.env.CLIENT_ID
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const date = Date.now()

    if (access_token && token_expiration && date < token_expiration) {
        return access_token
    }

    const token = await fetch ('https://accounts.spotify.com/api/token', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body : new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET
        })
    })

    const tokenJson = await token.json()
    access_token = tokenJson.access_token
    token_expiration = date + tokenJson.expires_in * 1000 - 5000;

    return access_token
    
}