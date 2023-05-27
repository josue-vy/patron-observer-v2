class MarketingSubject {
    constructor() {
      this.observers = [];
      this.marketingData = {};
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    updateMarketingData(data) {
      this.marketingData = data;
      this.notifyObservers();
    }
  
    notifyObservers() {
      this.observers.forEach((observer) => observer.update(this.marketingData));
    }
  }
  
  module.exports = MarketingSubject;