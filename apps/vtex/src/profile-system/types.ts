type ProfileBirthDate = string
type ProfileDocument = string
type ProfileDocumentType = string
type ProfileEmail = string
type ProfileFirstName = string
type ProfileLastName = string
type Profile = {
  birthDate?: ProfileBirthDate | undefined
  document: ProfileDocument
  documentType: ProfileDocumentType
  email: ProfileEmail
  firstName: ProfileFirstName
  lastName: ProfileLastName
}
type Schema = {
  description: string
  documentTTL?: number | undefined
  properties: {
    '{fieldName}'?:
      | {
          items?: { [x: string]: unknown } | undefined
          pii: boolean
          sensitive: boolean
          type: string
        }
      | undefined
  }
  required: string[]
  title: string
  type: string
  'v-indexed'?: { [x: string]: unknown }[] | undefined
  'v-unique'?: { [x: string]: unknown }[] | undefined
  version?: number | undefined
}
type AddressAdministrativeAreaLevel1 = string
type AddressCountryCode = string
type AddressCountryName = string
type AddressLocality = string
type AddressLocalityAreaLevel1 = string
type AddressPostalCode = string
type Address = {
  administrativeAreaLevel1: AddressAdministrativeAreaLevel1
  countryCode?: AddressCountryCode | undefined
  countryName: AddressCountryName
  locality: AddressLocality
  localityAreaLevel1: AddressLocalityAreaLevel1
  postalCode: AddressPostalCode
  route: string
  streetNumber: string
}
type Prospect = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/storage/profile-system/profiles': {
      $post: {
        input: { query: { ttl?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: Profile }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/storage/profile-system/profiles/schema': {
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: Schema }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId': {
      $delete: {
        input: { param: { profileId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined; ttl?: number | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            birthDate?: ProfileBirthDate | undefined
            document?: ProfileDocument | undefined
            documentType?: ProfileDocumentType | undefined
            email?: ProfileEmail | undefined
            firstName?: ProfileFirstName | undefined
            lastName?: ProfileLastName | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/addresses': {
      $get: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & { json: Address }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/addresses/unmask': {
      $get: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId': {
      $delete: {
        input: { param: { profileId: string; addressId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { profileId: string; addressId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string; addressId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            administrativeAreaLevel1?: AddressAdministrativeAreaLevel1 | undefined
            countryCode?: AddressCountryCode | undefined
            countryName?: AddressCountryName | undefined
            locality?: AddressLocality | undefined
            localityAreaLevel1?: AddressLocalityAreaLevel1 | undefined
            postalCode?: AddressPostalCode | undefined
            route?: AddressCountryName | undefined
            streetNumber?: AddressCountryName | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/unmask': {
      $get: {
        input: { param: { profileId: string; addressId: string } } & {
          query: { reason: string; alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/versions/:addressVersionId': {
      $get: {
        input: { param: { profileId: string; addressId: string; addressVersionId: string } } & {
          query: { reason: string; alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/addresses/:addressId/versions/:addressVersionId/unmask': {
      $get: {
        input: { param: { profileId: string; addressId: string; addressVersionId: string } } & {
          query: { reason: string; alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/purchase-info': {
      $delete: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: { [x: string]: unknown }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
          query: { alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & {
          json: { [x: string]: unknown }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/purchase-info/unmask': {
      $get: {
        input: { param: { profileId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/unmask': {
      $get: {
        input: { param: { profileId: string } } & {
          query: { reason: string; alternativeKey?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/versions/:profileVersionId': {
      $get: {
        input: { param: { profileId: string; profileVersionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/profiles/:profileId/versions/:profileVersionId/unmask': {
      $get: {
        input: { param: { profileId: string; profileVersionId: string } } & {
          query: { reason: string }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/prospects': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: Prospect }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/storage/profile-system/prospects/:prospectId': {
      $delete: {
        input: { param: { prospectId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { prospectId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { prospectId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/storage/profile-system/prospects/:prospectId/unmask': {
      $get: {
        input: { param: { prospectId: string } } & { query: { reason: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
