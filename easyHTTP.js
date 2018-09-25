function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//make http get request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);
  that = this;
  this.http.onload = function() {
    if (that.http.status === 200) {
      // console.log(that.http.responseText);
      //return that.http.responseText;
      // this is slower than the usual send response, so we are showing undefined as we are getting the result before is changed to the actual result
      // we just need to do a callback
      callback(null, that.http.responseText);
    } else {
      callback(`HTTP ERROR: ${that.http.status}`);
    }
  };

  this.http.send();
};

//make an http POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  that = this;
  this.http.onload = function() {
    callback(that.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//delete
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);
  let that = this;
  this.http.onload = function() {
    if (that.http.status === 200) {
      callback(null, "Post Deleted! C:  ");
    } else {
      callback(`HTTP Error ${that.http.status}`);
    }
  };

  this.http.send(JSON.stringify(data));
};
