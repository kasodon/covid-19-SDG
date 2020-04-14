const covid19ImpactEstimator = (data) => {
    let impact.currentlyInfected = reportedCases * 10;
    let severeImpact.currentlyInfected = reportedCases * 50;

    let infectionsByRequestedTime = currentlyInfected * 512;
    let infectionsByRequestedTimeImpact = impact.currentlyInfected * 512;
    let infectionsByRequestedTimeSevereImpact = severeImpact.currentlyInfected * 512;

    let severeCasesByRequestedTime = (infectionsByRequestedTime/100) * 15;
    let hospitalBedsByRequestedTime = (totalHospitalBeds/100) * 35;
    let casesForICUByRequestedTime = (infectionsByRequestedTime/100) * 5;
    let casesForVentilatorsByRequestedTime = (infectionsByRequestedTime/100) * 2;

    let dollarsInFlight = (infectionsByRequestedTime * 0.65 * 1.5) / 30;
};

export default covid19ImpactEstimator;
