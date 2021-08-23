const participantes = {
    data() {
      return {
        participantes:[]
      }
    },
    async created() {
    // GET request using fetch with async/await
    const response = await fetch("data/participantes.json");
    const data = await response.json();
    this.participantes = data.slice(-8);
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
        },
        showAll: async function(){
          const response = await fetch("data/participantes.json");
          const data = await response.json();
          this.participantes = data;
        },

        showLess: async function(){
          this.participantes = this.participantes.slice(-8);
        }


    }
  }
Vue.createApp(participantes).mount('#participantes')

const countDown = {
	data() {
		return {
      endDate:new Date(2021, 11, 9),
      days: 0,
      hours:0,
      mins:0,
      segs:0

		};
	},
	created(){
		setInterval(this.getDays, 1000);
    setInterval(this.getHours, 1000);
    setInterval(this.getMins, 1000);
    setInterval(this.getSegs, 1000);
	},
	methods: {
    getDays: function () {  
      this.days = parseInt((this.endDate - new Date()) / (1000 * 60 * 60 * 24))
    },
    getHours: function (){
      this.hours =parseInt((Math.abs(this.endDate - new Date()) / (1000 * 60 * 60)) % 24);
    },
    getMins: function (){
      this.mins =parseInt(
        (Math.abs(this.endDate.getTime() - new Date().getTime()) / (1000 * 60)) % 60
      );
    },
    getSegs: function (){
      this.segs = parseInt(
        (Math.abs(this.endDate.getTime() - new Date().getTime()) / 1000) % 60
      )
    }
  }
}
Vue.createApp(countDown).mount('#date')