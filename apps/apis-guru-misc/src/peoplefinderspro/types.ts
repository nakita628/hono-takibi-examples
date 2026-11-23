declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/address/autocomplete': {
      $post: {
        input: {
          header: {
            'galaxy-ap-name'?: string | undefined
            'galaxy-ap-password'?: string | undefined
            'galaxy-search-type'?: string | undefined
          }
        } & { json: { Input?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/contact/enrich': {
      $post: {
        input: {
          header: {
            'galaxy-ap-name'?: string | undefined
            'galaxy-ap-password'?: string | undefined
            'galaxy-search-type'?: string | undefined
          }
        } & {
          json: {
            Address?:
              | { addressLine1?: string | undefined; addressLine2?: string | undefined }
              | undefined
            Age?: number | undefined
            Dob?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            LastName?: string | undefined
            MiddleName?: string | undefined
            PhoneNumber?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/enrich': {
      $post: {
        input: {
          header: {
            'galaxy-ap-name'?: string | undefined
            'galaxy-ap-password'?: string | undefined
            'galaxy-search-type'?: string | undefined
          }
        } & { json: { Email?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/verify_id': {
      $post: {
        input: {
          header: {
            'galaxy-ap-name'?: string | undefined
            'galaxy-ap-password'?: string | undefined
            'galaxy-search-type'?: string | undefined
          }
        } & {
          json: {
            Address?:
              | { addressLine1?: string | undefined; addressLine2?: string | undefined }
              | undefined
            Age?: number | undefined
            Dob?: string | undefined
            Email?: string | undefined
            FirstName?: string | undefined
            LastName?: string | undefined
            MiddleName?: string | undefined
            PhoneNumber?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/phone/enrich': {
      $post: {
        input: {
          header: {
            'galaxy-ap-name'?: string | undefined
            'galaxy-ap-password'?: string | undefined
            'galaxy-search-type'?: string | undefined
          }
        } & { json: { Phone?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
