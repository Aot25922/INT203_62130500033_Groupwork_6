    const app = {
        data() {
            return {
                url:"./images/62130500033.jpg",
                firstname:"Thanapat",
                lastname:"Kallakul",
                position:"Scholar",
                article:"Article",
                article_no:"34",
                followers:"Followers",
                followers_no:"940",
                ratings:"Ratings",
                ratings_no:"8.9",
                chats:"Chat",
                width:"150"
            }
        }

    }
    mountedApp = Vue.createApp(app).mount('#app')