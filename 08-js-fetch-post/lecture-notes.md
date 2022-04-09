## Codebase Review and Intro to Fetch POST

***

GET fetch only requires url argument, but non-GET fetch contains two args: url and config object: <br>
&emsp; - config object is made up of three parts (method, headers and body)
~~~
fetch('http://randomurl.com', {
    method: 'POST',
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

*NOTE: We should always console.log our returned data to make sure the fetch was successful before moving forward.*

