const request = require('request-promise');

module.exports = ({ jiraUrl, project, rapidViewId, options }) => {
  const URL = `${jiraUrl}/rest/greenhopper/1.0/xboard/work/allData.json?rapidViewId=${rapidViewId}&selectedProjectKey=${project}`;

  return request({ ...options, uri: URL, json: true });
};