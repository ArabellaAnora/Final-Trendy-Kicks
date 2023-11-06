const axios = require('axios');

propertyId = '406527308';
const {BetaAnalyticsDataClient} = require('@google-analytics/data');

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.
async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
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
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });
}

runReport();
