const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/reduced-questions-yes-or-no', function (req, res) {

  let questionsYesorNo = req.session.data['pc-questions']

  if (questionsYesorNo == 'Yes') {
    res.redirect('/task-list-reduced/sex')
  } else {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/dashboard/new-dashboard/claimant/all-claims')
  }

})

router.post('/disability-answer-full', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/disability/disability-yes')
  } else {
    res.redirect('/religion-or-belief')
  }

})

router.post('/disability-answer-remainder', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/task-list-remainder/disability/disability-yes')
  } else {
    res.redirect('/task-list-remainder/religion-or-belief')
  }

})
router.post('/disability-details-full', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/disability/disability-yes-detail')
  }
  else {
    res.redirect('/religion-or-belief')
  }

})
router.post('/disability-details-remainder', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/task-list-remainder/disability/disability-yes-detail')
  }
  else {
    res.redirect('/task-list-remainder/religion-or-belief')
  }

})

router.post('/ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('pregnancy')
  } else if (ethnicGroup == "White") {
    res.redirect('ethnic-group/ethnicity-white')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('ethnic-group/ethnicity-mixed')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('ethnic-group/ethnicity-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('ethnic-group/ethnicity-black')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('ethnic-group/ethnicity-another')
  } else {
    res.redirect('pregnancy.html')
  }

})

router.post('/ethnicity-answer-reduced', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/dashboard/new-dashboard/claimant/all-claims')
  } else if (ethnicGroup == "White") {
    res.redirect('ethnic-group/ethnicity-white')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('ethnic-group/ethnicity-mixed')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('ethnic-group/ethnicity-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('ethnic-group/ethnicity-black')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('ethnic-group/ethnicity-another')
  } else {
    res.redirect('https://cmc-prototype-pc.herokuapp.com/prototypes/prototype-may-2019/dashboard/new-dashboard/claimant/all-claims')
  }

})

module.exports = router
