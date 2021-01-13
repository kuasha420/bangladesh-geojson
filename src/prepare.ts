import { districts } from './bd-districts.json';
import upazilas from './bd-upazilas.json';
import { postcodes } from './bd-postcodes.json';

import { writeFileSync } from 'fs';

const sanitizedpo = postcodes.map((po) => {
  if (typeof po.district === 'string') {
    const district_id = districts.find((dist) => dist.name === po.district)?.id;
    if (!district_id) {
      throw new Error(`District not found: ${po.district}`);
    }
    const subdistrict_id = upazilas.find((upo) => upo.name === po.upazila)?.id;
    if (!subdistrict_id) {
      throw new Error(`Subdistrict not found: ${po.upazila}`);
    }
    return { ...po, district_id, subdistrict_id, upazila: undefined, district: undefined };
  }
  const subdistrict_id = upazilas.find((upo) => upo.name === po.upazila)?.id;
  if (!subdistrict_id) {
    throw new Error(`Subdistrict not found: ${po.upazila}`);
  }
  return { ...po, subdistrict_id, upazila: undefined, district: undefined };
});

const postofficesObj = {
  postOffices: sanitizedpo,
};

writeFileSync('./bd-postoffice.json', JSON.stringify(postofficesObj, null, 2));
