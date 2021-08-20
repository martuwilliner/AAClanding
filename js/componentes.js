const participantes = {
    data() {
      return {
        participantes:[]
      }
    },
    async created() {
    // GET request using fetch with async/await
    const response = await fetch("../data/participantes.json");
    const data = await response.json();
    this.participantes = data;
    },
    methods: {
        showPop(pop) {
          let selector ="#participante-"+pop;
          let target = document.querySelector(selector);
          if(!target.classList.contains('active')){
              target.classList.add('active');
          }else{
            target.classList.remove("active");
          }
        }
    }
  }
Vue.createApp(participantes).mount('#participantes')

const countDown = {
  data() {
    return {
      date:'',
      end: '',
    }
  },
  created() {
    this.end = new Date(2021, 11, 9);
  },
  methods:{


    diferences: () => {
        const days = parseInt((this.end - this.date) / (1000 * 60 * 60 * 24));
        const hours = parseInt((Math.abs(this.end - this.date) / (1000 * 60 * 60)) % 24);
        const minutes = parseInt(
          (Math.abs(this.end.getTime() - this.date.getTime()) / (1000 * 60)) % 60
        );
        const seconds = parseInt(
          (Math.abs(this.end.getTime() - this.date.getTime()) / 1000) % 60
        );
        const count = [days,hours,minutes,seconds]
        console.clear();
        console.log("time")
        console.log(count)
        return count
    }
  }
  
}
Vue.createApp(countDown).mount('#date')