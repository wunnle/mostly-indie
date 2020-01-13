function getTwitterSearchLink(path) {
  const siteURL = 'https://mostlyindie.com'
  const twitterSearchURL = 'https://mobile.twitter.com/search?q='

  return twitterSearchURL + encodeURI(siteURL + path)
}

export default getTwitterSearchLink
