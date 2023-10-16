const MyNameApp = {
    data() {
        return {
            name: "Alicia",
            age: 18
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")