type Cat = { pet_type: string; hunts?: boolean | undefined; age?: number | undefined }
type Dog = {
  pet_type: string
  bark?: boolean | undefined
  breed?: 'Dingo' | 'Husky' | 'Retriever' | 'Shepherd' | undefined
}
type Object1 = { a?: string | undefined; b?: string | undefined }
type Object2 = { c?: string | undefined; d?: string | undefined }
type String1 = string
type String2 = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pets': {
      $patch: { input: { json: Cat | Dog }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/all-of-object': {
      $post: {
        input: {
          json: {
            a?: string | undefined
            b?: string | undefined
            c?: string | undefined
            d?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/any-of-object': {
      $post: {
        input: {
          json:
            | { a?: string | undefined; b?: string | undefined }
            | { c?: string | undefined; d?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/any-of-primitive': {
      $post: { input: { json: string | number }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/any-of-with-type': {
      $post: {
        input: { json: { event?: string | string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/anything/one-of-object': {
      $post: {
        input: {
          json:
            | { a?: string | undefined; b?: string | undefined }
            | { c?: string | undefined; d?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/one-of-primitive': {
      $post: { input: { json: string | number }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/one-of-object-ref': {
      $post: { input: { json: Object1 | Object2 }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/one-of-complex': {
      $post: {
        input: {
          json:
            | {
                listing_id: number
                regulatory_body: string
                registration?:
                  | {
                      permit_number: string
                      registration_ownership: 'OWNER' | 'PROPERTY_MANAGER'
                      email: string
                      full_name: string
                      identification_number: string
                    }
                  | undefined
                exemption?:
                  | {
                      reason: 'LISTING_TYPE_NOT_INCLUDED' | 'LISTING_NOT_TOURIST_ACCOMMODATION'
                      registration_ownership: 'OWNER' | 'PROPERTY_MANAGER'
                      email: string
                      full_name: string
                      identification_number: string
                    }
                  | undefined
              }
            | {
                listing_id: number
                regulatory_body: string
                registration?:
                  | {
                      permit_number: string
                      expiration_date: string
                      full_name: string
                      email: string
                      listing_address: string
                      attestation_existing_registration: boolean
                    }
                  | undefined
                exemption?:
                  | {
                      exemption_reason: 'hotel_motel'
                      full_name: string
                      email: string
                      attestation_exemption_claim: boolean
                    }
                  | undefined
              }
            | {
                listing_id: number
                regulatory_body: string
                registration?:
                  | {
                      permit_number: string
                      email: string
                      full_name: string
                      listing_address: string
                      attestation: boolean
                    }
                  | undefined
                exemption?:
                  | {
                      exemption_reason:
                        | 'hotel_motel'
                        | 'bed_breakfast_lodging'
                        | 'institutional_business'
                        | 'hospitals'
                      listing_address: string
                      attestation: boolean
                    }
                  | undefined
              }
            | {
                listing_id: number
                regulatory_body: string
                registration?:
                  | {
                      permit_number: string
                      registration_ownership: string
                      email: string
                      full_name: string
                      identification_number: string
                    }
                  | undefined
                exemption?:
                  | {
                      reason:
                        | 'listing_not_full_building'
                        | 'listing_is_shared_room'
                        | 'other_exemption_reason'
                      registration_ownership: 'OWNER' | 'PROPERTY_MANAGER'
                      email: string
                      full_name: string
                      identification_number: string
                    }
                  | undefined
              }
            | {
                listing_id: number
                regulatory_body: string
                registration: { permit_number: string }
              }
            | {
                listing_id: number
                regulatory_body: string
                affiliation: { attestation_entrepreneur: boolean; listing_address: string }
              }
            | {
                listing_id: number
                regulatory_body: string
                categorization: {
                  listing_type:
                    | 'primary_residence'
                    | 'houseboat'
                    | 'tent'
                    | 'tree_house'
                    | 'hotel_or_hostel'
                    | 'serviced_apartment'
                    | 'trailer'
                    | 'mobile_home'
                    | 'summer_house'
                  data_reporting_status?: 'private_activity' | 'business_activity' | undefined
                  data_reporting_bbr?: string | undefined
                  attestation?: boolean | undefined
                  attestation_conditional?: boolean | undefined
                }
              }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/nested-one-of-object-ref': {
      $post: {
        input: { json: { config?: Object1 | Object2 | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/nested-one-of-ref': {
      $post: {
        input: { json: { config?: String1 | String2 | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/nested-one-of-object-with-nested-one-of': {
      $post: {
        input: { json: { config?: Object1 | Object2 | Cat | Dog | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/one-of-with-type': {
      $post: {
        input: { json: { event?: { [x: string]: unknown } | { [x: string]: unknown } | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
