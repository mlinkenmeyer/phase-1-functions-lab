const hqAddressBlock = 42;

function distanceFromHqInBlocks(companyAddressBlock) {
  const blocksFromHq = Math.abs(hqAddressBlock - companyAddressBlock);
  return blocksFromHq;
}

function distanceFromHqInFeet(blocksFromHq) {
  const blocksInFeet = distanceFromHqInBlocks(blocksFromHq);
  const feetFromHq = blocksInFeet * 264;
  return feetFromHq;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(start - destination);
  const feetTravelled = blocksTravelled * 264;
  return feetTravelled;

  //returns the number of feet traveled
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);
  let farePrice;

  if (feetTravelled < 400) {
    farePrice = 0;
  } else if (feetTravelled < 2000) {
    farePrice = 0.02 * (feetTravelled - 400);
  } else if (feetTravelled > 2000) {
    farePrice = 25;
  } else {
    farePrice = "cannot travel that far";
  }

  return farePrice;

  //returns the fare for the customer
}

function calculatesFarePrice(start, destination) {
  const feetTravelled = distanceTravelledInFeet(start, destination);
  let farePrice;

  if (feetTravelled < 400) {
    farePrice = 0;
  } else if (feetTravelled < 2000) {
    farePrice = 0.02 * (feetTravelled - 400);
  } else if (feetTravelled < 2500) {
    farePrice = 25;
  } else {
    farePrice = "cannot travel that far";
  }

  return farePrice;

  //returns the fare for the customer
}
