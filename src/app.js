var UI = require('ui');
var ajax = require('ajax');

var card = new UI.Card({
  title: 'Today\'s Focus',
  /*icon: 'images/menu_icon.png',*/
  subtitle: 'Fetching your focus...',
});

card.show();

var device_id = 'asdf';
var URL = "http://help-me-help-you.herokuapp.com/goals/1?device_id=" + device_id;

//Request focus from API
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched today's goal!");

    // Extract data
    if (data) {
      var statement = data.statement;
      // Show to user
      card.title('Today, I am going to');
      card.subtitle('');
      card.body(statement);
    } else {
      card.title('Set your focus!');
      card.subtitle('');
      card.body('Commit on your phone');
    }
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
