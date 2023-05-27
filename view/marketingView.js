// marketingView.js
class MarketingView {
    constructor(name) {
      this.name = name;
      this.marketingData = {};
    }
  
    update(data) {
      this.marketingData = data;
      this.render();
    }
  
    render() {
      console.log(`[${this.name}] Actualización de datos de marketing:`);
      console.log(this.marketingData);
      console.log('----------------------------------------');
    }
  }
  
  module.exports = MarketingView;