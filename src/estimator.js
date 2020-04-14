const covid19ImpactEstimator = ({data}) => {

    const input = data;

             // challenge 1
    let currentlyInfected = data.reportedCases * 10;
    let severeCurrentlyInfected = data.reportedCases * 50;

    let infectionsByRequestedTime = currentlyInfected * 512;
    let infectionsByRequestedTimeSevereImpact = severeCurrentlyInfected * 512;

            // challenge 2
    let severeCasesByRequestedTime = (infectionsByRequestedTime/100) * 15;
    let hospitalBedsByRequestedTime = (totalHospitalBeds/100) * 35;

        // challenge 3
    let casesForICUByRequestedTime = (infectionsByRequestedTime/100) * 5;
    let casesForVentilatorsByRequestedTime = (infectionsByRequestedTime/100) * 2;

    let dollarsInFlight = (infectionsByRequestedTime * 0.65 * 1.5) / 30;

    return estimator({
        data,
        impact: {},
        severeImpact: {}
    });
};

export default covid19ImpactEstimator;
