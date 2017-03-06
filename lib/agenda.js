const Agenda = require('agenda');
const config = require('config');


const agenda = new Agenda({db: {address: config.get('mongoUrl')}});
require('./jobs/flightastic_search')(agenda);
agenda.on('ready', ()=>{
    agenda.start();
});

module.exports = agenda;