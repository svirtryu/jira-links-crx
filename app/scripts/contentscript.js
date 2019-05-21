const issueTitles = document.getElementsByClassName('js-issue-title') || [];
const issuePattern = /([a-z]{2,}-\d+)(.*)/i;

const updateNodes = () => {
  for(let titleNode of issueTitles) {
    const textContent = titleNode.textContent;

    const matches = textContent.match(issuePattern);

    if(matches) {
      titleNode.textContent = '';

      const ticketNumber = matches[1];
      const restOfText = matches[2];

      const restOfTextNode = document.createTextNode(restOfText);

      let jiraLinkNode = document.createElement('a');
      jiraLinkNode.href = `https://virtru.atlassian.net/browse/${ticketNumber}`;
      const ticketNumberNode = document.createTextNode(ticketNumber);
      jiraLinkNode.appendChild(ticketNumberNode);

      titleNode.appendChild(jiraLinkNode);
      titleNode.appendChild(restOfTextNode);
    }
  }
};

setInterval(updateNodes, 1000);
