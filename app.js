
const MarketingSubject = require('./model/marketingModel');
const MarketingView = require('./view/marketingView');

// Crear instancia del modelo
const marketingSubject = new MarketingSubject();

// Crear instancias de observadores
const observer1 = new MarketingView('Observer 1');
const observer2 = new MarketingView('Observer 2');


// Agregar los observadores al sujeto de MarketingSubject
marketingSubject.addObserver(observer1);
marketingSubject.addObserver(observer2);


// Actualizar los datos de marketing en el sujeto de MarketingSubject
marketingSubject.updateMarketingData({ campania: 'Summer Sale', presupuesto: 5000 });

// Remover observer2 de la lista de observadores
marketingSubject.removeObserver(observer2);


// Actualizar los datos de marketing nuevamente
marketingSubject.updateMarketingData({ campaign: 'Winter Sale', presupuesto: 8000 });