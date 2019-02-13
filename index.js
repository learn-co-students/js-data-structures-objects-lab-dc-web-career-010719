// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  const newdriver = Object.assign({}, driver);
  newdriver[key] =value
  return newdriver

  // const h = Object.assign({}, driver, { [key]: value });
  //
  // return h
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver

  // return Object.assign({}, driver, { [key]: value });


}
function deleteFromDriverByKey(driver, key) {
  const newdriver = {driver}
  delete newdriver[key]
  return newdriver

}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver

}
