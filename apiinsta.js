const BASE_API = "https://graph.instagram.com/me";
const ACCESS_TOKEN =
  "IGQVJWR2hNTVVKcTg5WEpmV0d3ZA1VrVzVwT0x0SjhGVlNwWUVOSFEzQXQ3N0pKMEtZAWkV4NDJzcGwxNDhNQS1rRUhlSEpUMDZAaamRYMjVzWUtnamhSc0VGRDBOaUVmVkZAmUDA2b05QZA19UYVBMTk1hVzJJeF9COFlad2JZA";
//graph.instagram.com/me/media?fields=id,media_url,permalink&access_token=IGQVJXUDBxSVprSElobVJkZA0lsRHRzdnN3TUV5V3pFWW1IemZAQY2N3dTkzWnE0azZAqWTdKWHdWX3QxQmFqTDRxRGk4bEJOQjhYWmpXakFTZAHhhdnI3SEZAWaFV4WTNpamdxN0dQdzVoaDZAIdHk3LUNmMDZAmQmtpZAkVMdE44
const username = document.getElementById("username");
const posts = document.getElementById("posts");
const photos = document.getElementById("photos");

//Information
async function getUserInfo() {
  const response = await fetch(
    `${BASE_API}?fields=id,username,media_count&access_token=${ACCESS_TOKEN}`
  );
  //`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`
  const userInfo = await response.json();
  console.log(userInfo);
  username.innerHTML = userInfo.username;
  posts.innerHTML = userInfo.media_count;
  return userInfo;
}
getUserInfo();

//Photos
async function getUserMediaInfo() {
  const response = await fetch(
    `${BASE_API}/media?fields=id,media_url,permalink&access_token=${ACCESS_TOKEN}`
    //`${BASE_API}media?fields=id,media_url&access_token=${ACCESS_TOKEN}`
  );
  const userMediaInfo = await response.json();
  console.log(userMediaInfo);
  return userMediaInfo;
}
getUserMediaInfo().then((media) => {
  media.data.map((mediaInfo) => {
    const img = document.createElement("img");
    img.style.width = "100px";
    img.src = mediaInfo.media_url;
    photos.appendChild(img);
  });
});
