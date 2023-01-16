function findMatching(drivers, list) {
    return drivers.filter(
        (driver) => driver.toLowerCase() === list.toLowerCase()
    );
}

function fuzzyMatch(drivers, list) {
    return drivers.filter(
        (driver) => driver.toLowerCase().indexOf(list.toLowerCase()) === 0
    )
}
  
function matchName(drivers, list) {
    return drivers.filter((driver) => driver.name === list)
}

