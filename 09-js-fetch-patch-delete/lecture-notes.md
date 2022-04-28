## Fetch - PATCH, DELETE requests


non-GET fetch contains two args: url and config object: <br>
&emsp; - config object is made up of three parts (method, headers and body)

NOTE about 'PATCH' => 'PUT' is similar, however it will overwrite the whole object. 'PATCH' only updates the key/value pairs as passed into the body. 
NOTE(a) if the key does not exist in the object, the key/value pair will be added to the object during 'PATCH'.

~~~
fetch(`http://randomurl.com/${id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json'
      'Accept': 'application/json',
    },
    body: JSON.stringify(data) 
    // body data type must match "Content-Type" header
  });
  .then(response => response.json()); 
  // parses JSON response into native JavaScript objects
} .then(data => console.log(data));
~~~

Delete is easy! We do not pass a body so we do not need headers. If DELETE goes through successfully you do not need to check what is returned because DELETE returns an empty object => {}
~~~
fetch(`http://randomurl.com/${id}`, {method: 'DELETE'});
~~~

*We should always console.log our returned data to make sure the fetch was successful before moving forward.*

