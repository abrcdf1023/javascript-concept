export default function logBlock(name, cb) {
  console.log(`-----------${name} Start-----------`)
  console.log("")
  cb()
  console.log("")
  console.log(`-----------${name} End-----------`)
  console.log("")
}