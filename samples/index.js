const colors = require('/opt/nodejs/colors')

exports.handler = async (event) => {
  const chosenColor = colors.getRandomColor()

  const response = {
    statusCode: 200,
    body: JSON.stringify(
      `You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`
    ),
  }
  return response
}
