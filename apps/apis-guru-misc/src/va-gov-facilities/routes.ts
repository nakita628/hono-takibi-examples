import { createRoute, z } from '@hono/zod-openapi'

const PatientSatisfactionSchema = z
  .object({
    primary_care_routine: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '% of Veterans who say they usually or always get an appointment when they need it at a primary care location.',
        example: 0.85,
      }),
    primary_care_urgent: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '% of Veterans who say they usually or always get an appointment when they need care right away at a primary care location.',
        example: 0.85,
      }),
    specialty_care_routine: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '% of Veterans who say they usually or always get an appointment when they need it at a specialty location.',
        example: 0.85,
      }),
    specialty_care_urgent: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '% of Veterans who say they usually or always get an appointment when they need care right away at a specialty location.',
        example: 0.85,
      }),
  })
  .nullable()
  .openapi({
    description: 'Veteran-reported satisfaction scores for health care services',
    required: [],
  })
  .openapi('PatientSatisfaction')

type SatisfactionType = {
  effective_date?: string | null
  health?: z.infer<typeof PatientSatisfactionSchema>
} | null

const AddressSchema = z
  .object({
    address_1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '50 Irving Street, Northwest' }),
    address_2: z.string().nullable().exactOptional().openapi({ example: 'Bldg 2' }),
    address_3: z.string().nullable().exactOptional().openapi({ example: 'Suite 7' }),
    city: z.string().nullable().exactOptional().openapi({ example: 'Washington' }),
    state: z.string().nullable().exactOptional().openapi({ example: 'DC' }),
    zip: z.string().nullable().exactOptional().openapi({ example: '20422-0001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('Address')

const AddressesSchema = z
  .object({ mailing: AddressSchema.exactOptional(), physical: AddressSchema.exactOptional() })
  .nullable()
  .openapi({ required: [] })
  .openapi('Addresses')

const ErrorMessageSchema = z
  .object({
    code: z.string().exactOptional().openapi({ example: '103' }),
    detail: z.string().exactOptional().openapi({ example: 'Detailed error message' }),
    status: z.string().exactOptional().openapi({ example: '400' }),
    title: z.string().exactOptional().openapi({ example: 'Error title' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorMessage')

const ApiErrorSchema = z
  .object({ errors: z.array(ErrorMessageSchema) })
  .openapi({ description: 'API invocation or processing error', required: ['errors'] })
  .openapi('ApiError')

const AppointmentPhoneNumberSchema = z
  .object({
    extension: z.string().nullable().exactOptional().openapi({ example: '71234' }),
    label: z.string().nullable().exactOptional().openapi({ example: 'Main phone' }),
    number: z.string().nullable().exactOptional().openapi({ example: '937-268-6511' }),
    type: z.string().nullable().exactOptional().openapi({ example: 'tel' }),
  })
  .nullable()
  .openapi({ description: 'Phone number information for scheduling an appointment.', required: [] })
  .openapi('AppointmentPhoneNumber')

const DetailedServiceEmailContactSchema = z
  .object({
    email_address: z.string().nullable().exactOptional().openapi({ example: 'georgea@va.gov' }),
    email_label: z.string().nullable().exactOptional().openapi({ example: 'George Anderson' }),
  })
  .nullable()
  .openapi({ description: 'Email contact information.', required: [] })
  .openapi('DetailedServiceEmailContact')

const DetailedServiceHoursSchema = z
  .object({
    Friday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    Monday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    Saturday: z.string().nullable().exactOptional().openapi({ example: 'Closed' }),
    Sunday: z.string().nullable().exactOptional().openapi({ example: 'Closed' }),
    Thursday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    Tuesday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    Wednesday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
  })
  .nullable()
  .openapi({
    description:
      'Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.',
    required: [],
  })
  .openapi('DetailedServiceHours')

const DetailedServiceAddressSchema = z
  .object({
    address_line1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '50 Irving Street, Northwest' }),
    address_line2: z.string().nullable().exactOptional(),
    building_name_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Building name and/or number of service.',
        example: 'Baxter Building',
      }),
    city: z.string().nullable().exactOptional().openapi({ example: 'Washington' }),
    clinic_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Clinic name for service.', example: 'Baxter Clinic' }),
    country_code: z.string().nullable().exactOptional().openapi({ example: 'US' }),
    state: z.string().nullable().exactOptional().openapi({ example: 'DC' }),
    wing_floor_or_room_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Wing, floor, or room number of service.', example: 'Wing East' }),
    zip_code: z.string().nullable().exactOptional().openapi({ example: '20422-0001' }),
  })
  .nullable()
  .openapi({ description: 'Service location address.', required: [] })
  .openapi('DetailedServiceAddress')

const DetailedServiceLocationSchema = z
  .object({
    additional_hours_info: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Additional information related to service location hours.',
        example: 'Location hours times may vary depending on staff availability',
      }),
    appointment_phones: z
      .array(AppointmentPhoneNumberSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of appointment phone information.' }),
    email_contacts: z
      .array(DetailedServiceEmailContactSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of email contact information.' }),
    facility_service_hours: DetailedServiceHoursSchema.exactOptional(),
    service_location_address: DetailedServiceAddressSchema.exactOptional(),
  })
  .nullable()
  .openapi({ description: 'Details for a location offering a service.', required: [] })
  .openapi('DetailedServiceLocation')

const DetailedServiceSchema = z
  .object({
    appointment_leadin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Additional appointment information. May contain html / string formatting characters.',
        example:
          "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
      }),
    appointment_phones: z
      .array(AppointmentPhoneNumberSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of phone numbers related to scheduling appointments for this service.',
      }),
    description_facility: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated until further notice.', example: 'null' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Service name.', example: 'COVID-19 vaccines' }),
    online_scheduling_available: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'String detailing online scheduling availability.',
        example: 'True',
      }),
    path: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "URL to a page with additional details for this service within the associated facility's health care system.",
        example: 'https://www.boston.va.gov/services/covid-19-vaccines.asp',
      }),
    referral_required: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'String detailing if referrals are required for the service.',
        example: 'False',
      }),
    service_locations: z
      .array(DetailedServiceLocationSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of service locations.' }),
    walk_ins_accepted: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'String detailing if walk-ins are accepted for the service.',
        example: 'True',
      }),
  })
  .nullable()
  .openapi({ description: 'Detailed information of a facility service.', required: [] })
  .openapi('DetailedService')

const DistanceSchema = z
  .object({ distance: z.number(), id: z.string() })
  .openapi({ required: ['distance', 'id'] })
  .openapi('Distance')

const FacilitiesIdsResponseSchema = z
  .object({
    data: z
      .array(z.string().openapi({ example: '["vha_688"]' }))
      .exactOptional()
      .openapi({ example: ['vha_688'] }),
  })
  .openapi({ required: [] })
  .openapi('FacilitiesIdsResponse')

const PaginationSchema = z
  .object({
    current_page: z.int32().openapi({ example: 1 }),
    per_page: z.int32().openapi({ example: 10 }),
    total_entries: z.int32().openapi({ example: 2162 }),
    total_pages: z.int32().openapi({ example: 217 }),
  })
  .openapi({ required: ['current_page', 'per_page', 'total_entries', 'total_pages'] })
  .openapi('Pagination')

const FacilitiesMetadataSchema = z
  .object({ distances: z.array(DistanceSchema), pagination: PaginationSchema })
  .openapi({ required: ['distances', 'pagination'] })
  .openapi('FacilitiesMetadata')

const HoursSchema = z
  .object({
    friday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    monday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    saturday: z.string().nullable().exactOptional().openapi({ example: 'Closed' }),
    sunday: z.string().nullable().exactOptional().openapi({ example: 'Closed' }),
    thursday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    tuesday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
    wednesday: z.string().nullable().exactOptional().openapi({ example: '9AM-5PM' }),
  })
  .nullable()
  .openapi({
    description:
      'Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.',
    required: [],
  })
  .openapi('Hours')

const OperatingStatusSchema = z
  .object({
    additional_info: z
      .string()
      .min(0)
      .max(300)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Details of facility notices for visitors, such as messages about parking lot closures or floor visitation information.',
      }),
    code: z
      .enum(['NORMAL', 'NOTICE', 'LIMITED', 'CLOSED'])
      .nullable()
      .openapi({
        description:
          'Status codes indicate normal hours/services, limited hours/services, closed operations, or published facility notices for visitors.',
        example: 'NORMAL',
      }),
  })
  .nullable()
  .openapi({
    description:
      'Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.',
    example: 'NORMAL',
    required: ['code'],
  })
  .openapi('OperatingStatus')

const PhoneSchema = z
  .object({
    after_hours: z.string().nullable().exactOptional().openapi({ example: '202-555-1212' }),
    enrollment_coordinator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '202-555-1212' }),
    fax: z.string().nullable().exactOptional().openapi({ example: '202-555-1212' }),
    main: z.string().nullable().exactOptional().openapi({ example: '202-555-1212' }),
    mental_health_clinic: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '202-555-1212' }),
    patient_advocate: z.string().nullable().exactOptional().openapi({ example: '202-555-1212' }),
    pharmacy: z.string().nullable().exactOptional().openapi({ example: '202-555-1212' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('Phone')

const SatisfactionSchema: z.ZodType<SatisfactionType> = z
  .lazy(() =>
    z
      .object({
        effective_date: z.iso.date().nullable().exactOptional().openapi({ example: '2018-01-01' }),
        health: PatientSatisfactionSchema.exactOptional(),
      })
      .nullable()
      .openapi({ required: [] }),
  )
  .openapi('Satisfaction')

const ServicesSchema = z
  .object({
    benefits: z
      .array(
        z
          .enum([
            'ApplyingForBenefits',
            'BurialClaimAssistance',
            'DisabilityClaimAssistance',
            'eBenefitsRegistrationAssistance',
            'EducationAndCareerCounseling',
            'EducationClaimAssistance',
            'FamilyMemberClaimAssistance',
            'HomelessAssistance',
            'InsuranceClaimAssistanceAndFinancialCounseling',
            'IntegratedDisabilityEvaluationSystemAssistance',
            'Pensions',
            'PreDischargeClaimAssistance',
            'TransitionAssistance',
            'UpdatingDirectDepositInformation',
            'VAHomeLoanAssistance',
            'VocationalRehabilitationAndEmploymentAssistance',
          ])
          .nullable(),
      )
      .nullable()
      .exactOptional(),
    health: z
      .array(
        z
          .enum([
            'Audiology',
            'Cardiology',
            'CaregiverSupport',
            'Covid19Vaccine',
            'DentalServices',
            'Dermatology',
            'EmergencyCare',
            'Gastroenterology',
            'Gynecology',
            'MentalHealthCare',
            'Ophthalmology',
            'Optometry',
            'Orthopedics',
            'Nutrition',
            'Podiatry',
            'PrimaryCare',
            'SpecialtyCare',
            'UrgentCare',
            'Urology',
            'WomensHealth',
          ])
          .nullable(),
      )
      .nullable()
      .exactOptional(),
    last_updated: z.iso.date().nullable().exactOptional().openapi({ example: '2018-01-01' }),
    other: z.array(z.literal('OnlineScheduling').nullable()).nullable().exactOptional(),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('Services')

const PatientWaitTimeSchema = z
  .object({
    established: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Average number of days a patient who has already been to this location has to wait for a non-urgent appointment.',
        example: 5,
      }),
    new: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Average number of days a Veteran who hasn't been to this location has to wait for a non-urgent appointment.",
        example: 10,
      }),
    service: z.enum([
      'Audiology',
      'Cardiology',
      'CaregiverSupport',
      'Covid19Vaccine',
      'DentalServices',
      'Dermatology',
      'EmergencyCare',
      'Gastroenterology',
      'Gynecology',
      'MentalHealthCare',
      'Ophthalmology',
      'Optometry',
      'Orthopedics',
      'Nutrition',
      'Podiatry',
      'PrimaryCare',
      'SpecialtyCare',
      'UrgentCare',
      'Urology',
      'WomensHealth',
    ]),
  })
  .nullable()
  .openapi({
    description:
      'Expected wait times for new and established patients for a given health care service',
    required: ['service'],
  })
  .openapi('PatientWaitTime')

const WaitTimesSchema = z
  .object({
    effective_date: z.iso.date().nullable().exactOptional().openapi({ example: '2018-01-01' }),
    health: z.array(PatientWaitTimeSchema).nullable().exactOptional(),
  })
  .nullable()
  .openapi({ example: 10, required: [] })
  .openapi('WaitTimes')

const FacilityAttributesSchema = z
  .object({
    active_status: z
      .enum(['A', 'T'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'This field is deprecated and replaced with "operating_status".' }),
    address: AddressesSchema.exactOptional(),
    classification: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'VA Medical Center (VAMC)' }),
    detailed_services: z.array(DetailedServiceSchema).nullable().exactOptional(),
    facility_type: z
      .enum(['va_benefits_facility', 'va_cemetery', 'va_health_facility', 'vet_center'])
      .openapi({ example: 'va_health_facility' }),
    hours: HoursSchema.exactOptional(),
    lat: z.float32().openapi({ description: 'Facility latitude', example: 38.9311137 }),
    long: z.float32().openapi({ description: 'Facility longitude', example: -77.0109110499999 }),
    mobile: z.boolean().nullable().exactOptional().openapi({ example: false }),
    name: z.string().openapi({ example: 'Washington VA Medical Center' }),
    operating_status: OperatingStatusSchema,
    operational_hours_special_instructions: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example: 'Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.',
      }),
    phone: PhoneSchema.exactOptional(),
    satisfaction: SatisfactionSchema.exactOptional(),
    services: ServicesSchema.exactOptional(),
    time_zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Facility time zone', example: 'America/New_York' }),
    visn: z.string().nullable().exactOptional().openapi({ example: '20' }),
    wait_times: WaitTimesSchema.exactOptional(),
    website: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://www.washingtondc.va.gov' }),
  })
  .nullable()
  .openapi({ required: ['facility_type', 'lat', 'long', 'name', 'operating_status'] })
  .openapi('FacilityAttributes')

const FacilitySchema = z
  .object({
    attributes: FacilityAttributesSchema,
    id: z.string().openapi({ example: 'vha_688' }),
    type: z.literal('va_facilities'),
  })
  .openapi({
    description: 'JSON API-compliant object describing a VA facility',
    required: ['attributes', 'id', 'type'],
  })
  .openapi('Facility')

const PageLinksSchema = z
  .object({
    first: z.string().nullable().exactOptional(),
    last: z.string().nullable().exactOptional(),
    next: z.string().nullable().exactOptional(),
    prev: z.string().nullable().exactOptional(),
    related: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '/services/va_facilities/v0/facilities?id=vha_688' }),
    self: z.string(),
  })
  .openapi({ required: ['self'] })
  .openapi('PageLinks')

const FacilitiesResponseSchema = z
  .object({
    data: z.array(FacilitySchema).exactOptional(),
    links: PageLinksSchema,
    meta: FacilitiesMetadataSchema,
  })
  .openapi({ required: ['links', 'meta'] })
  .openapi('FacilitiesResponse')

const FacilityReadResponseSchema = z
  .object({ data: FacilitySchema })
  .openapi({ required: ['data'] })
  .openapi('FacilityReadResponse')

const GenericErrorSchema = z
  .object({ message: z.string().openapi({ example: 'Detailed Error Message' }) })
  .openapi({
    description:
      'A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values).',
    required: ['message'],
  })
  .openapi('GenericError')

const GeometrySchema = z
  .object({
    coordinates: z
      .array(z.number().nullable())
      .length(2)
      .nullable()
      .exactOptional()
      .openapi({ example: [-77.0367761, 38.9004181] }),
    type: z.literal('Point').openapi({ example: 'Point' }),
  })
  .nullable()
  .openapi({ required: ['type'] })
  .openapi('Geometry')

const PropertiesSchema = z
  .object({
    active_status: z.enum(['A', 'T']).nullable().exactOptional(),
    address: AddressesSchema.exactOptional(),
    classification: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'VA Medical Center (VAMC)' }),
    detailed_services: z.array(DetailedServiceSchema).nullable().exactOptional(),
    facility_type: z.enum([
      'va_benefits_facility',
      'va_cemetery',
      'va_health_facility',
      'vet_center',
    ]),
    hours: HoursSchema.exactOptional(),
    id: z.string().openapi({ example: 'vha_688' }),
    mobile: z.boolean().nullable().exactOptional().openapi({ example: false }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'Washington VA Medical Center' }),
    operating_status: OperatingStatusSchema,
    operational_hours_special_instructions: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'Administrative hours are Monday-Friday 8:00 a.m. to 4:30 p.m.' }),
    phone: PhoneSchema.exactOptional(),
    satisfaction: SatisfactionSchema.exactOptional(),
    services: ServicesSchema.exactOptional(),
    time_zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Facility time zone', example: 'America/New_York' }),
    visn: z.string().nullable().exactOptional().openapi({ example: '20' }),
    wait_times: WaitTimesSchema.exactOptional(),
    website: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://www.washingtondc.va.gov' }),
  })
  .openapi({ required: ['facility_type', 'id', 'operating_status'] })
  .openapi('Properties')

const GeoFacilitySchema = z
  .object({
    geometry: GeometrySchema,
    properties: PropertiesSchema,
    type: z.literal('Feature').openapi({ example: 'Feature' }),
  })
  .openapi({
    description: 'GeoJSON-complaint Feature object describing a VA Facility',
    required: ['geometry', 'properties', 'type'],
  })
  .openapi('GeoFacility')

const GeoFacilitiesResponseSchema = z
  .object({
    features: z.array(GeoFacilitySchema).exactOptional(),
    type: z.literal('FeatureCollection'),
  })
  .openapi({ required: ['type'] })
  .openapi('GeoFacilitiesResponse')

const GeoFacilityReadResponseSchema = z
  .object({ geometry: GeometrySchema, properties: PropertiesSchema, type: z.literal('Feature') })
  .openapi({ required: ['geometry', 'properties', 'type'] })
  .openapi('GeoFacilityReadResponse')

const MetaSchema = z
  .object({ band_version: z.string().nullable().exactOptional().openapi({ example: 'APR2021' }) })
  .nullable()
  .openapi({
    description: 'JSON API-compliant object containing metadata about this response',
    required: [],
  })
  .openapi('Meta')

const NearbyAttributesSchema = z
  .object({
    max_time: z.int32().openapi({ example: 20 }),
    min_time: z.int32().openapi({ example: 10 }),
  })
  .nullable()
  .openapi({ required: ['max_time', 'min_time'] })
  .openapi('NearbyAttributes')

const NearbySchema = z
  .object({
    attributes: NearbyAttributesSchema,
    id: z.string().openapi({ example: 'vha_688' }),
    type: z.literal('NearbyFacility').openapi({ example: 'va_health_facility' }),
  })
  .nullable()
  .openapi({
    description: 'JSON API-compliant object describing a nearby VA facility',
    required: ['attributes', 'id', 'type'],
  })
  .openapi('Nearby')

const NearbyResponseSchema = z
  .object({ data: z.array(NearbySchema), meta: MetaSchema.exactOptional() })
  .openapi({ required: ['data'] })
  .openapi('NearbyResponse')

const ApikeySecurityScheme = { in: 'header', name: 'apikey', type: 'apiKey' }

export const getFacilitiesRoute = createRoute({
  method: 'get',
  path: '/facilities',
  tags: ['facilities'],
  summary: 'Query facilities by location or IDs, with optional filters',
  description:
    'Query facilities by bounding box, latitude and longitude, state, visn, or zip code. Bounding box is specified as four `bbox[]` parameters, long1, lat1, long2, lat2. (Relative order is unimportant.)\n\nA query by latitude and longitude returns all facilities in the system, sorted by distance from that location.\n\nAll location queries support filtering by facility type, available services, and mobile status.\n\nOne can also retrieve facilities by ID using a comma-separated list like `?ids=id1,id2`. When requesting multiple facilities by ID, the API will return as many results as it can find matches for, omitting IDs where there is no match. It will not return an HTTP error code if it is unable to match a requested ID. Clients may supply IDs up to the limit their HTTP client enforces for URI path lengths. (Usually 2048 characters.)\n\nResults are paginated. JSON responses include pagination information in the standard JSON API "links" and "meta" elements. \n\n### Parameter combinations\nYou may optionally specify `page` and `per_page` with any query. You must specify one of the following parameter combinations: \n\n- `bbox[]`, with the option of any combination of `type`, `services[]`, or `mobile`\n\n- `ids`\n\n- `lat` and `long`, with the option of any combination of `ids`, `type`, `services[]`, or `mobile`\n\n- `state`, with the option of any combination of `type`, `services[]`, or `mobile`\n\n- `visn`\n\n- `zip`, with the option of any combination of `type`, `services[]`, or `mobile`\n\n Invalid combinations will return `400 Bad Request`.',
  operationId: 'getFacilitiesByLocation',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of comma-separated facility IDs to retrieve in a single request. Can be combined with lat and long parameters to retrieve facilities sorted by distance from a location.',
            examples: { ids: { description: 'ids', value: ['vha_688', 'vha_644'] } },
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Zip code to search for facilities. More detailed zip codes can be passed in, but only the first five digits are used to determine facilities to return.',
            examples: { zip: { description: 'zip', value: '80301-1000' } },
            in: 'query',
            name: 'zip',
            schema: { format: '##### or #####-####', type: 'string' },
            required: false,
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'State in which to search for facilities. Except in rare cases, this is two characters.',
            examples: { state: { description: 'state', value: 'CO' } },
            in: 'query',
            name: 'state',
            schema: { format: 'XX', type: 'string' },
            required: false,
          },
        }),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Latitude of point to search for facilities, in WGS84 coordinate reference system.',
            examples: { coordinates: { description: 'coordinates', value: 56.7 } },
            in: 'query',
            name: 'lat',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      long: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Longitude of point to search for facilities, in WGS84 coordinate reference system.',
            examples: { coordinates: { description: 'coordinates', value: -123.4 } },
            in: 'query',
            name: 'long',
            schema: { format: 'float', type: 'number' },
            style: 'form',
            required: false,
          },
        }),
      'bbox[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.float32(),
              ),
            )
            .length(4),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Bounding box (longitude, latitude, longitude, latitude) within which facilities will be returned. (WGS84 coordinate reference system)',
            examples: { bbox: { description: 'bbox', value: [-105.4, 39.4, -104.5, 40.1] } },
            in: 'query',
            name: 'bbox[]',
            schema: {
              items: { format: 'float', type: 'number' },
              maxItems: 4,
              minItems: 4,
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      visn: z
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
            description: 'VISN search of matching facilities.',
            in: 'query',
            name: 'visn',
            schema: { type: 'number' },
            required: false,
          },
        }),
      type: z
        .enum(['health', 'cemetery', 'benefits', 'vet_center'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional facility type search filter',
            in: 'query',
            name: 'type',
            schema: { enum: ['health', 'cemetery', 'benefits', 'vet_center'], type: 'string' },
            required: false,
          },
        }),
      'services[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional facility service search filter',
            in: 'query',
            name: 'services[]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      mobile: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional facility mobile search filter',
            in: 'query',
            name: 'mobile',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page of results to return per paginated response.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per paginated response.',
            in: 'query',
            name: 'per_page',
            schema: { default: 10, format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/geo+json': { schema: GeoFacilitiesResponseSchema },
        'application/json': { schema: FacilitiesResponseSchema },
        'application/vnd.geo+json': { schema: GeoFacilitiesResponseSchema },
      },
    },
    401: {
      description: 'Missing API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    403: {
      description: 'Invalid API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    406: {
      description: 'Requested format unacceptable',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    429: {
      description: 'API rate limit exceeded',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
  },
  security: [{ apikey: [] }],
})

export const getFacilitiesAllRoute = createRoute({
  method: 'get',
  path: '/facilities/all',
  tags: ['facilities'],
  summary: 'Bulk download information for all facilities',
  description:
    'Retrieve all available facilities in a single operation, formatted as either a GeoJSON FeatureCollection or as a CSV. Due to the complexity of the facility resource type, the CSV response contains a subset of available facility data - specifically it omits the available services, patient satisfaction, and patient wait time data.',
  operationId: 'getAllFacilities',
  request: {
    headers: z.object({
      Accept: z
        .enum(['application/geo+json', 'application/vnd.geo+json', 'text/csv'])
        .openapi({
          param: {
            example: 'application/geo+json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: {
              enum: ['application/geo+json', 'application/vnd.geo+json', 'text/csv'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/geo+json': { schema: GeoFacilitiesResponseSchema },
        'application/json': { schema: GeoFacilitiesResponseSchema },
        'application/vnd.geo+json': { schema: GeoFacilitiesResponseSchema },
        'text/csv': {
          schema: z
            .string()
            .openapi({
              example:
                'id,name,station_id,latitude,longitude,facility_type,classification,website,physical_address_1,physical_address_2,physical_address_3,physical_city,physical_state,physical_zip,mailing_address_1,mailing_address_2,mailing_address_3,mailing_city,mailing_state,mailing_zip,phone_main,phone_fax,phone_mental_health_clinic,phone_pharmacy,phone_after_hours,phone_patient_advocate,phone_enrollment_coordinator,hours_monday,hours_tuesay,hours_wednesday,hours_thursday,hours_friday,hours_saturday,hours_sunday,mobile,active_status,visn\nvc_0101V,Boston Vet Center,0101V,42.3445959000001,-71.0361051099999,vet_center,,,7 Drydock Avenue,Suite 2070,,Boston,MA,2210,,,,,,,857-203-6461 x,,,,,,,800AM-700PM,800AM-800PM,800AM-700PM,800AM-800PM,800AM-600PM,-,-,,,\nvba_362b,Houston Regional Benefit Office at Frank Tejeda Outpatient Clinic,362b,29.51690196,-98.59601936,va_benefits_facility,Outbased,NULL,5788 Eckhert Road,,,San Antonio,TX,78240,,,,,,,210-699-5040,210-699-5079,,,,,,,,,,,,,,,\nvha_459GH,Saipan VA Clinic,459GH,15.216794,145.729385,va_health_facility,Other Outpatient Services (OOS),,Marina Heights Business Park - Garapan,Medical Associates of the Pacific,MH-II Building Suite 100 and 206,Saipan,MP,96950-9998,,,,,,,670-322-0035 x,670-322-0038 x,"",800-465-8387 x,800-214-1306 x,670-322-0035 x,808-433-7600 x,,,,,,,,false,A,21',
            }),
        },
      },
    },
    401: {
      description: 'Missing API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    403: {
      description: 'Invalid API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    406: {
      description: 'Requested format unacceptable',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    429: {
      description: 'API rate limit exceeded',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
  },
  security: [{ apikey: [] }],
})

export const getFacilitiesIdRoute = createRoute({
  method: 'get',
  path: '/facilities/{id}',
  tags: ['facilities'],
  summary: 'Retrieve a specific facility by ID',
  operationId: 'getFacilityById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Facility ID, in the form `<prefix>_<station>`, where prefix is one of "vha", "vba", "nca", or "vc", for health facility, benefits, cemetery, or vet center, respectively.',
            example: 'vha_688',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/geo+json': { schema: GeoFacilityReadResponseSchema },
        'application/json': { schema: FacilityReadResponseSchema },
        'application/vnd.geo+json': { schema: GeoFacilityReadResponseSchema },
      },
    },
    400: {
      description: 'Bad request - invalid or missing query parameters',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    401: {
      description: 'Missing API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    403: {
      description: 'Invalid API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    404: {
      description: 'Facility not found',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    406: {
      description: 'Requested format unacceptable',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    429: {
      description: 'API rate limit exceeded',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
  },
  security: [{ apikey: [] }],
})

export const getIdsRoute = createRoute({
  method: 'get',
  path: '/ids',
  tags: ['facilities'],
  summary: 'Bulk download of all facility IDs',
  description: 'Retrieves all available facility IDs only',
  operationId: 'getFacilityIds',
  request: {
    query: z.object({
      type: z
        .enum(['health', 'cemetery', 'benefits', 'vet_center'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional facility type search filter',
            in: 'query',
            name: 'type',
            schema: { enum: ['health', 'cemetery', 'benefits', 'vet_center'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FacilitiesIdsResponseSchema } },
    },
    401: {
      description: 'Missing API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    403: {
      description: 'Invalid API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    406: {
      description: 'Requested format unacceptable',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    429: {
      description: 'API rate limit exceeded',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
  },
  security: [{ apikey: [] }],
})

export const getNearbyRoute = createRoute({
  method: 'get',
  path: '/nearby',
  tags: ['facilities'],
  summary:
    'Retrieve all VA health facilities reachable by driving within the specified time period',
  description:
    'Retrieve all VA health facilities that are located within a specified drive time from a specified location based on address (`street_address`, `city`, `state`, and `zip`) or coordinates (`lat` and `lng`). Optional filter parameters include `drive_time` and `services[]`. \n\nResults of this operation are paginated. Responses include pagination information in the standard JSON API "links" and "meta" elements. \n\nThe "attributes" element has information about the drive-time band that contains the requested location for each facility in the response. The values of `min_time` and `max_time` are in minutes. For example, a facility returned with a matched `min_time` of 10 and `max_time` of 20 is a 10 to 20 minute drive from the requested location.\n\nTo retrieve full details for nearby facilities, see the documentation for `/facilities?ids`.',
  operationId: 'getNearbyFacilities',
  request: {
    query: z.object({
      street_address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Street address of the location from which drive time will be calculated.',
            examples: { address: { description: 'address', value: '1350 I St. NW' } },
            in: 'query',
            name: 'street_address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City of the location from which drive time will be calculated.',
            examples: { address: { description: 'address', value: 'Washington' } },
            in: 'query',
            name: 'city',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Two character state code of the location from which drive time will be calculated.',
            examples: { address: { description: 'address', value: 'DC' } },
            in: 'query',
            name: 'state',
            schema: { type: 'string' },
            required: false,
          },
        }),
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Zip code of the location from which drive time will be calculated.',
            examples: { address: { description: 'address', value: '20005-3305' } },
            in: 'query',
            name: 'zip',
            schema: { description: '##### or #####-####', type: 'string' },
            required: false,
          },
          description: '##### or #####-####',
        }),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Latitude of the location from which drive time will be calculated.',
            examples: { coordinates: { description: 'coordinates', value: 56.7 } },
            in: 'query',
            name: 'lat',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Longitude of the location from which drive time will be calculated.',
            examples: { coordinates: { description: 'coordinates', value: -123.4 } },
            in: 'query',
            name: 'lng',
            schema: { format: 'float', type: 'number' },
            style: 'form',
            required: false,
          },
        }),
      drive_time: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(10),
            z.literal(20),
            z.literal(30),
            z.literal(40),
            z.literal(50),
            z.literal(60),
            z.literal(70),
            z.literal(80),
            z.literal(90),
          ]),
        )
        .default(90)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter to only include facilities that are within the specified number of drive time minutes from the requested location.',
            in: 'query',
            name: 'drive_time',
            schema: {
              default: 90,
              enum: [10, 20, 30, 40, 50, 60, 70, 80, 90],
              format: 'int32',
              type: 'integer',
            },
            required: false,
          },
        }),
      'services[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional facility service search filter',
            in: 'query',
            name: 'services[]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page of results to return per paginated response.',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per paginated response.',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NearbyResponseSchema } },
    },
    400: {
      description: 'Missing Required Or Ambiguous Parameters',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    401: {
      description: 'Missing API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    403: {
      description: 'Invalid API token',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
    406: {
      description: 'Requested format unacceptable',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
    429: {
      description: 'API rate limit exceeded',
      content: { 'application/json': { schema: ApiErrorSchema } },
    },
  },
  security: [{ apikey: [] }],
})
