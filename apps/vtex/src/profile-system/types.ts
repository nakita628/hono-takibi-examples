type Profile = {
  birthDate?: string | undefined
  document: string
  documentType: string
  email: string
  firstName: string
  lastName: string
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
type Address = {
  administrativeAreaLevel1: string
  countryCode?: string | undefined
  countryName: string
  locality: string
  localityAreaLevel1: string
  postalCode: string
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
            birthDate?: unknown | undefined
            document?: unknown | undefined
            documentType?: unknown | undefined
            email?: unknown | undefined
            firstName?: unknown | undefined
            lastName?: unknown | undefined
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
            administrativeAreaLevel1?: unknown | undefined
            countryCode?: unknown | undefined
            countryName?: unknown | undefined
            locality?: unknown | undefined
            localityAreaLevel1?: unknown | undefined
            postalCode?: unknown | undefined
            route?: unknown | undefined
            streetNumber?: unknown | undefined
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
