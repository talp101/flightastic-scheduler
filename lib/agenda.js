const Agenda = require('agenda');

const agenda = new Agenda()

require('./lib/jobs/flightastic_search')(agenda);
agenda.start();

module.exports = agenda;