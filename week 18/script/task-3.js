const namee = document.querySelector('.name');
const photoUrl = document.querySelector('.photo-url');
const photo = document.querySelector('.photo');
const newComment = document.querySelector('.newComment');
const commentBox = document.querySelector('.comments-container');
const del = document.querySelector('.delete');

document.addEventListener("DOMContentLoaded", (e) => {
    let user = JSON.parse(localStorage.getItem('userName'));
    if (user != null) {
        namee.value = user;
    }

    let src = JSON.parse(localStorage.getItem('userPhoto'));
    if (src != null) {
        photoUrl.value = src;
        photo.src = src;
    }

    return user
    return src
});

const btn = document.querySelector('.send');
btn.addEventListener('click', (e) => {

    let userName = namee.value;
    let userPhoto = photoUrl.value;

    localStorage.setItem('userName', JSON.stringify(userName));
    localStorage.setItem('userPhoto', JSON.stringify(userPhoto));

    let userText = newComment.value;

    let commentTemplate = `
    <div class="comment-box">
        <div class="container">
            <div class="comment-info">
                <img class="photo" src="${JSON.parse(localStorage.getItem('userPhoto'))}" alt="user photo">
                <p class="user-name">${JSON.parse(localStorage.getItem('userName'))}</p>
            </div>
            <div class="comment">
                <p class="text">${userText}</p>
                <div class="comment-bottom">
                    <button class="delete">Delete</button>
                </div>
            </div>
        </div>
    </div>
    `
    commentBox.insertAdjacentHTML('afterbegin', commentTemplate)

    del.addEventListener('click', (e) => {
        e.target.remove();
    })
    return userName
    return userPhoto

})

