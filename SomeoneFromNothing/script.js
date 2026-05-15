
const loadingText = document.getElementById("loading-text");
const introScreen = document.getElementById("intro");
const questionScreen = document.getElementById("question-screen");
const loadingScreen = document.getElementById("loading-screen");
const profileScreen = document.getElementById("profile");
const dmScreen = document.getElementById("dm-screen");
const postScreen = document.getElementById("post-screen");
const dmList = document.getElementById("dm-list");

const nameInput = document.getElementById("name");
const hobbyInput = document.getElementById("hobby");
const cityInput = document.getElementById("city");
const songInput = document.getElementById("song");
const secretInput = document.getElementById("secret");
const fearInput = document.getElementById("fear");
const photoStyleInput = document.getElementById("photo-style");

const startButton = document.getElementById("start-button")
const genButton = document.getElementById("gen-button")
const regenButton = document.getElementById("regen-button");

const postImages = [
    "assets/generated/post1.png",
    "assets/generated/post2.png",
    "assets/generated/post3.png",
    "assets/generated/post4.png",
    "assets/generated/post5.png",
    "assets/generated/post6.png"
];

const usernameSuffixes = [
    "archive",
    'jpeg',
    'offline',
    'static',
    'lost',
    'sleeping',
    'ghost',
    'mp3',
    'active'
];

const bios = [
    "rarely online",
    "still awake somehow",
    "deleted memories",
    "35mm everywhere",
    "trying to disappear",
    "seen at 2:14am"
];

const dmNames = [
    "mila.jpeg",
    "offline_eli",
    "nina.private",
    "sasha.archive",
    "jay2times",
    "ghost.mp3"
];

const dmMessages = [
    "You still there?",
    "Sent a photo",
    "Seen",
    "sent a voice note",
    "we never finished talking",
    "why did you delete everything?",
    "Sent last week",
    `did you ever tell anyone about ${secret}?`,
    "you left without explaining anything",
    "i still have the old screenshots",`this doesnt feel like you anymore`,
];

let posts = [];
let dmPreviews = [];

startButton.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
});

let dotCount = 0;

setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    loadingText.innerText =
        "Searching behavioural traces" + ".".repeat(dotCount);
}, 500);

genButton.addEventListener("click", async () => {
    questionScreen.classList.add("hidden");
    loadingScreen.classList.remove("hidden");

    // AI assisted
    await fetch("/generate-images", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameInput.value,
            city: cityInput.value,
            hobby: hobbyInput.value,
            song: songInput.value,
            secret: secretInput.value,
            fear: fearInput.value,
            photoStyle: photoStyleInput.value
        })

    });
    generateProfile();
    refreshGeneratedImages();

    loadingScreen.classList.add("hidden");
    profileScreen.classList.remove("hidden");
    
});

regenButton.addEventListener("click", () => {
    profileScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");

});

//AI-assisted
function refreshGeneratedImages() {
    const time = Date.now();

    document.querySelector(".profile-header img").src =
        `assets/generated/profile1.png?v=${time}`;

    const gridImages = document.querySelectorAll(".post-grid img");

    gridImages.forEach((img, index) => {
        img.src = `assets/generated/post${index + 1}.png?v=${time}`;
    });

    posts.forEach((post, index) => {
        post.image = `assets/generated/post${index + 1}.png?v=${time}`;
    });
}
// End of AI assist

function generateProfile() {
    const name = nameInput.value;
    const hobby = hobbyInput.value;
    const city = cityInput.value;
    const song = songInput.value;
    const secret = secretInput.value;
    const fear = fearInput.value;
    const photoStyle = photoStyleInput.value;

    const imagePrompts = {
        profile: 
        `Low quality social media profile picture, young person from ${city} named ${name}, interested in ${hobby}, emotionally ambiguous, inspired by ${song}, slightly blurry phone camera image, ${photoStyle} aesthetic, realistic social media archive image, no text`,    
        post1:
        `Late night social media photo in ${city}, inspired by feelings of ${fear}, realistic phone camera aesthetic, emotionally nostalgic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence.`,
        post2: 
        `Casual social media image related to ${hobby}, blurry digital memory, realistic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence.`,
        post3: 
        `A blurry social media photo inspired by ${song}, realistic phone camera image, emotionally nostalgic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence.`,
        post4: 
        `A ${photoStyle} social media photo in ${city}, realistic phone camera aesthetic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence.`,
        post5: 
        `A quiet social media image hinting at ${secret}, emotionally ambiguous, realistic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence.`,
        post6:
         `A social media memory connected to fear of ${fear}, subtle, realistic phone camera image, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence.`
    };

    console.log("AI image prompts:", imagePrompts);

    const captions = [
        `2:14am somewhere in ${city}`,
        `still think about ${city}`,
        `${hobby} every weekend until it got boring`,
        `dont remember taking this in ${city}`,
        "everyone disappeared after that summer",
        `${hobby} used to feel easier`,
        `${song} was playing when i took this`,
        `never really talked about ${secret}`,
        `i love the way the ${photoStyle} looks`,
        `wish i stayed in ${city}`,
        "another night pretending everything was fine",
        "you never posted this one",
        "this was before everything changed",
        `still hear ${song} and think about this`,
        `you always looked different in ${city}`,
        "i dont remember who took this photo",
        "wish i answered that message",
    ];
    
    const commentsPool = [
        "you disappeared after this",
        `You still in ${city}?`,
        `this literally reminds me of ${song}`,
        `you're still scared of ${fear} loool`,
        "thought about this yesterday",
        `haven’t seen you since the ${hobby} phase`,
        `you looked happier in ${city}`,
        "why does this make me sad",
        "miss this version of you",
        "this feels weird to look at now",
        "you stopped replying after this",
        "i forgot this even happened",
        "why do i still remember this day",
        "this doesnt even feel real anymore",
    ];

    const commentUsernames = [
        "mila.jpeg",
        "offline_eli",
        "nina.private",
        "sasha.archive",
        "jay2times",
        "ghost.mp3"
    ];

    posts = [
        {
          image: "assets/generated/post1.png",
          caption: captions[Math.floor(Math.random() * captions.length)],
          captionUsername: name + "." + usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)],
          comments: [
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              },
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              }
          ],
          likes: 25,
          time: "12 May",
        },
        {
          image: "assets/generated/post2.png",
          caption: captions[Math.floor(Math.random() * captions.length)],
          captionUsername: name + "." + usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)],
          comments: [
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              },
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              }
          ],
          likes: 13,
          time: "3 weeks ago",
        },
        {
          image: "assets/generated/post3.png",
          caption: captions[Math.floor(Math.random() * captions.length)],
          captionUsername: name + "." + usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)],
          comments: [
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              },
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              }
          ],
          likes: 41,
          time: "7 weeks ago",
        },
        {
          image: "assets/generated/post4.png",
          caption: captions[Math.floor(Math.random() * captions.length)],
          captionUsername: name + "." + usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)],
          comments: [
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              },
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              }
          ],
          likes: 41,
          time: "13 weeks ago",
        },
        {
          image: "assets/generated/post5.png",
          caption: captions[Math.floor(Math.random() * captions.length)],
          captionUsername: name + "." + usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)],
          comments: [
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              },
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              }
          ],
          likes: 41,
          time: "20 weeks ago",
        },
        {
          image: "assets/generated/post6.png",
          caption: captions[Math.floor(Math.random() * captions.length)],
          captionUsername: name + "." + usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)],
          comments: [
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              },
              {
                  username: commentUsernames[Math.floor(Math.random() * commentUsernames.length)],
                  text: commentsPool[Math.floor(Math.random() * commentsPool.length)]
              }
          ],
          likes: 41,
          time: "52 weeks ago",
        }
    ];

    const contextualDmMessages = [
        ...dmMessages,
        `do you remember ${city}?`,
        `found that old ${hobby} photo`,
        `How've you been ${name}?`,
        `you never explained ${secret}`,
        `heard ${song} the other day and thought of you`,
        `are you still doing ${hobby}?`,
        `haven't seen you in ${city} for ages`,
        `why did you post so many ${photoStyle} photos?`,
        `still afraid of ${fear}?`        
    ];

    dmPreviews = [
        {
            name: dmNames[Math.floor(Math.random() * dmNames.length)],
            preview: contextualDmMessages[Math.floor(Math.random() * contextualDmMessages.length)],
            pfp: "assets/dm-pfps/pfp1.png"
        },
        {
            name: dmNames[Math.floor(Math.random() * dmNames.length)],
            preview: contextualDmMessages[Math.floor(Math.random() * contextualDmMessages.length)],
            pfp: "assets/dm-pfps/pfp2.png"
        },
        {
            name: dmNames[Math.floor(Math.random() * dmNames.length)],
            preview: contextualDmMessages[Math.floor(Math.random() * contextualDmMessages.length)],
            pfp: "assets/dm-pfps/pfp3.png"
        },
        {
            name: dmNames[Math.floor(Math.random() * dmNames.length)],
            preview: contextualDmMessages[Math.floor(Math.random() * contextualDmMessages.length)],
            pfp: "assets/dm-pfps/pfp4.png"
        },
        {
            name: dmNames[Math.floor(Math.random() * dmNames.length)],
            preview: contextualDmMessages[Math.floor(Math.random() * contextualDmMessages.length)],
            pfp: "assets/dm-pfps/pfp5.png"
        },
        {
            name: dmNames[Math.floor(Math.random() * dmNames.length)],
            preview: contextualDmMessages[Math.floor(Math.random() * contextualDmMessages.length)],
            pfp: "assets/dm-pfps/pfp6.png"
        }
    ];

    const randomSuffix = 
    usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)];

    const bioOptions = [
        `${hobby} • ${city} • ${bios[Math.floor(Math.random() * bios.length)]}`,
        `${photoStyle} • ${song} • ${bios[Math.floor(Math.random() * bios.length)]}`,
        `${city} • avoiding ${secret} • ${bios[Math.floor(Math.random() * bios.length)]}`,
        `${hobby} and ${photoStyle} • rarely explained anything`
    ];

    document.getElementById("profile-name").innerText = name + "." + randomSuffix;

    document.getElementById("profile-bio").innerText = bioOptions[Math.floor(Math.random() * bioOptions.length)];
    
    document.getElementById("posts").innerText = "6 posts";
    
    document.getElementById("friends").innerText = Math.floor(Math.random() * 900 + 100) + " friends";
}

function openPost(index) {
    const post = posts[index];
    document.getElementById("expanded-post-image").src =
        post.image;
    document.getElementById("expanded-post-caption").innerHTML =
        `<strong>${post.captionUsername}</strong> ${post.caption}`;
    document.getElementById("expanded-post-likes").innerText =
        post.likes;
    document.getElementById("expanded-post-time").innerText =
        post.time;
    document.getElementById("expanded-post-comments").innerHTML =
        post.comments.map(comment => 
            `<p><strong>${comment.username}</strong> ${comment.text}</p>`
        ).join("");

    profileScreen.classList.add("hidden");
    postScreen.classList.remove("hidden");
}

function closePost() {
    postScreen.classList.add("hidden");
    profileScreen.classList.remove("hidden");

}

function renderDMs() {
    dmList.innerHTML = dmPreviews.map(dm => `
        <div class = "dm-card">
            <img class = "dm-pfp" src = "${dm.pfp}" alt="${dm.name}">
            <div>
                <p class="dm-name">${dm.name}</p>
                <p class="dm-message">${dm.preview}</p>
            </div>
        </div>
    `).join("");
}

function showDMs() {
    profileScreen.classList.add("hidden");
    postScreen.classList.add("hidden");
    dmScreen.classList.remove("hidden");
    renderDMs();
}

function showProfile() {
    dmScreen.classList.add("hidden");
    postScreen.classList.add("hidden");
    profileScreen.classList.remove("hidden");
}
