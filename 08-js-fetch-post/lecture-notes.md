## Fetch POST request



***

FULL URL for tonight's fetch is http://localhost:3000/characters
<br>
http://localhost:3000/characters => will return all characters that our server knows about



Fetch POST contains two args: url and config object: <br>
&emsp; - config object is made up of three parts (method, headers and body)
~~~
fetch('http://randomurl.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
    // body data type must match "Content-Type" header
  });
  .then(response => response.json()); 
  // parses JSON response into native JavaScript objects
} .then(data => console.log(data));
~~~
*NOTE: We should always console.log our returned data to make sure the fetch was successful before moving forward.*

