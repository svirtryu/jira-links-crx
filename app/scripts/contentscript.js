const issueTitles = document.getElementsByClassName('js-issue-title') || [];
const issuePattern = /([a-z]{2,}-\d+)/gi;

const updateNodes = () => {
  for (let titleNode of issueTitles) {
    titleNode.innerHTML = titleNode.textContent.replace(issuePattern, (ticketNumber) => (
      `<a href="https://virtru.atlassian.net/browse/${ticketNumber}">
         ${ticketNumber}
       </a>`
    ));
  }
};

updateNodes();
setInterval(updateNodes, 1000);
