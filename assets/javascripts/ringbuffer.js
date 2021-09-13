class Ring extends Array{
  constructor(limit) {
    super(length);
    this.limit = limit;
    this.popped = '';
    this.count = 0;
  }

  atLimit() {
    return (this.length == this.limit) ? true : false;
  }

  addTo(value) {
    if (this.count >= this.limit) {
      this.count = 0;
    }
    this.popped = this[this.count];
    this[this.count] = value;
    this.count++;
  }

}

let ring1 = new Ring(5);
var x = 0;

let inputfield = document.getElementById('user_val');
let collection = document.getElementById('collection');
let memorial = document.getElementById('in_memorial');
let goodbyes = document.getElementById('goodbyes');

addToRing = () => {
  var value = inputfield.value;
  ring1.addTo(value);
  inputfield.value = "";
  inputfield.focus();
  
  collection.innerHTML = "";

  for (var i of ring1) {
    $(collection).append('<li>' + i + '</li>');
  }

  if (ring1.popped != undefined) {
    $(memorial).removeClass("invisible");
    $(goodbyes).append(ring1.popped + ", ");
  }
}

inputfield.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});