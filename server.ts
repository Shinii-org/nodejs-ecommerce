import { app } from "./src/app";
const PORT = process.env.PORT || 3055
const server = app.listen(PORT, () => {
  console.log(`WSL start with ${PORT}`)
})

process.on('SIGTERM', () => {


})
process.on('SIGINT', () => {
  server.close(() => console.log(`Exit Server Express`))
})
