function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url) {
  this.http.open("GET", url, true);

  this.http.onload = function() {
    if ((this.http.status = 200)) console.log(this.responseText);
  };
};
