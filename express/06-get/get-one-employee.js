// respond to requests on `/api/employees/1`, etc.
app.get('/api/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  // Send an SQL query to get ONE employee
  // In the query, ? will be replaced by employeeId's value
  connection.query('SELECT * FROM employee WHERE id = ?', [employeeId], (err, results) => {
    if (err) {
      // If an error has occurred, then the client is informed of the error
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      // If everything went well, we send the result of the SQL query as JSON
      res.json(results[0]);
    }
  });
});
