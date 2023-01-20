
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/XxKillerzinxX03/js-developer-curriculo/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
