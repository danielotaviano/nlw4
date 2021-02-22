import express, { Router } from 'express'

const app = express()

const router = Router()
app.use(router)

router.get('/', (req, res) => {
  return res.json({ hello: 'word' })
})

router.post('/', (req, res) => {
  return res.json({ message: 'Os dados foram salvos com sucesso!' })
})

app.listen(3000, () =>
  console.log('Server is Running!'))
