const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/claimant-reduced-qs-yes-or-no', function (req, res) {

  let questionsYesorNo = req.session.data['pc-questions']

  if (questionsYesorNo == 'Yes') {
    res.redirect('/sex?defendant=false&')
  } else {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/dashboard/new-dashboard/claimant/all-claims')
  }

})

router.post('/defendant-reduced-qs-yes-or-no', function (req, res) {

  let questionsYesorNo = req.session.data['pc-questions']

  if (questionsYesorNo == 'Yes') {
    res.redirect('/sex?defendant=true&')
  } else {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/dashboard/new-dashboard/defendant/all-claims')
  }

})
router.post('/claimant-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/disability/disability-yes?defendant=false&')
  } else {
    res.redirect('/pregnancy?defendant=false&')
  }

})
router.post('/defendant-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/disability/disability-yes?defendant=true&')
  } else {
    res.redirect('/pregnancy?defendant=true&')
  }

})

router.post('/claimant-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/disability/disability-yes-detail?defendant=false&')
  }
  else {
    res.redirect('/pregnancy?defendant=false&')
  }

})

router.post('/defendant-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/disability/disability-yes-detail?defendant=true&')
  }
  else {
    res.redirect('/pregnancy?defendant=true&')
  }

})

router.post('/defendant-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('pregnancy?defendant=true&')
  } else if (ethnicGroup == "White") {
    res.redirect('ethnic-group/ethnicity-white?defendant=true&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('ethnic-group/ethnicity-mixed?defendant=true&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('ethnic-group/ethnicity-asian?defendant=true&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('ethnic-group/ethnicity-black?defendant=true&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('ethnic-group/ethnicity-another?defendant=true&')
  } else {
    res.redirect('pregnancy?defendant=true&')
  }

})

router.post('/claimant-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('pregnancy?defendant=false&')
  } else if (ethnicGroup == "White") {
    res.redirect('ethnic-group/ethnicity-white?defendant=false&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('ethnic-group/ethnicity-mixed?defendant=false&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('ethnic-group/ethnicity-asian?defendant=false&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('ethnic-group/ethnicity-black?defendant=false&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('ethnic-group/ethnicity-another?defendant=false&')
  } else {
    res.redirect('pregnancy?defendant=false&')
  }

})
router.post('/defendant-ethnicity-answer-reduced', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/defendant/task-list?confirm_details=complete&')
  } else if (ethnicGroup == "White") {
    res.redirect('ethnic-group/ethnicity-white?defendant=true&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('ethnic-group/ethnicity-mixed?defendant=true&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('ethnic-group/ethnicity-asian?defendant=true&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('ethnic-group/ethnicity-black?defendant=true&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('ethnic-group/ethnicity-another?defendant=true&')
  } else {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/defendant/task-list?confirm_details=complete&')
  }

})
router.post('/claimant-ethnicity-answer-reduced', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
if (ethnicGroup == "Prefer not to say") {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/claimant/task-list?your_details=complete&')
  } else if (ethnicGroup == "White") {
    res.redirect('ethnic-group/ethnicity-white?defendant=false&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('ethnic-group/ethnicity-mixed?defendant=false&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('ethnic-group/ethnicity-asian?defendant=false&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('ethnic-group/ethnicity-black?defendant=fasle')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('ethnic-group/ethnicity-another?defendant=false&')
  } else {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/claimant/task-list?your_details=complete&')
  }

})

//
router.post('/defendant-english-first-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/english-level?defendant=true&')
  }
  else {
    res.redirect('/religion?defendant=true&')
  }
})

router.post('/claimant-english-first-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/english-level?defendant=false&')
  }
  else {
    res.redirect('/religion?defendant=false&')
  }
})


module.exports = router
