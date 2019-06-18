import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
      data:{
          countries: [],
          selectCountry: "",
          flag: null

      },

      mounted(){
        this.fetchCountries();
      },

      computed: {
        totalPopulation: function (){
          const total = this.countries.reduce( (runningTotal, country) => {
            return runningTotal + country.population;
          }, 0)
          return total
        },
        filterCountry: function(){
          const result = this.countries.filter( (country) => {
            return country.name === this.selectCountry;
          })
          return result
        },
        // filterFlag: function(){
        //   const result = this.countries.filter( (country) => {
        //     return country.name === this.selectCountry;
        //   })
        //   return result[0].flag
        // }
      },

      methods: {
        fetchCountries: function(){
          const request = fetch("https://restcountries.eu/rest/v2/all")
          .then(response=> response.json())
          .then(data=> this.countries = data)
        }
      }
  })
})
