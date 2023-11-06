propertyId = '406527308';
const {BetaAnalyticsDataClient} = require('@google-analytics/data');

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();


const express = require('express'); 
const app = express(); 
  
app.get('/' , runReport)
   // 200 status code means OK 
  // res.status().send(200);  
  // res.send(row.dimensionValues[0])
   



  async function runReport(req, res) {
    const dataToStore = [];
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`, // Add backticks to enclose the property value
      dateRanges: [
        {
          startDate: '2023-10-25',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'deviceCategory',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
      ],
    });
  
    console.log('working ba to hahah:');
    response.rows.forEach(row => {
      const dimensionValue = row.dimensionValues[0];
      const metricValue = row.metricValues[0];
  
      dataToStore.push({ dimension: dimensionValue, metric: metricValue });
  
      console.log(dimensionValue, metricValue);
    });
  
    // Now, dataToStore contains all the data from the loop
    res.send({ data: dataToStore })
  }
  
 
  
// Server setup 
app.listen(8081 , ()=>{ 
    console.log("server running -hello"); 
});


/* == testing ->working on port 8080
const express = require('express');
const app = express();
const port = 8080; // Change this to the desired port number

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/