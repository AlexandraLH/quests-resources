// respond to requests on `/api/employees/1`, etc.
app.get('/api/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  // Send an SQL query to get ONE employee
  // In the query, ? will be replaced by employeeId's value
  connection.query('SELECT * FROM employee WHERE id = ?', [employeeId], (err, results) => {
    if (err) {
      // When you have more than two cases, it's better to RETURN
      // than to have too many if-else
      return res.status(500).send(`An error occurred: ${err.message}`);
    }
    // An empty results array means no employee has the requested id
    if (results.length === 0) {
      return res.status(404).send('Employee not found');
    }
    // If everything went well, we send the result of the SQL query as JSON
    return res.json(results[0]);
  });
});
