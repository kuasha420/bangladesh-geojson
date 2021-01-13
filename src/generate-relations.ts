import { divisions } from './bd-divisions.json';
import { districts } from './bd-districts.json';
import upazilas from './bd-upazilas.json';

// import { fetch } from 'cross-fetch';
import { writeFileSync } from 'fs';

// const api = 'http://barikoi.xyz/v1/api/{APIKEY}/sub_districts?q=';

// const delay = (time: number) => new Promise((res) => setTimeout(() => res({}), time));

// let apiHits = 0;

// const updateApiHits = () => apiHits++;

// const latLng = async (query: string) => {
//   try {
//     const url = api + query;
//     console.log('Requesting ' + url);
//     const res = await fetch(url);
//     if (res.status !== 200) {
//       console.error(await res.text());
//     }
//     const json = await res.json();

//     if (json && json.places && json.places.length > 0) {
//       const { coordinates } = JSON.parse(json.places[0].center);
//       return {
//         lat: String(coordinates[1]),
//         long: String(coordinates[0]),
//       };
//     } else {
//       throw new Error('Plase Not Found');
//     }
//   } catch (error) {
//     console.error(error);
//     return {
//       lat: null,
//       long: null,
//     };
//   }
// };

const main = async () => {
  // const upazilasNew = await Promise.all(
  //   upazilas.map(async (subdistrict) => {
  //     if (subdistrict.lat !== null) {
  //       return subdistrict;
  //     }
  //     const cords = await latLng(subdistrict.name);
  //     updateApiHits();
  //     return { ...subdistrict, ...cords };
  //   })
  // );
  // console.log('api hits ' + apiHits);
  // writeFileSync('./bd-subdist.json', JSON.stringify(upazilasNew, null, 2));
  const mappedDistricts = districts.map((district) => ({
    ...district,
    subdistricts: upazilas
      .filter((subdistrict) => subdistrict.district_id === district.id)
      .map((subdistrict) => {
        const { district_id, ...rest } = subdistrict;
        return rest;
      }),
  }));
  const relations = divisions.map((division) => ({
    ...division,
    districts: mappedDistricts
      .filter((district) => district.division_id === division.id)
      .map((district) => {
        const { division_id, ...rest } = district;
        return rest;
      }),
  }));
  writeFileSync('./bd-relations.json', JSON.stringify(relations, null, 2));
};

main();
