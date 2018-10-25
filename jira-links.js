const issueTitles = document.getElementsByClassName('js-issue-title') || [];
const issuePattern = /([a-zA-Z]{2,5}-[0-9]{1,5})(.+)/;

for(let titleNode of issueTitles) {
  const textContent = titleNode.textContent;

  const matches = textContent.match(issuePattern);

  if(matches) {
    titleNode.textContent = '';

    const ticketNumber = matches[1];
    const restOfText = matches[2];

    const ticketNumberNode = document.createTextNode(matches[1]);
    const restOfTextNode = document.createTextNode(matches[2]);

    let jiraLinkNode = document.createElement('a');
    jiraLinkNode.href = `https://virtru.atlassian.net/browse/${ticketNumber}`;
    jiraLinkNode.appendChild(ticketNumberNode);

    titleNode.appendChild(jiraLinkNode);
    titleNode.appendChild(restOfTextNode);
  }
}
