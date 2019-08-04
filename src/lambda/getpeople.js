exports.handler = function(event, context, callback) {
  // const { query } = JSON.parse(event.body);
  const people = [
    {
      fullName: 'Richard Nixon',
    },
    {
      fullName: 'Henry Kissinger',
    },
    {
      fullName: 'Robert McNamara',
    },
  ]
  callback(null, {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    },
    body: JSON.stringify(people),
  })
}
