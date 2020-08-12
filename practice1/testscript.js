var app = new Vue({
	//option
  el: '#app',
  data: {
      message: 'Hello Vue.js!',
      toggle: true,
      colors: ['red', 'green', 'blue'],
      user: {
          firstName: 'Taro',
          lastName: 'Yamada',
          age: 28,
      },
      now: '今は何時かな？',
  },
  methods: {
    onclick: function() {
        this.now = new Date().toLocaleString();
    }
  },
})