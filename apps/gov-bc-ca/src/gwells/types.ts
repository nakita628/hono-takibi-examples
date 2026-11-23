type AquiferDemand = { code: string; description: string }
type AquiferMaterial = { code: string; description: string }
type AquiferProductivity = { code: string; description: string }
type QualityConcern = { code: string; description: string }
type AquiferSubtype = { code: string; description: string }
type AquiferVulnerability = { code: string; description: string }
type WaterUse = { code: string; description: string }
type Aquifer = {
  aquifer_id?: number | undefined
  aquifer_name?: string | undefined
  area?: string | undefined
  demand?: string | undefined
  demand_description?: string | undefined
  known_water_use?: string | undefined
  known_water_use_description?: string | undefined
  litho_stratographic_unit?: string | undefined
  location_description?: string | undefined
  mapping_year?: number | undefined
  material?: string | undefined
  material_description?: string | undefined
  notes?: string | undefined
  productivity?: string | undefined
  productivity_description?: string | undefined
  quality_concern?: string | undefined
  quality_concern_description?: string | undefined
  subtype?: string | undefined
  subtype_description?: string | undefined
  vulnerability?: string | undefined
  vulnerability_description?: string | undefined
}
type AquiferSerializerBasic = { aquifer_id?: number | undefined; description?: string | undefined }
type Organization = {
  city?: string | undefined
  email?: string | undefined
  fax_tel?: string | undefined
  main_tel?: string | undefined
  name: string
  org_guid?: string | undefined
  org_verbose_name?: string | undefined
  postal_code?: string | undefined
  province_state: string
  street_address?: string | undefined
  website_url?: string | undefined
}
type CityList = { organization: Organization }
type ApplicationStatusCode = { code?: string | undefined; description: string }
type Qualification = { description?: string | undefined; well_class: string }
type Subactivity = {
  description: string
  qualification_set?: Qualification[] | undefined
  registries_subactivity_code?: string | undefined
}
type ApplicationList = {
  cert_authority?: string | undefined
  certificate?: string | undefined
  current_status?: ApplicationStatusCode | undefined
  display_status?: string | undefined
  qualifications?: Qualification[] | undefined
  removal_date?: string | undefined
  subactivity: Subactivity
}
type OrganizationList = {
  city?: string | undefined
  email?: string | undefined
  fax_tel?: string | undefined
  main_tel?: string | undefined
  name: string
  org_guid?: string | undefined
  org_verbose_name?: string | undefined
  postal_code?: string | undefined
  province_state: string
  street_address?: string | undefined
  website_url?: string | undefined
}
type RegistrationsList = {
  activity?: string | undefined
  activity_description?: string | undefined
  applications?: ApplicationList[] | undefined
  organization: OrganizationList
  registration_no?: string | undefined
}
type PersonList = {
  contact_cell?: string | undefined
  contact_email?: string | undefined
  contact_tel?: string | undefined
  first_name: string
  person_guid?: string | undefined
  registrations?: RegistrationsList[] | undefined
  surname: string
}
type RegistrationsNumber = { registration_no?: string | undefined; registries_activity: string }
type PersonName = {
  name?: string | undefined
  person_guid?: string | undefined
  registrations?: RegistrationsNumber[] | undefined
}
type Survey = {
  survey_guid?: string | undefined
  survey_introduction_text?: string | undefined
  survey_link?: string | undefined
  survey_page?: 'w' | 'r' | 's' | 'a' | undefined
}
type WellList = {
  alteration_end_date?: string | undefined
  alternative_specs_submitted?: false | true | undefined
  analytic_solution_type?: string | undefined
  aquifer?: number | undefined
  aquifer_vulnerability_index?: string | undefined
  artesian_flow?: string | undefined
  artesian_pressure?: string | undefined
  backfill_depth?: string | undefined
  backfill_material?: string | undefined
  backfill_type?: string | undefined
  bcgs_id?: number | undefined
  bedrock_depth?: string | undefined
  boundary_effect?: string | undefined
  city?: string | undefined
  comments?: string | undefined
  construction_end_date?: string | undefined
  construction_start_date?: string | undefined
  coordinate_acquisition_code?: string | undefined
  decommission_details?: string | undefined
  decommission_end_date?: string | undefined
  decommission_method?: string | undefined
  decommission_reason?: string | undefined
  decommission_start_date?: string | undefined
  development_hours?: string | undefined
  development_method?: string | undefined
  development_notes?: string | undefined
  diameter?: string | undefined
  drawdown?: string | undefined
  drilling_company?: string | undefined
  drilling_method?: string | undefined
  ems?: string | undefined
  filter_pack_from?: string | undefined
  filter_pack_material?: string | undefined
  filter_pack_material_size?: string | undefined
  filter_pack_thickness?: string | undefined
  filter_pack_to?: string | undefined
  final_casing_stick_up?: string | undefined
  finished_well_depth?: string | undefined
  ground_elevation?: string | undefined
  ground_elevation_method?: string | undefined
  hydraulic_conductivity?: string | undefined
  hydro_fracturing_performed?: false | true | undefined
  hydro_fracturing_yield_increase?: string | undefined
  id_plate_attached_by?: string | undefined
  identification_plate_number?: number | undefined
  intended_water_use?: string | undefined
  land_district?: string | undefined
  latitude?: string | undefined
  legal_block?: string | undefined
  legal_district_lot?: string | undefined
  legal_lot?: string | undefined
  legal_pid?: number | undefined
  legal_plan?: string | undefined
  legal_range?: string | undefined
  legal_section?: string | undefined
  legal_township?: string | undefined
  licenced_status?: string | undefined
  liner_diameter?: string | undefined
  liner_from?: string | undefined
  liner_material?: string | undefined
  liner_thickness?: string | undefined
  liner_to?: string | undefined
  longitude?: string | undefined
  observation_well_number?: string | undefined
  observation_well_status?: string | undefined
  other_drilling_method?: string | undefined
  other_screen_bottom?: string | undefined
  other_screen_material?: string | undefined
  owner_full_name: string
  recommended_pump_depth?: string | undefined
  recommended_pump_rate?: string | undefined
  screen_bottom?: string | undefined
  screen_information?: string | undefined
  screen_intake_method?: string | undefined
  screen_material?: string | undefined
  screen_opening?: string | undefined
  screen_type?: string | undefined
  sealant_material?: string | undefined
  specific_storage?: string | undefined
  specific_yield?: string | undefined
  static_level_before_test?: string | undefined
  static_water_level?: string | undefined
  storativity?: string | undefined
  street_address?: string | undefined
  surface_seal_depth?: string | undefined
  surface_seal_length?: string | undefined
  surface_seal_material?: string | undefined
  surface_seal_method?: string | undefined
  surface_seal_thickness?: string | undefined
  testing_duration?: number | undefined
  testing_method?: string | undefined
  total_depth_drilled?: string | undefined
  transmissivity?: string | undefined
  utm_easting?: number | undefined
  utm_northing?: number | undefined
  utm_zone_code?: string | undefined
  water_quality_characteristics?: string[] | undefined
  water_quality_colour?: string | undefined
  water_quality_odour?: string | undefined
  water_supply_system_name?: string | undefined
  water_supply_system_well_name?: string | undefined
  well_cap_type?: string | undefined
  well_class?: string | undefined
  well_disinfected?: false | true | undefined
  well_guid?: string | undefined
  well_identification_plate_attached?: string | undefined
  well_location_description?: string | undefined
  well_orientation?: true | false | undefined
  well_status?: string | undefined
  well_subclass?: string | undefined
  well_tag_number?: number | undefined
  well_yield?: string | undefined
  well_yield_unit?: string | undefined
  yield_estimation_duration?: string | undefined
  yield_estimation_method?: string | undefined
  yield_estimation_rate?: string | undefined
}
type WellTagSearch = { owner_full_name: string; well_tag_number?: number | undefined }
type Casing = {
  casing_code?: string | undefined
  casing_material?: string | undefined
  diameter: string
  drive_shoe?: false | true | undefined
  end: string
  start: string
  wall_thickness?: string | undefined
}
type OrganizationNameList = {
  name: string
  org_guid?: string | undefined
  org_verbose_name?: string | undefined
}
type DecommissionDescription = {
  end: string
  material: string
  observations?: string | undefined
  start: string
}
type LinerPerforation = { end: string; start: string }
type LithologyDescription = {
  lithology_colour?: string | undefined
  lithology_from?: string | undefined
  lithology_hardness?: string | undefined
  lithology_moisture?: string | undefined
  lithology_raw_data?: string | undefined
  lithology_to?: string | undefined
  water_bearing_estimated_flow?: string | undefined
}
type PersonBasic = { name?: string | undefined; person_guid?: string | undefined }
type Screen = {
  assembly_type: string
  end: string
  internal_diameter?: string | undefined
  slot_size?: string | undefined
  start: string
}
type WellDetail = {
  alteration_end_date?: string | undefined
  alternative_specs_submitted?: false | true | undefined
  analytic_solution_type?: string | undefined
  aquifer?: number | undefined
  aquifer_vulnerability_index?: string | undefined
  artesian_flow?: string | undefined
  artesian_pressure?: string | undefined
  backfill_depth?: string | undefined
  backfill_material?: string | undefined
  backfill_type?: string | undefined
  bcgs_id?: number | undefined
  bedrock_depth?: string | undefined
  boundary_effect?: string | undefined
  casing_set: Casing[]
  city?: string | undefined
  comments?: string | undefined
  company_of_person_responsible: OrganizationNameList
  construction_end_date?: string | undefined
  construction_start_date?: string | undefined
  coordinate_acquisition_code?: string | undefined
  decommission_description_set: DecommissionDescription[]
  decommission_details?: string | undefined
  decommission_end_date?: string | undefined
  decommission_method?: string | undefined
  decommission_reason?: string | undefined
  decommission_start_date?: string | undefined
  development_hours?: string | undefined
  development_method?: string | undefined
  development_notes?: string | undefined
  diameter?: string | undefined
  drawdown?: string | undefined
  drilling_company?: string | undefined
  drilling_method?: string | undefined
  ems?: string | undefined
  filter_pack_from?: string | undefined
  filter_pack_material?: string | undefined
  filter_pack_material_size?: string | undefined
  filter_pack_thickness?: string | undefined
  filter_pack_to?: string | undefined
  final_casing_stick_up?: string | undefined
  finished_well_depth?: string | undefined
  ground_elevation?: string | undefined
  ground_elevation_method?: string | undefined
  hydraulic_conductivity?: string | undefined
  hydro_fracturing_performed?: false | true | undefined
  hydro_fracturing_yield_increase?: string | undefined
  id_plate_attached_by?: string | undefined
  identification_plate_number?: number | undefined
  intended_water_use?: string | undefined
  land_district?: string | undefined
  latitude?: string | undefined
  legal_block?: string | undefined
  legal_district_lot?: string | undefined
  legal_lot?: string | undefined
  legal_pid?: number | undefined
  legal_plan?: string | undefined
  legal_range?: string | undefined
  legal_section?: string | undefined
  legal_township?: string | undefined
  licenced_status?: string | undefined
  liner_diameter?: string | undefined
  liner_from?: string | undefined
  liner_material?: string | undefined
  liner_thickness?: string | undefined
  liner_to?: string | undefined
  linerperforation_set: LinerPerforation[]
  lithologydescription_set: LithologyDescription[]
  longitude?: string | undefined
  observation_well_number?: string | undefined
  observation_well_status?: string | undefined
  other_drilling_method?: string | undefined
  other_screen_bottom?: string | undefined
  other_screen_material?: string | undefined
  owner_full_name: string
  person_responsible: PersonBasic
  recommended_pump_depth?: string | undefined
  recommended_pump_rate?: string | undefined
  screen_bottom?: string | undefined
  screen_information?: string | undefined
  screen_intake_method?: string | undefined
  screen_material?: string | undefined
  screen_opening?: string | undefined
  screen_set: Screen[]
  screen_type?: string | undefined
  sealant_material?: string | undefined
  specific_storage?: string | undefined
  specific_yield?: string | undefined
  static_level_before_test?: string | undefined
  static_water_level?: string | undefined
  storativity?: string | undefined
  street_address?: string | undefined
  surface_seal_depth?: string | undefined
  surface_seal_length?: string | undefined
  surface_seal_material?: string | undefined
  surface_seal_method?: string | undefined
  surface_seal_thickness?: string | undefined
  testing_duration?: number | undefined
  testing_method?: string | undefined
  total_depth_drilled?: string | undefined
  transmissivity?: string | undefined
  utm_easting?: number | undefined
  utm_northing?: number | undefined
  utm_zone_code?: string | undefined
  water_quality_characteristics?: string[] | undefined
  water_quality_colour?: string | undefined
  water_quality_odour?: string | undefined
  water_supply_system_name?: string | undefined
  water_supply_system_well_name?: string | undefined
  well: number
  well_cap_type?: string | undefined
  well_class?: string | undefined
  well_disinfected?: false | true | undefined
  well_guid?: string | undefined
  well_identification_plate_attached?: string | undefined
  well_location_description?: string | undefined
  well_orientation?: true | false | undefined
  well_status?: string | undefined
  well_subclass?: string | undefined
  well_tag_number?: number | undefined
  well_yield?: string | undefined
  well_yield_unit?: string | undefined
  yield_estimation_duration?: string | undefined
  yield_estimation_method?: string | undefined
  yield_estimation_rate?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/aquifer-codes/demand/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: AquiferDemand[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifer-codes/materials/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: AquiferMaterial[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifer-codes/productivity/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: AquiferProductivity[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifer-codes/quality-concerns/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: QualityConcern[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifer-codes/subtypes/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: AquiferSubtype[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifer-codes/vulnerability/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: AquiferVulnerability[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifer-codes/water-use/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: WaterUse[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifers/': {
      $get: {
        input: {
          query: {
            aquifer_id?: number | undefined
            ordering?: string | undefined
            search?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: Aquifer[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifers/names/': {
      $get: {
        input: { query: { search?: string | undefined } }
        output: AquiferSerializerBasic[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifers/:aquifer_id/': {
      $get: {
        input: { param: { aquifer_id: number } }
        output: Aquifer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/aquifers/:aquifer_id/files': {
      $get: {
        input: { param: { aquifer_id: string } }
        output: {
          private?: { name?: string | undefined; url?: string | undefined }[] | undefined
          public?: { name?: string | undefined; url?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cities/drillers/': {
      $get: { input: {}; output: CityList[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/cities/installers/': {
      $get: { input: {}; output: CityList[]; outputFormat: 'json'; status: 200 }
    }
  } & { '/config': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/drillers/': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: PersonList[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/drillers/names/': {
      $get: {
        input: { query: { search?: string | undefined } }
        output: PersonName[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/drillers/:person_guid/files/': {
      $get: {
        input: { param: { person_guid: string } }
        output: {
          private?: { name?: string | undefined; url?: string | undefined }[] | undefined
          public?: { name?: string | undefined; url?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/keycloak': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/submissions/options/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/surveys/': { $get: { input: {}; output: Survey[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/wells/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: string | undefined
          previous?: string | undefined
          results: WellList[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wells/tags/': {
      $get: {
        input: { query: { search?: string | undefined; ordering?: string | undefined } }
        output: WellTagSearch[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wells/:tag/files': {
      $get: {
        input: { param: { tag: string } }
        output: {
          private?: { name?: string | undefined; url?: string | undefined }[] | undefined
          public?: { name?: string | undefined; url?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wells/:well_tag_number': {
      $get: {
        input: { param: { well_tag_number: number } }
        output: WellDetail
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
