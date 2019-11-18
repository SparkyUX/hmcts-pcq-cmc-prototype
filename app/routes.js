const express = require('express')
const router = express.Router()
const url = require('url')

// Add your routes here - above the module.exports line

//JHS 301019 get the usertype parameter from the url query string

var urlQueryUserType

router.get('/introduction', function(req, res) {
// JHS 081119 if query string userType exists and a secondary URL exists then set the userType   
  if (req.query.userType !== undefined) {
    if (req.app.locals.serviceUserTypeB !== null) {
      urlQueryUserType = req.query.userType
      console.log('req.query.userType defined ' + req.query.userType)
      res.render('introduction')
    }
  }
// JHS 081119 if query string userType doesn't exist then use the primary URL
  else {
    urlQueryUserType = req.app.locals.serviceUserTypeA
    res.render('introduction')
  }

// JHS 081119 set the returnUrl based on the userType
  req.app.locals.serviceReturnUrl = chooseUrl()

  function chooseUrl() {

    if (urlQueryUserType == req.app.locals.serviceUserTypeB) {

      return req.app.locals.serviceReturnUrlB
    }
    else {

      return req.app.locals.serviceReturnUrlA
    }

  }  
})

// JHS 131019 use the url query userType passed from the service to determeine which return page of the originating service should be called
// If the url query value = user type B then use return url B otherwise use return url A as defined in heroku config variables or .env-variables or config.js


//
// Version 1
//

// introduction

router.post('/introduction-next-q', function (req, res) {

// load the first question
    res.redirect('./' + questionOrder[0])

})


// age

router.post('/age-next-q', function (req, res) {

  var nextQ
  var thisQ = 'age'
    console.log ('thisQ ' + thisQ + ' next q ' + nextQ)
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      console.log('questionOrder nextQ' + questionOrder[i])
      nextQ = questionOrder[i + 1]
      break
    }  
  }
      console.log ('thisQ ' + thisQ + ' next q ' + nextQ)
    res.redirect('./' + nextQ)

})


// first language answer

router.post('/language-next-q', function (req, res) {

  let language = req.session.data['english-language']
  var nextQ
  var thisQ = 'language'

  if (language == 'other') {
    res.redirect('/english-level')
  }
  else {
    for (var i = 0; i < questionOrder.length; i++) {
      if (questionOrder[i] == thisQ) {
        nextQ = questionOrder[i + 1]
        break
      }  
    }
    console.log ('thisQ ' + thisQ + ' next q ' + nextQ)
    res.redirect('./' + nextQ)
  }
})

// english level 
// set thisQ to language so that the next page is next in the array

router.post('/english-level-next-q', function (req, res) {

  var nextQ
  var thisQ = 'language'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
      console.log ('thisQ ' + thisQ + ' next q ' + nextQ)

    res.redirect('./' + nextQ) // going up a level to the nextQ

})

// sex

router.post('/sex-next-q', function (req, res) {

  var nextQ
  var thisQ = 'sex'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
      console.log ('thisQ ' + thisQ + ' next q ' + nextQ)

    res.redirect('./' + nextQ) 

})

// gender

router.post('/gender-next-q', function (req, res) {

  var nextQ
  var thisQ = 'gender'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
      console.log ('thisQ ' + thisQ + ' next q ' + nextQ)

    res.redirect('./' + nextQ)

})

// sexual orientation

router.post('/sexual-orientation-next-q', function (req, res) {

  var nextQ
  var thisQ = 'sexual-orientation'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
      console.log ('thisQ ' + thisQ + ' next q ' + nextQ)

    res.redirect('./' + nextQ)

})

// marriage

router.post('/marriage-next-q', function (req, res) {

  var nextQ
  var thisQ = 'marriage'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
    res.redirect('./' + nextQ)

  })

// ethnicity answer

router.post('/ethnicity-next-q', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
    console.log ('ethnic group' + ethnicGroup)

  if (ethnicGroup == "white") {
    res.redirect('/ethnic-group/ethnicity-white')
  } else if (ethnicGroup == "mixed-or-multiple-ethnic-groups") {
    res.redirect('/ethnic-group/ethnicity-mixed')
  } else if (ethnicGroup == "asian-or-asian-british") {
    res.redirect('/ethnic-group/ethnicity-asian')
  } else if (ethnicGroup == "black-african-black-british-or-caribbean") {
    res.redirect('/ethnic-group/ethnicity-black')
  } else if (ethnicGroup == "another-ethnic-group") {
    res.redirect('/ethnic-group/ethnicity-another')
  } else {
    var nextQ
    var thisQ = 'ethnicity'
    for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
    res.redirect('/' + nextQ)
  }

})

// ethicity sub pages

router.post('/ethnicity-type-next-q', function (req, res) {

  var nextQ
  var thisQ = 'ethnicity'
    console.log ('thisQ ' + thisQ + ' next q ' + nextQ)
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
    res.redirect('./' + nextQ)

  })

// religion

router.post('/religion-next-q', function (req, res) {

  var nextQ
  var thisQ = 'religion'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
    res.redirect('./' + nextQ)

  })


// disability answer

router.post('/disability-next-q', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'yes') {
    res.redirect('/disability/disability-yes')
  } else {
    var nextQ
    var thisQ = 'disability'
    for (var i = 0; i < questionOrder.length; i++) {
       if (questionOrder[i] == thisQ) {
        nextQ = questionOrder[i + 1]
        break
      }  
    }
    res.redirect('./' + nextQ)
  }

})

// disability yes


router.post('/disability-yes-next-q', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'yes-limited-a-little' || disabilityYes == 'yes-limited-a-lot') {
    res.redirect('/disability/disability-yes-detail')
  }
  else {
     var nextQ
  var thisQ = 'disability'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
 
    res.redirect('./' + nextQ)
  }

})

// disability details

router.post('/disability-details-next-q', function (req, res) {

  var nextQ
  var thisQ = 'disability'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }

    res.redirect('./' + nextQ)

})

// pregnancy

router.post('/pregnancy-next-q', function (req, res) {

  var nextQ
  var thisQ = 'pregnancy'
  for (var i = 0; i < questionOrder.length; i++) {
     if (questionOrder[i] == thisQ) {
      nextQ = questionOrder[i + 1]
      break
    }  
  }
    res.redirect('./' + nextQ)

})
module.exports = router
