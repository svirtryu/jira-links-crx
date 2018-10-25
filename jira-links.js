const issueTitles = document.getElementsByClassName('js-issue-title') || [];
const issuePattern = /[a-zA-Z]{2,5}-[0-9]{1,5}/;

for(let titleNode of issueTitles) {
  const textContent = titleNode.textContent;

  if(textContent.match(issuePattern)) {
    console.log('Found match: ', textContent);
  }
}
