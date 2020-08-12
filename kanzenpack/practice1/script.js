var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})