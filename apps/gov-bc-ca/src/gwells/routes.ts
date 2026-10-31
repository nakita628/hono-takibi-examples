import { createRoute, z } from '@hono/zod-openapi'

const ApplicationStatusCodeSchema = z
  .object({
    code: z.string().exactOptional().openapi({ readOnly: true, title: 'Code' }),
    description: z.string().max(100).openapi({ title: 'Description' }),
  })
  .openapi({ required: ['description'], title: 'Current status' })
  .openapi('ApplicationStatusCode')

const QualificationSchema = z
  .object({
    description: z.string().exactOptional().openapi({ readOnly: true, title: 'Description' }),
    well_class: z.string().openapi({ title: 'Well class' }),
  })
  .openapi({ required: ['well_class'] })
  .openapi('Qualification')

const SubactivitySchema = z
  .object({
    description: z.string().max(100).openapi({ title: 'Description' }),
    qualification_set: z.array(QualificationSchema).exactOptional().openapi({ readOnly: true }),
    registries_subactivity_code: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Registries subactivity code' }),
  })
  .openapi({ required: ['description'], title: 'Subactivity' })
  .openapi('Subactivity')

const ApplicationListSchema = z
  .object({
    cert_authority: z.string().exactOptional().openapi({ readOnly: true, title: 'Cert authority' }),
    certificate: z.string().exactOptional().openapi({ readOnly: true, title: 'Certificate' }),
    current_status: ApplicationStatusCodeSchema.exactOptional(),
    display_status: z.string().exactOptional().openapi({ readOnly: true, title: 'Display status' }),
    qualifications: z.array(QualificationSchema).exactOptional().openapi({ readOnly: true }),
    removal_date: z.iso.date().exactOptional().openapi({ title: 'Removal date' }),
    subactivity: SubactivitySchema,
  })
  .openapi({ required: ['subactivity'] })
  .openapi('ApplicationList')

const AquiferSchema = z
  .object({
    aquifer_id: z.int().exactOptional().openapi({ readOnly: true, title: 'Aquifer ID Number' }),
    aquifer_name: z.string().max(100).exactOptional().openapi({ title: 'Aquifer name' }),
    area: z.string().exactOptional().openapi({ title: 'Size (square km)' }),
    demand: z.string().exactOptional().openapi({ title: 'Demand Reference' }),
    demand_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Demand description' }),
    known_water_use: z.string().exactOptional().openapi({ title: 'Known Water Use Reference' }),
    known_water_use_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Known water use description' }),
    litho_stratographic_unit: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ title: 'Lithographic Stratographic Unit' }),
    location_description: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ title: 'Description of Location' }),
    mapping_year: z
      .int()
      .min(1990)
      .max(2019)
      .exactOptional()
      .openapi({ description: 'Use the following format: ', title: 'Date of Mapping' }),
    material: z.string().exactOptional().openapi({ title: 'Material Reference' }),
    material_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Material description' }),
    notes: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({ title: 'Notes on Aquifer, for internal use only.' }),
    productivity: z.string().exactOptional().openapi({ title: 'Productivity Reference' }),
    productivity_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Productivity description' }),
    quality_concern: z.string().exactOptional().openapi({ title: 'Quality Concern Reference' }),
    quality_concern_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Quality concern description' }),
    subtype: z.string().exactOptional().openapi({ title: 'Subtype Reference' }),
    subtype_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Subtype description' }),
    vulnerability: z.string().exactOptional().openapi({ title: 'Aquifer Vulnerabiliy' }),
    vulnerability_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Vulnerability description' }),
  })
  .openapi({ required: [] })
  .openapi('Aquifer')

const AquiferDemandSchema = z
  .object({
    code: z.string().max(1).openapi({ title: 'Code' }),
    description: z.string().max(100).openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('AquiferDemand')

const AquiferMaterialSchema = z
  .object({
    code: z.string().max(10).openapi({ title: 'Code' }),
    description: z.string().max(100).openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('AquiferMaterial')

const AquiferProductivitySchema = z
  .object({
    code: z.string().max(1).openapi({ title: 'Code' }),
    description: z.string().max(100).openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('AquiferProductivity')

const AquiferSerializerBasicSchema = z
  .object({
    aquifer_id: z.int().exactOptional().openapi({ readOnly: true, title: 'Aquifer ID Number' }),
    description: z.string().exactOptional().openapi({ readOnly: true, title: 'Description' }),
  })
  .openapi({ required: [] })
  .openapi('AquiferSerializerBasic')

const AquiferSubtypeSchema = z
  .object({
    code: z.string().max(3).openapi({ title: 'Code' }),
    description: z.string().openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('AquiferSubtype')

const AquiferVulnerabilitySchema = z
  .object({
    code: z.string().max(1).openapi({ title: 'Code' }),
    description: z.string().max(100).openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('AquiferVulnerability')

const CasingSchema = z
  .object({
    casing_code: z.string().exactOptional().openapi({ title: 'Casing Type Code' }),
    casing_material: z.string().exactOptional().openapi({ title: 'Casing Material Code' }),
    diameter: z.string().openapi({ title: 'Diameter' }),
    drive_shoe: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({ title: 'Drive Shoe' }),
    end: z.string().openapi({ title: 'To' }),
    start: z.string().openapi({ title: 'From' }),
    wall_thickness: z.string().exactOptional().openapi({ title: 'Wall Thickness' }),
  })
  .openapi({ required: ['start', 'end', 'diameter'] })
  .openapi('Casing')

const OrganizationSchema = z
  .object({
    city: z.string().max(50).exactOptional().openapi({ title: 'Town/City' }),
    email: z.email().max(254).exactOptional().openapi({ title: 'Email adddress' }),
    fax_tel: z.string().max(15).exactOptional().openapi({ title: 'Fax number' }),
    main_tel: z.string().max(15).exactOptional().openapi({ title: 'Telephone number' }),
    name: z.string().max(200).openapi({ title: 'Name' }),
    org_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Organization UUID' }),
    org_verbose_name: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Org verbose name' }),
    postal_code: z.string().max(10).exactOptional().openapi({ title: 'Postal Code' }),
    province_state: z.string().openapi({ title: 'Province/State' }),
    street_address: z.string().max(100).exactOptional().openapi({ title: 'Street Address' }),
    website_url: z.url().max(200).exactOptional().openapi({ title: 'Website' }),
  })
  .openapi({ required: ['name', 'province_state'], title: 'Organization' })
  .openapi('Organization')

const CityListSchema = z
  .object({ organization: OrganizationSchema })
  .openapi({ required: ['organization'] })
  .openapi('CityList')

const DecommissionDescriptionSchema = z
  .object({
    end: z.string().openapi({ title: 'Decommissioned To' }),
    material: z.string().openapi({ title: 'Material' }),
    observations: z.string().max(255).exactOptional().openapi({ title: 'Observations' }),
    start: z.string().openapi({ title: 'Decommissioned From' }),
  })
  .openapi({ required: ['start', 'end', 'material'] })
  .openapi('DecommissionDescription')

const LinerPerforationSchema = z
  .object({
    end: z.string().openapi({ title: 'Perforated To' }),
    start: z.string().openapi({ title: 'Perforated From' }),
  })
  .openapi({ required: ['start', 'end'] })
  .openapi('LinerPerforation')

const LithologyDescriptionSchema = z
  .object({
    lithology_colour: z.string().exactOptional().openapi({ title: 'Colour' }),
    lithology_from: z.string().exactOptional().openapi({ title: 'From' }),
    lithology_hardness: z.string().exactOptional().openapi({ title: 'Hardness' }),
    lithology_moisture: z.string().exactOptional().openapi({ title: 'Moisture' }),
    lithology_raw_data: z.string().max(250).exactOptional().openapi({ title: 'Raw Data' }),
    lithology_to: z.string().exactOptional().openapi({ title: 'To' }),
    water_bearing_estimated_flow: z
      .string()
      .exactOptional()
      .openapi({ title: 'Water Bearing Estimated Flow' }),
  })
  .openapi({ required: [] })
  .openapi('LithologyDescription')

const OrganizationListSchema = z
  .object({
    city: z.string().max(50).exactOptional().openapi({ title: 'Town/City' }),
    email: z.email().max(254).exactOptional().openapi({ title: 'Email adddress' }),
    fax_tel: z.string().max(15).exactOptional().openapi({ title: 'Fax number' }),
    main_tel: z.string().max(15).exactOptional().openapi({ title: 'Telephone number' }),
    name: z.string().max(200).openapi({ title: 'Name' }),
    org_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Organization UUID' }),
    org_verbose_name: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Org verbose name' }),
    postal_code: z.string().max(10).exactOptional().openapi({ title: 'Postal Code' }),
    province_state: z.string().openapi({ title: 'Province/State' }),
    street_address: z.string().max(100).exactOptional().openapi({ title: 'Street Address' }),
    website_url: z.url().max(200).exactOptional().openapi({ title: 'Website' }),
  })
  .openapi({ required: ['name', 'province_state'], title: 'Organization' })
  .openapi('OrganizationList')

const OrganizationNameListSchema = z
  .object({
    name: z.string().max(200).openapi({ title: 'Name' }),
    org_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Organization UUID' }),
    org_verbose_name: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Org verbose name' }),
  })
  .openapi({ required: ['name'], title: 'Company of person responsible' })
  .openapi('OrganizationNameList')

const PersonBasicSchema = z
  .object({
    name: z.string().exactOptional().openapi({ readOnly: true, title: 'Name' }),
    person_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Person UUID' }),
  })
  .openapi({ title: 'Person responsible', required: [] })
  .openapi('PersonBasic')

const RegistrationsListSchema = z
  .object({
    activity: z.string().exactOptional().openapi({ readOnly: true, title: 'Activity' }),
    activity_description: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Activity description' }),
    applications: z.array(ApplicationListSchema).exactOptional().openapi({ readOnly: true }),
    organization: OrganizationListSchema,
    registration_no: z.string().max(15).exactOptional().openapi({ title: 'Registration no' }),
  })
  .openapi({ required: ['organization'] })
  .openapi('RegistrationsList')

const PersonListSchema = z
  .object({
    contact_cell: z.string().max(15).exactOptional().openapi({ title: 'Contact cell number' }),
    contact_email: z.email().max(254).exactOptional().openapi({ title: 'Email address' }),
    contact_tel: z.string().max(15).exactOptional().openapi({ title: 'Contact telephone number' }),
    first_name: z.string().max(100).openapi({ title: 'First name' }),
    person_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Person UUID' }),
    registrations: z.array(RegistrationsListSchema).exactOptional().openapi({ readOnly: true }),
    surname: z.string().max(100).openapi({ title: 'Surname' }),
  })
  .openapi({ required: ['first_name', 'surname'] })
  .openapi('PersonList')

const RegistrationsNumberSchema = z
  .object({
    registration_no: z.string().max(15).exactOptional().openapi({ title: 'Registration no' }),
    registries_activity: z.string().openapi({ title: 'Registries activity' }),
  })
  .openapi({ required: ['registries_activity'] })
  .openapi('RegistrationsNumber')

const PersonNameSchema = z
  .object({
    name: z.string().exactOptional().openapi({ readOnly: true, title: 'Name' }),
    person_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Person UUID' }),
    registrations: z.array(RegistrationsNumberSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('PersonName')

const QualityConcernSchema = z
  .object({
    code: z.string().max(2).openapi({ title: 'Code' }),
    description: z.string().max(100).openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('QualityConcern')

const ScreenSchema = z
  .object({
    assembly_type: z.string().openapi({ title: 'Assembly type' }),
    end: z.string().openapi({ title: 'To' }),
    internal_diameter: z.string().exactOptional().openapi({ title: 'Diameter' }),
    slot_size: z.string().exactOptional().openapi({ title: 'Slot Size' }),
    start: z.string().openapi({ title: 'From' }),
  })
  .openapi({ required: ['start', 'end', 'assembly_type'] })
  .openapi('Screen')

const SurveySchema = z
  .object({
    survey_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Survey guid' }),
    survey_introduction_text: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ title: 'Introduction Text' }),
    survey_link: z.string().max(100).exactOptional().openapi({ title: 'Link' }),
    survey_page: z.enum(['w', 'r', 's', 'a']).exactOptional().openapi({ title: 'Page' }),
  })
  .openapi({ required: [] })
  .openapi('Survey')

const WaterUseSchema = z
  .object({
    code: z.string().max(2).openapi({ title: 'Code' }),
    description: z.string().max(100).openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('WaterUse')

const WellDetailSchema = z
  .object({
    alteration_end_date: z.iso.date().exactOptional().openapi({ title: 'Alteration Date' }),
    alternative_specs_submitted: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({ title: 'Alternative specs submitted (if required)' }),
    analytic_solution_type: z.string().exactOptional().openapi({ title: 'Analytic Solution Type' }),
    aquifer: z.int().exactOptional().openapi({ title: 'Aquifer ID Number' }),
    aquifer_vulnerability_index: z.string().exactOptional().openapi({ title: 'AVI' }),
    artesian_flow: z.string().exactOptional().openapi({ title: 'Artesian Flow' }),
    artesian_pressure: z.string().exactOptional().openapi({ title: 'Artesian Pressure' }),
    backfill_depth: z.string().exactOptional().openapi({ title: 'Backfill Depth' }),
    backfill_material: z.string().max(100).exactOptional().openapi({ title: 'Backfill Material' }),
    backfill_type: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ title: 'Backfill Material Above Surface Seal' }),
    bcgs_id: z.int().exactOptional().openapi({ title: 'BCGS Mapsheet Number' }),
    bedrock_depth: z.string().exactOptional().openapi({ title: 'Depth to Bedrock' }),
    boundary_effect: z.string().exactOptional().openapi({ title: 'Boundary Effect' }),
    casing_set: z.array(CasingSchema),
    city: z.string().max(50).exactOptional().openapi({ title: 'Town/City' }),
    comments: z.string().max(3000).exactOptional().openapi({ title: 'Comments' }),
    company_of_person_responsible: OrganizationNameListSchema,
    construction_end_date: z.iso.date().exactOptional().openapi({ title: 'Construction Date' }),
    construction_start_date: z.iso
      .date()
      .exactOptional()
      .openapi({ title: 'Construction Start Date' }),
    coordinate_acquisition_code: z
      .string()
      .exactOptional()
      .openapi({ title: 'Location Accuracy Code' }),
    decommission_description_set: z.array(DecommissionDescriptionSchema),
    decommission_details: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ title: 'Decommission Details' }),
    decommission_end_date: z.iso.date().exactOptional().openapi({ title: 'Decommission Date' }),
    decommission_method: z.string().exactOptional().openapi({ title: 'Method of Decommission' }),
    decommission_reason: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ title: 'Reason for Decommission' }),
    decommission_start_date: z.iso
      .date()
      .exactOptional()
      .openapi({ title: 'Decommission Start Date' }),
    development_hours: z.string().exactOptional().openapi({ title: 'Development Total Duration' }),
    development_method: z.string().exactOptional().openapi({ title: 'Developed By' }),
    development_notes: z.string().max(255).exactOptional().openapi({ title: 'Development Notes' }),
    diameter: z.string().max(9).exactOptional().openapi({ title: 'Diameter' }),
    drawdown: z.string().exactOptional().openapi({ title: 'Drawdown' }),
    drilling_company: z.uuid().exactOptional().openapi({ title: 'Drilling Company' }),
    drilling_method: z.string().exactOptional().openapi({ title: 'Drilling Method' }),
    ems: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ title: 'Environmental Monitoring System (EMS) ID' }),
    filter_pack_from: z.string().exactOptional().openapi({ title: 'Filter Pack From' }),
    filter_pack_material: z.string().exactOptional().openapi({ title: 'Filter Pack Material' }),
    filter_pack_material_size: z
      .string()
      .exactOptional()
      .openapi({ title: 'Filter Pack Material Size' }),
    filter_pack_thickness: z.string().exactOptional().openapi({ title: 'Filter Pack Thickness' }),
    filter_pack_to: z.string().exactOptional().openapi({ title: 'Filter Pack To' }),
    final_casing_stick_up: z.string().exactOptional().openapi({ title: 'Final Casing Stick Up' }),
    finished_well_depth: z.string().exactOptional().openapi({ title: 'Finished Well Depth' }),
    ground_elevation: z.string().exactOptional().openapi({ title: 'Ground Elevation' }),
    ground_elevation_method: z
      .string()
      .exactOptional()
      .openapi({ title: 'Elevation Determined By' }),
    hydraulic_conductivity: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ title: 'Hydraulic Conductivity' }),
    hydro_fracturing_performed: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({ title: 'Hydro-fracturing Performed?' }),
    hydro_fracturing_yield_increase: z
      .string()
      .exactOptional()
      .openapi({ title: 'Well Yield Increase Due to Hydro-fracturing' }),
    id_plate_attached_by: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ title: 'Well identification plate attached by' }),
    identification_plate_number: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'Well Identification Plate Number' }),
    intended_water_use: z.string().exactOptional().openapi({ title: 'Intended Water Use' }),
    land_district: z.string().exactOptional().openapi({ title: 'Land District' }),
    latitude: z.string().exactOptional().openapi({ title: 'Latitude' }),
    legal_block: z.string().max(10).exactOptional().openapi({ title: 'Block' }),
    legal_district_lot: z.string().max(20).exactOptional().openapi({ title: 'District Lot' }),
    legal_lot: z.string().max(10).exactOptional().openapi({ title: 'Lot' }),
    legal_pid: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'Property Identification Description (PID)' }),
    legal_plan: z.string().max(20).exactOptional().openapi({ title: 'Plan' }),
    legal_range: z.string().max(10).exactOptional().openapi({ title: 'Range' }),
    legal_section: z.string().max(10).exactOptional().openapi({ title: 'Section' }),
    legal_township: z.string().max(20).exactOptional().openapi({ title: 'Township' }),
    licenced_status: z.string().exactOptional().openapi({ title: 'Licenced Status' }),
    liner_diameter: z.string().exactOptional().openapi({ title: 'Liner Diameter' }),
    liner_from: z.string().exactOptional().openapi({ title: 'Liner From' }),
    liner_material: z.string().exactOptional().openapi({ title: 'Liner Material' }),
    liner_thickness: z.string().exactOptional().openapi({ title: 'Liner Thickness' }),
    liner_to: z.string().exactOptional().openapi({ title: 'Liner To' }),
    linerperforation_set: z.array(LinerPerforationSchema),
    lithologydescription_set: z.array(LithologyDescriptionSchema),
    longitude: z.string().exactOptional().openapi({ title: 'Longitude' }),
    observation_well_number: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({ title: 'Observation Well Number' }),
    observation_well_status: z
      .string()
      .exactOptional()
      .openapi({ title: 'Observation Well Status' }),
    other_drilling_method: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ title: 'Specify Other Drilling Method' }),
    other_screen_bottom: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ title: 'Specify Other Screen Bottom' }),
    other_screen_material: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ title: 'Specify Other Screen Material' }),
    owner_full_name: z.string().max(200).openapi({ title: 'Owner Name' }),
    person_responsible: PersonBasicSchema,
    recommended_pump_depth: z.string().exactOptional().openapi({ title: 'Recommended pump depth' }),
    recommended_pump_rate: z.string().exactOptional().openapi({ title: 'Recommended pump rate' }),
    screen_bottom: z.string().exactOptional().openapi({ title: 'Bottom' }),
    screen_information: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ title: 'Screen Information' }),
    screen_intake_method: z.string().exactOptional().openapi({ title: 'Intake Method' }),
    screen_material: z.string().exactOptional().openapi({ title: 'Material' }),
    screen_opening: z.string().exactOptional().openapi({ title: 'Opening' }),
    screen_set: z.array(ScreenSchema),
    screen_type: z.string().exactOptional().openapi({ title: 'Type' }),
    sealant_material: z.string().max(100).exactOptional().openapi({ title: 'Sealant Material' }),
    specific_storage: z.string().max(100).exactOptional().openapi({ title: 'Specific Storage' }),
    specific_yield: z.string().exactOptional().openapi({ title: 'Specific Yield' }),
    static_level_before_test: z.string().exactOptional().openapi({ title: 'SWL Before Test' }),
    static_water_level: z.string().exactOptional().openapi({ title: 'Static Water Level (BTOC)' }),
    storativity: z.string().exactOptional().openapi({ title: 'Storativity' }),
    street_address: z.string().max(100).exactOptional().openapi({ title: 'Street Address' }),
    surface_seal_depth: z.string().exactOptional().openapi({ title: 'Surface Seal Depth' }),
    surface_seal_length: z.string().exactOptional().openapi({ title: 'Surface Seal Length' }),
    surface_seal_material: z.string().exactOptional().openapi({ title: 'Surface Seal Material' }),
    surface_seal_method: z
      .string()
      .exactOptional()
      .openapi({ title: 'Surface Seal Installation Method' }),
    surface_seal_thickness: z.string().exactOptional().openapi({ title: 'Surface Seal Thickness' }),
    testing_duration: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'Testing duration' }),
    testing_method: z.string().max(100).exactOptional().openapi({ title: 'Testing Method' }),
    total_depth_drilled: z.string().exactOptional().openapi({ title: 'Total Depth Drilled' }),
    transmissivity: z.string().exactOptional().openapi({ title: 'Transmissivity' }),
    utm_easting: z
      .int()
      .min(-2147483648)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'UTM Easting' }),
    utm_northing: z
      .int()
      .min(-2147483648)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'UTM Northing' }),
    utm_zone_code: z.string().max(10).exactOptional().openapi({ title: 'Zone' }),
    water_quality_characteristics: z
      .array(z.string().openapi({ title: 'Obvious Water Quality Characteristics' }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    water_quality_colour: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ title: 'Water Quality Colour' }),
    water_quality_odour: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ title: 'Water Quality Odour' }),
    water_supply_system_name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ title: 'Water Supply System Name' }),
    water_supply_system_well_name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ title: 'Water Supply System Well Name' }),
    well: z.int().openapi({ title: 'Well' }),
    well_cap_type: z.string().max(40).exactOptional().openapi({ title: 'Well Cap' }),
    well_class: z.string().exactOptional().openapi({ title: 'Well Class' }),
    well_disinfected: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({ title: 'Well Disinfected' }),
    well_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Well guid' }),
    well_identification_plate_attached: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({ title: 'Well Identification Plate Is Attached' }),
    well_location_description: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({ title: 'Description of Well Location' }),
    well_orientation: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ title: 'Orientation of Well' }),
    well_status: z.string().exactOptional().openapi({ title: 'Well Status' }),
    well_subclass: z.uuid().exactOptional().openapi({ title: 'Well Subclass' }),
    well_tag_number: z.int().exactOptional().openapi({ readOnly: true, title: 'Well Tag Number' }),
    well_yield: z.string().exactOptional().openapi({ title: 'Estimated Well Yield' }),
    well_yield_unit: z.string().exactOptional().openapi({ title: 'Well yield unit' }),
    yield_estimation_duration: z.string().exactOptional().openapi({ title: 'Estimation Duration' }),
    yield_estimation_method: z.string().exactOptional().openapi({ title: 'Estimation Method' }),
    yield_estimation_rate: z.string().exactOptional().openapi({ title: 'Estimation Rate' }),
  })
  .openapi({
    required: [
      'well',
      'owner_full_name',
      'person_responsible',
      'company_of_person_responsible',
      'casing_set',
      'screen_set',
      'linerperforation_set',
      'decommission_description_set',
      'lithologydescription_set',
    ],
  })
  .openapi('WellDetail')

const WellListSchema = z
  .object({
    alteration_end_date: z.iso.date().exactOptional().openapi({ title: 'Alteration Date' }),
    alternative_specs_submitted: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({ title: 'Alternative specs submitted (if required)' }),
    analytic_solution_type: z.string().exactOptional().openapi({ title: 'Analytic Solution Type' }),
    aquifer: z.int().exactOptional().openapi({ title: 'Aquifer ID Number' }),
    aquifer_vulnerability_index: z.string().exactOptional().openapi({ title: 'AVI' }),
    artesian_flow: z.string().exactOptional().openapi({ title: 'Artesian Flow' }),
    artesian_pressure: z.string().exactOptional().openapi({ title: 'Artesian Pressure' }),
    backfill_depth: z.string().exactOptional().openapi({ title: 'Backfill Depth' }),
    backfill_material: z.string().max(100).exactOptional().openapi({ title: 'Backfill Material' }),
    backfill_type: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ title: 'Backfill Material Above Surface Seal' }),
    bcgs_id: z.int().exactOptional().openapi({ title: 'BCGS Mapsheet Number' }),
    bedrock_depth: z.string().exactOptional().openapi({ title: 'Depth to Bedrock' }),
    boundary_effect: z.string().exactOptional().openapi({ title: 'Boundary Effect' }),
    city: z.string().max(50).exactOptional().openapi({ title: 'Town/City' }),
    comments: z.string().max(3000).exactOptional().openapi({ title: 'Comments' }),
    construction_end_date: z.iso.date().exactOptional().openapi({ title: 'Construction Date' }),
    construction_start_date: z.iso
      .date()
      .exactOptional()
      .openapi({ title: 'Construction Start Date' }),
    coordinate_acquisition_code: z
      .string()
      .exactOptional()
      .openapi({ title: 'Location Accuracy Code' }),
    decommission_details: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ title: 'Decommission Details' }),
    decommission_end_date: z.iso.date().exactOptional().openapi({ title: 'Decommission Date' }),
    decommission_method: z.string().exactOptional().openapi({ title: 'Method of Decommission' }),
    decommission_reason: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ title: 'Reason for Decommission' }),
    decommission_start_date: z.iso
      .date()
      .exactOptional()
      .openapi({ title: 'Decommission Start Date' }),
    development_hours: z.string().exactOptional().openapi({ title: 'Development Total Duration' }),
    development_method: z.string().exactOptional().openapi({ title: 'Developed By' }),
    development_notes: z.string().max(255).exactOptional().openapi({ title: 'Development Notes' }),
    diameter: z.string().max(9).exactOptional().openapi({ title: 'Diameter' }),
    drawdown: z.string().exactOptional().openapi({ title: 'Drawdown' }),
    drilling_company: z.uuid().exactOptional().openapi({ title: 'Drilling Company' }),
    drilling_method: z.string().exactOptional().openapi({ title: 'Drilling Method' }),
    ems: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ title: 'Environmental Monitoring System (EMS) ID' }),
    filter_pack_from: z.string().exactOptional().openapi({ title: 'Filter Pack From' }),
    filter_pack_material: z.string().exactOptional().openapi({ title: 'Filter Pack Material' }),
    filter_pack_material_size: z
      .string()
      .exactOptional()
      .openapi({ title: 'Filter Pack Material Size' }),
    filter_pack_thickness: z.string().exactOptional().openapi({ title: 'Filter Pack Thickness' }),
    filter_pack_to: z.string().exactOptional().openapi({ title: 'Filter Pack To' }),
    final_casing_stick_up: z.string().exactOptional().openapi({ title: 'Final Casing Stick Up' }),
    finished_well_depth: z.string().exactOptional().openapi({ title: 'Finished Well Depth' }),
    ground_elevation: z.string().exactOptional().openapi({ title: 'Ground Elevation' }),
    ground_elevation_method: z
      .string()
      .exactOptional()
      .openapi({ title: 'Elevation Determined By' }),
    hydraulic_conductivity: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ title: 'Hydraulic Conductivity' }),
    hydro_fracturing_performed: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({ title: 'Hydro-fracturing Performed?' }),
    hydro_fracturing_yield_increase: z
      .string()
      .exactOptional()
      .openapi({ title: 'Well Yield Increase Due to Hydro-fracturing' }),
    id_plate_attached_by: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ title: 'Well identification plate attached by' }),
    identification_plate_number: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'Well Identification Plate Number' }),
    intended_water_use: z.string().exactOptional().openapi({ title: 'Intended Water Use' }),
    land_district: z.string().exactOptional().openapi({ title: 'Land District' }),
    latitude: z.string().exactOptional().openapi({ title: 'Latitude' }),
    legal_block: z.string().max(10).exactOptional().openapi({ title: 'Block' }),
    legal_district_lot: z.string().max(20).exactOptional().openapi({ title: 'District Lot' }),
    legal_lot: z.string().max(10).exactOptional().openapi({ title: 'Lot' }),
    legal_pid: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'Property Identification Description (PID)' }),
    legal_plan: z.string().max(20).exactOptional().openapi({ title: 'Plan' }),
    legal_range: z.string().max(10).exactOptional().openapi({ title: 'Range' }),
    legal_section: z.string().max(10).exactOptional().openapi({ title: 'Section' }),
    legal_township: z.string().max(20).exactOptional().openapi({ title: 'Township' }),
    licenced_status: z.string().exactOptional().openapi({ title: 'Licenced Status' }),
    liner_diameter: z.string().exactOptional().openapi({ title: 'Liner Diameter' }),
    liner_from: z.string().exactOptional().openapi({ title: 'Liner From' }),
    liner_material: z.string().exactOptional().openapi({ title: 'Liner Material' }),
    liner_thickness: z.string().exactOptional().openapi({ title: 'Liner Thickness' }),
    liner_to: z.string().exactOptional().openapi({ title: 'Liner To' }),
    longitude: z.string().exactOptional().openapi({ title: 'Longitude' }),
    observation_well_number: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({ title: 'Observation Well Number' }),
    observation_well_status: z
      .string()
      .exactOptional()
      .openapi({ title: 'Observation Well Status' }),
    other_drilling_method: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ title: 'Specify Other Drilling Method' }),
    other_screen_bottom: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ title: 'Specify Other Screen Bottom' }),
    other_screen_material: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ title: 'Specify Other Screen Material' }),
    owner_full_name: z.string().max(200).openapi({ title: 'Owner Name' }),
    recommended_pump_depth: z.string().exactOptional().openapi({ title: 'Recommended pump depth' }),
    recommended_pump_rate: z.string().exactOptional().openapi({ title: 'Recommended pump rate' }),
    screen_bottom: z.string().exactOptional().openapi({ title: 'Bottom' }),
    screen_information: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ title: 'Screen Information' }),
    screen_intake_method: z.string().exactOptional().openapi({ title: 'Intake Method' }),
    screen_material: z.string().exactOptional().openapi({ title: 'Material' }),
    screen_opening: z.string().exactOptional().openapi({ title: 'Opening' }),
    screen_type: z.string().exactOptional().openapi({ title: 'Type' }),
    sealant_material: z.string().max(100).exactOptional().openapi({ title: 'Sealant Material' }),
    specific_storage: z.string().max(100).exactOptional().openapi({ title: 'Specific Storage' }),
    specific_yield: z.string().exactOptional().openapi({ title: 'Specific Yield' }),
    static_level_before_test: z.string().exactOptional().openapi({ title: 'SWL Before Test' }),
    static_water_level: z.string().exactOptional().openapi({ title: 'Static Water Level (BTOC)' }),
    storativity: z.string().exactOptional().openapi({ title: 'Storativity' }),
    street_address: z.string().max(100).exactOptional().openapi({ title: 'Street Address' }),
    surface_seal_depth: z.string().exactOptional().openapi({ title: 'Surface Seal Depth' }),
    surface_seal_length: z.string().exactOptional().openapi({ title: 'Surface Seal Length' }),
    surface_seal_material: z.string().exactOptional().openapi({ title: 'Surface Seal Material' }),
    surface_seal_method: z
      .string()
      .exactOptional()
      .openapi({ title: 'Surface Seal Installation Method' }),
    surface_seal_thickness: z.string().exactOptional().openapi({ title: 'Surface Seal Thickness' }),
    testing_duration: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'Testing duration' }),
    testing_method: z.string().max(100).exactOptional().openapi({ title: 'Testing Method' }),
    total_depth_drilled: z.string().exactOptional().openapi({ title: 'Total Depth Drilled' }),
    transmissivity: z.string().exactOptional().openapi({ title: 'Transmissivity' }),
    utm_easting: z
      .int()
      .min(-2147483648)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'UTM Easting' }),
    utm_northing: z
      .int()
      .min(-2147483648)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'UTM Northing' }),
    utm_zone_code: z.string().max(10).exactOptional().openapi({ title: 'Zone' }),
    water_quality_characteristics: z
      .array(z.string().openapi({ title: 'Obvious Water Quality Characteristics' }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    water_quality_colour: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ title: 'Water Quality Colour' }),
    water_quality_odour: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ title: 'Water Quality Odour' }),
    water_supply_system_name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ title: 'Water Supply System Name' }),
    water_supply_system_well_name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ title: 'Water Supply System Well Name' }),
    well_cap_type: z.string().max(40).exactOptional().openapi({ title: 'Well Cap' }),
    well_class: z.string().exactOptional().openapi({ title: 'Well Class' }),
    well_disinfected: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({ title: 'Well Disinfected' }),
    well_guid: z.uuid().exactOptional().openapi({ readOnly: true, title: 'Well guid' }),
    well_identification_plate_attached: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({ title: 'Well Identification Plate Is Attached' }),
    well_location_description: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({ title: 'Description of Well Location' }),
    well_orientation: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ title: 'Orientation of Well' }),
    well_status: z.string().exactOptional().openapi({ title: 'Well Status' }),
    well_subclass: z.uuid().exactOptional().openapi({ title: 'Well Subclass' }),
    well_tag_number: z.int().exactOptional().openapi({ readOnly: true, title: 'Well Tag Number' }),
    well_yield: z.string().exactOptional().openapi({ title: 'Estimated Well Yield' }),
    well_yield_unit: z.string().exactOptional().openapi({ title: 'Well yield unit' }),
    yield_estimation_duration: z.string().exactOptional().openapi({ title: 'Estimation Duration' }),
    yield_estimation_method: z.string().exactOptional().openapi({ title: 'Estimation Method' }),
    yield_estimation_rate: z.string().exactOptional().openapi({ title: 'Estimation Rate' }),
  })
  .openapi({ required: ['owner_full_name'] })
  .openapi('WellList')

const WellTagSearchSchema = z
  .object({
    owner_full_name: z.string().max(200).openapi({ title: 'Owner Name' }),
    well_tag_number: z.int().exactOptional().openapi({ readOnly: true, title: 'Well Tag Number' }),
  })
  .openapi({ required: ['owner_full_name'] })
  .openapi('WellTagSearch')

const BearerSecurityScheme = { in: 'header', name: 'JWT', type: 'apiKey' }

export const getAquiferCodesDemandIndexRoute = createRoute({
  method: 'get',
  path: '/aquifer-codes/demand/',
  tags: ['aquifer-codes'],
  description: 'return a list of aquifer demand codes',
  operationId: 'aquifer-codes_demand_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(AquiferDemandSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquiferCodesMaterialsIndexRoute = createRoute({
  method: 'get',
  path: '/aquifer-codes/materials/',
  tags: ['aquifer-codes'],
  description: 'return a list of aquifer material codes',
  operationId: 'aquifer-codes_materials_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(AquiferMaterialSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquiferCodesProductivityIndexRoute = createRoute({
  method: 'get',
  path: '/aquifer-codes/productivity/',
  tags: ['aquifer-codes'],
  description: 'return a list of aquifer productivity codes',
  operationId: 'aquifer-codes_productivity_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(AquiferProductivitySchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquiferCodesQualityConcernsIndexRoute = createRoute({
  method: 'get',
  path: '/aquifer-codes/quality-concerns/',
  tags: ['aquifer-codes'],
  description: 'return a list of quality concern codes',
  operationId: 'aquifer-codes_quality-concerns_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(QualityConcernSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquiferCodesSubtypesIndexRoute = createRoute({
  method: 'get',
  path: '/aquifer-codes/subtypes/',
  tags: ['aquifer-codes'],
  description: 'return a list of aquifer subtype codes',
  operationId: 'aquifer-codes_subtypes_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(AquiferSubtypeSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquiferCodesVulnerabilityIndexRoute = createRoute({
  method: 'get',
  path: '/aquifer-codes/vulnerability/',
  tags: ['aquifer-codes'],
  description: 'return a list of aquifer vulnerability codes',
  operationId: 'aquifer-codes_vulnerability_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(AquiferVulnerabilitySchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquiferCodesWaterUseIndexRoute = createRoute({
  method: 'get',
  path: '/aquifer-codes/water-use/',
  tags: ['aquifer-codes'],
  description: 'return a list of water use codes',
  operationId: 'aquifer-codes_water-use_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(WaterUseSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquifersIndexRoute = createRoute({
  method: 'get',
  path: '/aquifers/',
  tags: ['aquifers'],
  description: 'return a list of aquifers',
  operationId: 'aquifers_list',
  request: {
    query: z.object({
      aquifer_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'aquifer_id',
            required: false,
            schema: { type: 'number' },
          },
        }),
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A search term.',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(AquiferSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getAquifersNamesIndexRoute = createRoute({
  method: 'get',
  path: '/aquifers/names/',
  tags: ['aquifers'],
  description: 'List all aquifers in a simplified format',
  operationId: 'aquifers_names_list',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A search term.',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AquiferSerializerBasicSchema) } },
    },
  },
})

export const getAquifersAquiferIdIndexRoute = createRoute({
  method: 'get',
  path: '/aquifers/{aquifer_id}/',
  tags: ['aquifers'],
  description: 'return details of aquifers',
  operationId: 'aquifers_read',
  request: {
    params: z.object({
      aquifer_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'A unique integer value identifying this aquifer.',
            in: 'path',
            name: 'aquifer_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AquiferSchema } } },
  },
})

export const getAquifersAquiferIdFilesRoute = createRoute({
  method: 'get',
  path: '/aquifers/{aquifer_id}/files',
  tags: ['aquifers'],
  description: 'list files found for the aquifer identified in the uri',
  operationId: 'aquifers_files_list',
  request: {
    params: z.object({
      aquifer_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'aquifer_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              private: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              public: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCitiesDrillersIndexRoute = createRoute({
  method: 'get',
  path: '/cities/drillers/',
  tags: ['cities'],
  description:
    'returns a list of cities with a qualified, registered operator (driller or installer)',
  operationId: 'cities_drillers_list',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(CityListSchema) } } },
  },
})

export const getCitiesInstallersIndexRoute = createRoute({
  method: 'get',
  path: '/cities/installers/',
  tags: ['cities'],
  description:
    'returns a list of cities with a qualified, registered operator (driller or installer)',
  operationId: 'cities_installers_list',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(CityListSchema) } } },
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['config'],
  description: 'serves general configuration',
  operationId: 'config_list',
  responses: { 200: { description: '' } },
})

export const getDrillersIndexRoute = createRoute({
  method: 'get',
  path: '/drillers/',
  tags: ['drillers'],
  description: 'Returns a list of all person records',
  operationId: 'drillers_list',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A search term.',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PersonListSchema) } },
    },
  },
})

export const getDrillersNamesIndexRoute = createRoute({
  method: 'get',
  path: '/drillers/names/',
  tags: ['drillers'],
  description: 'Search for a person in the Register',
  operationId: 'drillers_names_list',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A search term.',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PersonNameSchema) } },
    },
  },
})

export const getDrillersPersonGuidFilesIndexRoute = createRoute({
  method: 'get',
  path: '/drillers/{person_guid}/files/',
  tags: ['drillers'],
  description: 'list files found for the aquifer identified in the uri',
  operationId: 'drillers_files_list',
  request: {
    params: z.object({
      person_guid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'person_guid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              private: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              public: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getKeycloakRoute = createRoute({
  method: 'get',
  path: '/keycloak',
  tags: ['keycloak'],
  description: 'serves keycloak config',
  operationId: 'keycloak_list',
  responses: { 200: { description: '' } },
})

export const getSubmissionsOptionsIndexRoute = createRoute({
  method: 'get',
  path: '/submissions/options/',
  tags: ['submissions'],
  description: 'Options required for submitting activity report forms',
  operationId: 'submissions_options_list',
  responses: { 200: { description: '' } },
})

export const getSurveysIndexRoute = createRoute({
  method: 'get',
  path: '/surveys/',
  tags: ['surveys'],
  description: 'returns a list of active surveys',
  operationId: 'surveys_list',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(SurveySchema) } } },
  },
})

export const getWellsIndexRoute = createRoute({
  method: 'get',
  path: '/wells/',
  tags: ['wells'],
  description: 'returns a list of wells',
  operationId: 'wells_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().exactOptional(),
              previous: z.url().exactOptional(),
              results: z.array(WellListSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getWellsTagsIndexRoute = createRoute({
  method: 'get',
  path: '/wells/tags/',
  tags: ['wells'],
  description: 'seach for wells by tag or owner',
  operationId: 'wells_tags_list',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A search term.',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(WellTagSearchSchema) } },
    },
  },
})

export const getWellsTagFilesRoute = createRoute({
  method: 'get',
  path: '/wells/{tag}/files',
  tags: ['wells'],
  description: 'list files found for the well identified in the uri',
  operationId: 'wells_files_list',
  request: {
    params: z.object({
      tag: z
        .string()
        .openapi({
          param: { in: 'path', name: 'tag', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              private: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              public: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getWellsWellTagNumberRoute = createRoute({
  method: 'get',
  path: '/wells/{well_tag_number}',
  tags: ['wells'],
  description: 'Return well detail.\nThis view is open to all, and has no permissions.',
  operationId: 'wells_read',
  request: {
    params: z.object({
      well_tag_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'A unique integer value identifying this well.',
            in: 'path',
            name: 'well_tag_number',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: WellDetailSchema } } },
  },
})
