//lets instansiate the library
const http = new easyHTTP();
//get posts
url = "https://jsonplaceholder.typicode.com/posts";

//const response = http.get("https://jsonplaceholder.typicode.com/posts");
//console.log(response);
/*
http.get(url, callback);
*/
/*
http.get(url, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
}); 
*/

function callback(error, result) {
  if (error) {
    console.log(result);
  } else {
    console.log(error);
  }
}

const data = {
  title: "this is a nice post",
  body: "body"
};
/*
http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  error,
  result
) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
*/
/*
http.put("https://jsonplaceholder.typicode.com/posts/5", data, function(
  error,
  result
) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
*/

http.delete("https://jsonplaceholder.typicode.com/posts/3", function(
  error,
  result
) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
