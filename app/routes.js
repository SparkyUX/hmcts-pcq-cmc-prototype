const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/CMC-Q-disability-yes')
  } else {
    res.redirect('/CMC-Q-religion-or-belief')
  }

})


router.post('/ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('/CMC-Q-pregnancy')
  } else if (ethnicGroup == "White") {
    res.redirect('/ethnic-group/CMC-Q-ethnicity-white')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/ethnic-group/CMC-Q-ethnicity-mixed')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/ethnic-group/CMC-Q-ethnicity-asian')
  } else if (ethnicGroup == "Black, African, Black British or Carribean") {
    res.redirect('/ethnic-group/CMC-Q-ethnicity-black')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/ethnic-group/CMC-Q-ethnicity-arab')
  } else {
    res.redirect('/CMC-Q-pregnancy.html')
  }

})


module.exports = router
