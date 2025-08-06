export default async function getJolpicaDrivers(year: number) {
    let data = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/drivers/`);
    let drivers = await data.json();

    console.log(drivers)

    return drivers;
}