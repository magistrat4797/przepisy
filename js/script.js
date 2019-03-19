
let table = window["simter-vue-table"].default;



var table1 = new Vue({
  el: "#ingredients-table",
  data() {
    return {
      columns: [
        { id: "key1", label: "Nazwa składnika"},
        { id: "key2", label: "Nazwa składnika głównego" },
        { id: "key3", label: "Nazwa składnia USDA (język angielski)" },
        { id: "key4", label: "Komentarz"},
        { id: "key5", label: "Ilość" },
        { id: "key6", label: "Jednostka" },
        { id: "key7", label: "Akceptacja SENIORA" }
      ],
      rows: [
        { key1: "Żurek nasza specjalność Winiary", key2: "Zupa", key3: "Zupa", key4:"<a>test</a>"},
        { key1: "Suszone grzyby", key2: "Zupa", key3: "Zupa" },
        { key1: "Woda", key2: "Zupa", key3: "Zupa" },
        { key1: "Sól i pieprz", key2: "Zupa", key3: "Zupa" },
        { key1: "Kiełbasa", key2: "Kiełbasa", key3: "Kiełbasa" },
        { key1: "Cebula", key2: "Kiełbasa", key3: "Kiełbasa" },
        { key1: "Olej", key2: "Kiełbasa", key3: "Kiełbasa" },
        { key1: "Musztarda francuska", key2: "Marynata do kiełbasy", key3: "Marynata do kiełbasy" },
        { key1: "Miód", key2: "Marynata do kiełbasy", key3: "Marynata do kiełbasy" },
        { key1: "Majeranek", key2: "Marynata do kiełbasy", key3: "Marynata do kiełbasy" },
        { key1: "Sół i pieprz", key2: "Marynata do kiełbasy", key3: "Marynata do kiełbasy" },
        { key1: "Jasne piwo", key2: "Marynata do kiełbasy", key3: "Marynata do kiełbasy" },
        { key1: "Kwaśne i twarde jabłka", key2: "Pieczone jabłka", key3: "Pieczone jabłka" },
        { key1: "Olej rzepakowy", key2: "Pieczone jabłka", key3: "Pieczone jabłka" },
        { key1: "Majeranek suszony", key2: "Pieczone jabłka", key3: "Pieczone jabłka" },
      ]
    }
  },
  components: {
    "st-table": table
  }
})

Vue.component('modal', {
  template: '#modal-template',
  props: ['show'],
  data: function () {
    return {
      title: '',
      body: ''
    };
  },
  methods: {
    close: function () {
      this.$emit('close');
      this.title = '';
      this.body = '';
    },
    savePost: function () {
      // Some save logic goes here...
      
      this.close();
    }
  },
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  }
});



new Vue({
  el: '#app',
  data: {
    disabled: 1,
    showModal: false,
    counterIngredientRow:1,
    counterStepRow:1,
    ingredientRows:[],
    StepRows:[]
  },
  methods: {

    addIngredientRow:function(){
      this.counterIngredientRow += 1;
      this.ingredientRows.push({
        id:this.counterIngredientRow,
          model: ""
      });
    },

      removeIngredientRow:function(index){
        var removeIngredient=this.ingredientRows;
        this.$dialog.confirm('Czy na pewno chcesz usunąć składnik?', {
          okText: 'Usuń',
          cancelText: 'Anuluj',
          backdropClose: true
        })
        .then(function(dialog) {
          console.log('Składnik został usunięty!');
            removeIngredient.splice(index,1);
          })
        .catch(function(dialog) {
          console.log('Składnik nie został usunięty!');
        });
      },

      saveIngredientRow:function(dialog){
        let text = this.$refs.ingredients;
        this.$dialog.alert(text, {
          okText: 'Zapisz',
          backdropClose: true
        }).then(function(dialog) {
          console.log(text);
        });
      },
    addStepRow:function(){
      this.counterStepRow += 1;
      this.StepRows.push({
        id:this.counterStepRow,
          model: ""
      });
    },
    removeStepRow:function(idx){
        var removeStep=this.StepRows;
      this.$dialog.confirm('Czy na pewno chcesz usunąć krok?', {
          okText: 'Usuń',
          cancelText: 'Anuluj',
          backdropClose: true
      })
        .then(function(dialog) {
          console.log('Krok został usunięty!');
            removeStep.splice(idx,1);
          })
        .catch(function(dialog) {
          console.log('Krok nie został usunięty!');
        });
      },
  }
}); 
