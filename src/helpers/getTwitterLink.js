function getTwitterSearchLink(path) {
  const siteURL = 'http://mostlyindie.com'
  const twitterSearchURL = 'https://mobile.twitter.com/search?q='

  return twitterSearchURL + encodeURI(siteURL + path)
}

export default getTwitterSearchLink
