type StringEnum = 'available' | 'pending' | 'sold'
type Circular = { string?: string | undefined; children?: Circular[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/strings': {
      $post: {
        input: {
          json: {
            stock?: string | undefined
            'description (markdown)'?: string | undefined
            title?: string | undefined
            required: string
            default?: string | undefined
            'default (null)'?: string | undefined
            'default (required)': string
            nullable?: (string | null) | undefined
            enum?: 'available' | 'pending' | 'sold' | undefined
            'enum (with default)'?: 'available' | 'pending' | 'sold' | undefined
            'enum (with default and required)'?: 'available' | 'pending' | 'sold' | undefined
            'enum (with empty option)'?: '' | 'available' | 'pending' | 'sold' | undefined
            'enum (with empty option and empty default)'?: '' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          json: {
            binary?: File | undefined
            'binary (with default)': File
            blob?: string | undefined
            date?: string | undefined
            'date (with pattern)'?: string | undefined
            'date-time'?: string | undefined
            html?: string | undefined
            json?: string | undefined
            string?: string | undefined
            password?: string | undefined
            'password (minLength: 5, maxLength: 20)'?: string | undefined
            url?: string | undefined
            'unknown-format'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/strings/top-level-payloads': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
      $patch: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/numbers': {
      $post: {
        input: {
          json: {
            'integer (stock)'?: number | undefined
            'integer (markdown description)'?: number | undefined
            'integer (title)'?: number | undefined
            'integer (required)': number
            'integer (default)'?: number | undefined
            'integer (default null)'?: number | undefined
            'integer (default, required)': number
            'integer (nullable)'?: (number | null) | undefined
            'integer (minimum / maximum)'?: number | undefined
            'number (stock)'?: number | undefined
            'number (markdown description)'?: number | undefined
            'number (title)'?: number | undefined
            'number (required)': number
            'number (default)'?: number | undefined
            'number (default null)'?: number | undefined
            'number (default, required)': number
            'number (nullable)'?: (number | null) | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          json: {
            'integer (format: int8)'?: number | undefined
            'integer (format: uint8)'?: number | undefined
            'integer (format: int16)'?: number | undefined
            'integer (format: uint16)'?: number | undefined
            'integer (format: int32)'?: number | undefined
            'integer (format: int32, multipleOf: 2)'?: number | undefined
            'integer (format: uint32)'?: number | undefined
            'integer (format: int64)'?: bigint | undefined
            'integer (format: uint64)'?: bigint | undefined
            'number (format: float)'?: number | undefined
            'number (format: double)'?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: { input: { json: bigint }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/booleans': {
      $post: {
        input: {
          json: {
            stock?: boolean | undefined
            'description (markdown)'?: boolean | undefined
            title?: boolean | undefined
            required: boolean
            default?: boolean | undefined
            'default (required)': boolean
            'inferred from enum'?: true | false | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: { input: { json: boolean }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/arrays': {
      $post: {
        input: {
          json: {
            stock?: { [x: string]: unknown }[] | undefined
            'with markdown description'?: { [x: string]: unknown }[] | undefined
            'with title'?: { [x: string]: unknown }[] | undefined
            'array<any>'?: { [x: string]: unknown }[] | undefined
            'array<any> (but no `items` property)'?: unknown[] | undefined
            'array<string>'?: string[] | undefined
            'array<string> (with overall `null` default)'?: string[] | undefined
            'array<string> (loaded via a $ref)'?: StringEnum[] | undefined
            'array<integer>'?: bigint[] | undefined
            'array<number>'?: number[] | undefined
            'array<boolean>'?: boolean[] | undefined
            'array<object>'?:
              | {
                  string?: string | undefined
                  integer?: number | undefined
                  number?: number | undefined
                  boolean?: boolean | undefined
                }[]
              | undefined
            'array<object> (additionalProperties)'?: { [x: string]: unknown }[] | undefined
            'array<array<object>>'?: { string?: string | undefined }[][] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/arrays/top-level-payloads': {
      $post: {
        input: {
          json: {
            string?: string | undefined
            integer?: number | undefined
            number?: number | undefined
            boolean?: boolean | undefined
            array?: { [x: string]: unknown }[] | undefined
            object?: { [x: string]: unknown } | undefined
          }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: { input: { json: string[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/objects': {
      $post: {
        input: {
          json: {
            object?:
              | {
                  string?: string | undefined
                  integer?: number | undefined
                  number?: number | undefined
                  object?: { string?: string | undefined } | undefined
                  array?: string[] | undefined
                }
              | undefined
            'object (with `title`)'?:
              | {
                  string?: string | undefined
                  integer?: number | undefined
                  number?: number | undefined
                  object?: { string?: string | undefined } | undefined
                  array?: string[] | undefined
                }
              | undefined
            'object (without an explicit `type`)'?:
              | { property1?: bigint | undefined; property2?: bigint | undefined }
              | undefined
            'object (additionalProperties)'?: { [x: string]: unknown } | undefined
            'object (without `properties`)'?: { [x: string]: unknown } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/circular': {
      $post: {
        input: { json: { circular?: Circular | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: { input: { json: Circular }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/raw_body/top-level-payloads': {
      $post: {
        input: { json: { RAW_BODY?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { json: { RAW_BODY?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/quirks': {
      $post: {
        input: {
          json: {
            'missing type'?: { [x: string]: unknown } | undefined
            'missing type (on completely empty schema)'?: { [x: string]: unknown } | undefined
            'implicit array'?: { [x: string]: unknown } | undefined
            'implicit object'?: { name?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/quirks/polymorphism': {
      $post: {
        input: {
          json: {
            incompatible?: {} | undefined
            compatible?: { name?: { [x: string]: unknown } | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: { input: { json: {} }; output: {}; outputFormat: string; status: 200 }
      $patch: { input: { json: {} }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
