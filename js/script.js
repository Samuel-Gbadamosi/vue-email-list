var app = new Vue({
  el: '#app',
  data: {
    randomMail:[]
  },
  mounted() {
    for (let i = 0; i < 10; i++) {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((result) => {
        this.randomMail.push(result.data.response);
        console.log(this.randomMail);


      });
    }


  }
});
