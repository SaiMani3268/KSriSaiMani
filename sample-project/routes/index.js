// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */

const profiles = {
  // SSM: {
  //   name: 'Sri Sai Mani',
  //   company: 'ssm',
  //   languages: ['javascript', 'java', 'python']
  // },
  sjobs: {
    name: 'steve jobs',
    image: '/images/sjobs.jpg',
    company: 'apple',
    languages: ['objective-c', 'swift', 'c++']
  },
  bgates: {
    name: 'bill gates',
    image: '/images/bgates.jpg',
    company: 'microsoft',
    languages: ['c', 'java', 'c#']
  }
}

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

/*  This route render json data */
router.get('/json', (req, res) => {
    res.json({
    confirmation: 'success',
    app: process.env.TURBO_APP_ID,
    data: 'this is a sample json route.'
  })
})

/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
   res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
// router.get('/redirect', (req, res) => {
//   res.redirect('https://www.turbo360.co/landing')
// })

router.get('/profiles', (req, res) => {
  const keys = Object.keys(profiles)
  const list = []
  keys.forEach(key => {
    list.push(profiles[key])
  })

  const data = {
    profiles: list,
    timestamp: req.timestamp
  }

  res.render('profiles', data)
})

router.post('/createprofile', (req, res) => {
  const body = req.body
  body['languages'] = req.body.languages.split(', ')

  profiles[body.username] = body
  res.json({
    confirmation: 'success',
    data: profiles[body.username]
  })
})

router.post('/addprofile', (req, res) => {
  const body = req.body
  body['languages'] = req.body.languages.split(', ')
  
  profiles[body.username] = body
  res.redirect('/profile/'+body.username)
})

router.get('/query', (req, res) => {
  const name = req.query.name
  const occupation = req.query.occupation
  const data = {
    name: name,
    occupation: occupation
  }

  res.render('profile', data)
})

router.get('/:path', (req, res) => {
  const path = req.params.path
  res.json({
    data: path
  })
})

router.get('/:profile/:username', (req, res) => {
  const profile = req.params.profile
  const username = req.params.username
  const currentprofile = profiles[username]

  if (currentprofile == null){
    res.json({
      configuration: 'fail',
      message: 'Profile ' + username +' not found'
    })
    return
  }
  
  currentprofile.timestamp = req.timestamp
  res.render('profile', currentprofile)
})

module.exports = router