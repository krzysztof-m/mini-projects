//http://stackoverflow.com/questions/5643767/jquery-ui-autocomplete-width-not-set-correctly
jQuery.ui.autocomplete.prototype._resizeMenu = function () {
  var ul = this.menu.element;
  ul.outerWidth(this.element.outerWidth());
}

$(document).ready(function() {
  var who = [
    'Firefighter',
    'Web Developer',
    'Programmer',
    'Astronaut'
  ],
  country = [
    'United States',
    'UK',
    'Poland',
    'Germany',
    'Australia'
  ],
  hobby = [
    'play football',
    'read books',
    'play video games'
  ];
  function updateWidth($field) {
    var val = $field.val();
    $field.width((val.length * 20 + 10) + 'px');
  }
  function addInputEvents($field) {
    $field.on('input',function() {
      var $inpt = $(this);
      updateWidth($inpt);
    }).on('autocompletechange',function() {
      var $inpt = $(this);
      updateWidth($inpt);
    }).on('autocompleteclose',function() {
      var $inpt = $(this);
      updateWidth($inpt);
    });
  }
  var $who = $( "#who" ),
      $country = $( "#country" ),
      $hobby = $( "#hobby" );
  $who.autocomplete({
    source: who
  });
  addInputEvents($who);
  
  $country.autocomplete({
    source: country
  });
  addInputEvents($country);
  
  $hobby.autocomplete({
    source: hobby
  });
  addInputEvents($hobby);
});