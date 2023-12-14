async function getData() {
  const response = await fetch("data.json")
  return response.json()
}

async function putDataIntoFields() {
  const data = await getData()
  data.forEach(item => {
    const className = item.category.toLowerCase()
    const categoryIcon = document.querySelector(`.${className} .label-icon`)
    const categoryTitle = document.querySelector(`.${className} .label-title`)
    const categoryScore = document.querySelector(`.${className} .label-score`)

    categoryIcon.style.backgroundImage = `url(${item.icon})`
    categoryTitle.textContent = item.category
    categoryScore.textContent = item.score
  })
}

putDataIntoFields()