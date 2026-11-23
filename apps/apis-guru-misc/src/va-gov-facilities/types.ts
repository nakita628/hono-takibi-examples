type Geometry = { coordinates?: ((number | null)[] | null) | undefined; type: 'Point' } | null
type Address = {
  address_1?: (string | null) | undefined
  address_2?: (string | null) | undefined
  address_3?: (string | null) | undefined
  city?: (string | null) | undefined
  state?: (string | null) | undefined
  zip?: (string | null) | undefined
} | null
type Addresses = { mailing?: Address | undefined; physical?: Address | undefined } | null
type AppointmentPhoneNumber = {
  extension?: (string | null) | undefined
  label?: (string | null) | undefined
  number?: (string | null) | undefined
  type?: (string | null) | undefined
} | null
type DetailedServiceEmailContact = {
  email_address?: (string | null) | undefined
  email_label?: (string | null) | undefined
} | null
type DetailedServiceHours = {
  Friday?: (string | null) | undefined
  Monday?: (string | null) | undefined
  Saturday?: (string | null) | undefined
  Sunday?: (string | null) | undefined
  Thursday?: (string | null) | undefined
  Tuesday?: (string | null) | undefined
  Wednesday?: (string | null) | undefined
} | null
type DetailedServiceAddress = {
  address_line1?: (string | null) | undefined
  address_line2?: (string | null) | undefined
  building_name_number?: (string | null) | undefined
  city?: (string | null) | undefined
  clinic_name?: (string | null) | undefined
  country_code?: (string | null) | undefined
  state?: (string | null) | undefined
  wing_floor_or_room_number?: (string | null) | undefined
  zip_code?: (string | null) | undefined
} | null
type DetailedServiceLocation = {
  additional_hours_info?: (string | null) | undefined
  appointment_phones?: (AppointmentPhoneNumber[] | null) | undefined
  email_contacts?: (DetailedServiceEmailContact[] | null) | undefined
  facility_service_hours?: DetailedServiceHours | undefined
  service_location_address?: DetailedServiceAddress | undefined
} | null
type DetailedService = {
  appointment_leadin?: (string | null) | undefined
  appointment_phones?: (AppointmentPhoneNumber[] | null) | undefined
  description_facility?: (string | null) | undefined
  name?: (string | null) | undefined
  online_scheduling_available?: (string | null) | undefined
  path?: (string | null) | undefined
  referral_required?: (string | null) | undefined
  service_locations?: (DetailedServiceLocation[] | null) | undefined
  walk_ins_accepted?: (string | null) | undefined
} | null
type Hours = {
  friday?: (string | null) | undefined
  monday?: (string | null) | undefined
  saturday?: (string | null) | undefined
  sunday?: (string | null) | undefined
  thursday?: (string | null) | undefined
  tuesday?: (string | null) | undefined
  wednesday?: (string | null) | undefined
} | null
type OperatingStatus = {
  additional_info?: (string | null) | undefined
  code: 'NORMAL' | 'NOTICE' | 'LIMITED' | 'CLOSED'
} | null
type Phone = {
  after_hours?: (string | null) | undefined
  enrollment_coordinator?: (string | null) | undefined
  fax?: (string | null) | undefined
  main?: (string | null) | undefined
  mental_health_clinic?: (string | null) | undefined
  patient_advocate?: (string | null) | undefined
  pharmacy?: (string | null) | undefined
} | null
type PatientSatisfaction = {
  primary_care_routine?: (number | null) | undefined
  primary_care_urgent?: (number | null) | undefined
  specialty_care_routine?: (number | null) | undefined
  specialty_care_urgent?: (number | null) | undefined
} | null
type Satisfaction = {
  effective_date?: (string | null) | undefined
  health?: PatientSatisfaction | undefined
} | null
type Services = {
  benefits?:
    | (
        | (
            | 'ApplyingForBenefits'
            | 'BurialClaimAssistance'
            | 'DisabilityClaimAssistance'
            | 'eBenefitsRegistrationAssistance'
            | 'EducationAndCareerCounseling'
            | 'EducationClaimAssistance'
            | 'FamilyMemberClaimAssistance'
            | 'HomelessAssistance'
            | 'InsuranceClaimAssistanceAndFinancialCounseling'
            | 'IntegratedDisabilityEvaluationSystemAssistance'
            | 'Pensions'
            | 'PreDischargeClaimAssistance'
            | 'TransitionAssistance'
            | 'UpdatingDirectDepositInformation'
            | 'VAHomeLoanAssistance'
            | 'VocationalRehabilitationAndEmploymentAssistance'
          )[]
        | null
      )
    | undefined
  health?:
    | (
        | (
            | 'Audiology'
            | 'Cardiology'
            | 'CaregiverSupport'
            | 'Covid19Vaccine'
            | 'DentalServices'
            | 'Dermatology'
            | 'EmergencyCare'
            | 'Gastroenterology'
            | 'Gynecology'
            | 'MentalHealthCare'
            | 'Ophthalmology'
            | 'Optometry'
            | 'Orthopedics'
            | 'Nutrition'
            | 'Podiatry'
            | 'PrimaryCare'
            | 'SpecialtyCare'
            | 'UrgentCare'
            | 'Urology'
            | 'WomensHealth'
          )[]
        | null
      )
    | undefined
  last_updated?: (string | null) | undefined
  other?: ('OnlineScheduling'[] | null) | undefined
} | null
type PatientWaitTime = {
  established?: (number | null) | undefined
  new?: (number | null) | undefined
  service:
    | 'Audiology'
    | 'Cardiology'
    | 'CaregiverSupport'
    | 'Covid19Vaccine'
    | 'DentalServices'
    | 'Dermatology'
    | 'EmergencyCare'
    | 'Gastroenterology'
    | 'Gynecology'
    | 'MentalHealthCare'
    | 'Ophthalmology'
    | 'Optometry'
    | 'Orthopedics'
    | 'Nutrition'
    | 'Podiatry'
    | 'PrimaryCare'
    | 'SpecialtyCare'
    | 'UrgentCare'
    | 'Urology'
    | 'WomensHealth'
} | null
type WaitTimes = {
  effective_date?: (string | null) | undefined
  health?: (PatientWaitTime[] | null) | undefined
} | null
type Properties = {
  active_status?: 'A' | 'T' | undefined
  address?: Addresses | undefined
  classification?: (string | null) | undefined
  detailed_services?: (DetailedService[] | null) | undefined
  facility_type: 'va_benefits_facility' | 'va_cemetery' | 'va_health_facility' | 'vet_center'
  hours?: Hours | undefined
  id: string
  mobile?: (boolean | null) | undefined
  name?: (string | null) | undefined
  operating_status: OperatingStatus
  operational_hours_special_instructions?: (string | null) | undefined
  phone?: Phone | undefined
  satisfaction?: Satisfaction | undefined
  services?: Services | undefined
  time_zone?: string | undefined
  visn?: (string | null) | undefined
  wait_times?: WaitTimes | undefined
  website?: (string | null) | undefined
}
type GeoFacility = { geometry: Geometry; properties: Properties; type: 'Feature' }
type GeoFacilitiesResponse = { features?: GeoFacility[] | undefined; type: 'FeatureCollection' }
type FacilityAttributes = {
  active_status?: 'A' | 'T' | undefined
  address?: Addresses | undefined
  classification?: (string | null) | undefined
  detailed_services?: (DetailedService[] | null) | undefined
  facility_type: 'va_benefits_facility' | 'va_cemetery' | 'va_health_facility' | 'vet_center'
  hours?: Hours | undefined
  lat: number
  long: number
  mobile?: (boolean | null) | undefined
  name: string
  operating_status: OperatingStatus
  operational_hours_special_instructions?: (string | null) | undefined
  phone?: Phone | undefined
  satisfaction?: Satisfaction | undefined
  services?: Services | undefined
  time_zone?: string | undefined
  visn?: (string | null) | undefined
  wait_times?: WaitTimes | undefined
  website?: (string | null) | undefined
} | null
type Facility = { attributes: FacilityAttributes; id: string; type: 'va_facilities' }
type PageLinks = {
  first?: (string | null) | undefined
  last?: (string | null) | undefined
  next?: (string | null) | undefined
  prev?: (string | null) | undefined
  related?: (string | null) | undefined
  self: string
}
type Distance = { distance: number; id: string }
type Pagination = {
  current_page: number
  per_page: number
  total_entries: number
  total_pages: number
}
type FacilitiesMetadata = { distances: Distance[]; pagination: Pagination }
type FacilitiesResponse = {
  data?: Facility[] | undefined
  links: PageLinks
  meta: FacilitiesMetadata
}
type GenericError = { message: string }
type ErrorMessage = {
  code?: string | undefined
  detail?: string | undefined
  status?: string | undefined
  title?: string | undefined
}
type ApiError = { errors: ErrorMessage[] }
type GeoFacilityReadResponse = { geometry: Geometry; properties: Properties; type: 'Feature' }
type FacilityReadResponse = { data: Facility }
type FacilitiesIdsResponse = { data?: string[] | undefined }
type NearbyAttributes = { max_time: number; min_time: number } | null
type Nearby = { attributes: NearbyAttributes; id: string; type: 'NearbyFacility' } | null
type Meta = { band_version?: (string | null) | undefined } | null
type NearbyResponse = { data: Nearby[]; meta?: Meta | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/facilities': {
      $get:
        | {
            input: {
              query: {
                ids?: string[] | undefined
                zip?: string | undefined
                state?: string | undefined
                lat?: number | undefined
                long?: number | undefined
                'bbox[]'?: number[] | undefined
                visn?: number | undefined
                type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined
                'services[]'?: string[] | undefined
                mobile?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: GeoFacilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids?: string[] | undefined
                zip?: string | undefined
                state?: string | undefined
                lat?: number | undefined
                long?: number | undefined
                'bbox[]'?: number[] | undefined
                visn?: number | undefined
                type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined
                'services[]'?: string[] | undefined
                mobile?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: FacilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids?: string[] | undefined
                zip?: string | undefined
                state?: string | undefined
                lat?: number | undefined
                long?: number | undefined
                'bbox[]'?: number[] | undefined
                visn?: number | undefined
                type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined
                'services[]'?: string[] | undefined
                mobile?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: GeoFacilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ids?: string[] | undefined
                zip?: string | undefined
                state?: string | undefined
                lat?: number | undefined
                long?: number | undefined
                'bbox[]'?: number[] | undefined
                visn?: number | undefined
                type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined
                'services[]'?: string[] | undefined
                mobile?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ids?: string[] | undefined
                zip?: string | undefined
                state?: string | undefined
                lat?: number | undefined
                long?: number | undefined
                'bbox[]'?: number[] | undefined
                visn?: number | undefined
                type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined
                'services[]'?: string[] | undefined
                mobile?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ids?: string[] | undefined
                zip?: string | undefined
                state?: string | undefined
                lat?: number | undefined
                long?: number | undefined
                'bbox[]'?: number[] | undefined
                visn?: number | undefined
                type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined
                'services[]'?: string[] | undefined
                mobile?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ids?: string[] | undefined
                zip?: string | undefined
                state?: string | undefined
                lat?: number | undefined
                long?: number | undefined
                'bbox[]'?: number[] | undefined
                visn?: number | undefined
                type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined
                'services[]'?: string[] | undefined
                mobile?: boolean | undefined
                page?: bigint | undefined
                per_page?: bigint | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/facilities/all': {
      $get:
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: GeoFacilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: GeoFacilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: GeoFacilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              header: { Accept: 'application/geo+json' | 'application/vnd.geo+json' | 'text/csv' }
            }
            output: ApiError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/facilities/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GeoFacilityReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: FacilityReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: GeoFacilityReadResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ApiError; outputFormat: 'json'; status: 400 }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { id: string } }; output: ApiError; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: ApiError; outputFormat: 'json'; status: 406 }
        | { input: { param: { id: string } }; output: ApiError; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/ids': {
      $get:
        | {
            input: {
              query: { type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined }
            }
            output: FacilitiesIdsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined }
            }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined }
            }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: { type?: 'health' | 'cemetery' | 'benefits' | 'vet_center' | undefined }
            }
            output: ApiError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/nearby': {
      $get:
        | {
            input: {
              query: {
                street_address?: string | undefined
                city?: string | undefined
                state?: string | undefined
                zip?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                drive_time?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | undefined
                'services[]'?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: NearbyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                street_address?: string | undefined
                city?: string | undefined
                state?: string | undefined
                zip?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                drive_time?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | undefined
                'services[]'?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                street_address?: string | undefined
                city?: string | undefined
                state?: string | undefined
                zip?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                drive_time?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | undefined
                'services[]'?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                street_address?: string | undefined
                city?: string | undefined
                state?: string | undefined
                zip?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                drive_time?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | undefined
                'services[]'?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                street_address?: string | undefined
                city?: string | undefined
                state?: string | undefined
                zip?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                drive_time?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | undefined
                'services[]'?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                street_address?: string | undefined
                city?: string | undefined
                state?: string | undefined
                zip?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                drive_time?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | undefined
                'services[]'?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
