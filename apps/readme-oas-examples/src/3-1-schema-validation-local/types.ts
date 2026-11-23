declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/numbers': {
      $get: {
        input: {
          query: {
            'id-required': number
            'id-optional'?: number | undefined
            'id-exclusive-required': number
            'id-exclusive-required-schema-v4': number
            'id-exclusive-required-schema-v5': number
            'id-exclusive-required-schema-v6': number
            'id-exclusive-required-schema-v7': number
            'id-exclusive-required-schema-v2019': number
            'id-exclusive-required-schema-v2020': number
            'id-exclusive-optional'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/strings': {
      $get: {
        input: {
          query: {
            'name-length-required': string
            'name-length-optional'?: string | undefined
            'name-pattern-required': string
            'name-pattern-optional'?: string | undefined
            'complex-pattern-required': string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/jsonschema-formats': {
      $get: {
        input: {
          query: {
            'date-time': string
            date?: string | undefined
            time?: string | undefined
            duration?: string | undefined
            email?: string | undefined
            'idn-email'?: string | undefined
            hostname?: string | undefined
            'idn-hostname'?: string | undefined
            ipv4?: string | undefined
            ipv6?: string | undefined
            uri?: string | undefined
            'uri-reference'?: string | undefined
            iri?: string | undefined
            'iri-reference'?: string | undefined
            uuid?: string | undefined
            'uri-template'?: string | undefined
            'json-pointer'?: string | undefined
            'relative-json-pointer'?: string | undefined
            regex?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/oas-formats': {
      $get: {
        input: {
          query: {
            int32: number
            int64?: bigint | undefined
            float?: number | undefined
            double?: number | undefined
            byte?: string | undefined
            binary?: File | undefined
            password?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/booleans': {
      $get: {
        input: { query: { 'tf-required': boolean; 'tf-optional'?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
