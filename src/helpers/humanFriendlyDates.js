function timeSince(dateString) {
  const date = new Date(dateString)

  var seconds = Math.floor((new Date() - date) / 1000)

  var interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return dateString
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return dateString
  }
  interval = Math.floor(seconds / 86400)

  if (interval > 1 && interval < 2) {
    return 'yesterday'
  }
  if (interval > 1) {
    return interval + ' days ago'
  }
  return 'today'
}

export default timeSince
