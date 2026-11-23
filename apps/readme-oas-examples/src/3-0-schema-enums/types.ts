declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/strings': {
      $post: {
        input: {
          json: {
            enum?: 'available' | 'pending' | 'sold' | undefined
            'enum *required': 'available' | 'pending' | 'sold'
            'enum (with default)'?: 'available' | 'pending' | 'sold' | undefined
            'enum (with default) *required': 'available' | 'pending' | 'sold'
            'enum (with example)'?: 'available' | 'pending' | 'sold' | undefined
            'enum (with example) *required': 'available' | 'pending' | 'sold'
            'enum (with non-value example)'?: 'available' | 'pending' | 'sold' | undefined
            'enum (with non-value example) *required': 'available' | 'pending' | 'sold'
            'enum (with empty option)'?: '' | 'available' | 'pending' | 'sold' | undefined
            'enum (with duplicate options)'?: '' | '' | 'available' | 'available' | undefined
            'enum (with empty option and empty default)'?: '' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          json: {
            enum?: 0 | 1 | 2 | undefined
            'enum *required': 0 | 1 | 2
            'enum (with default)'?: 0 | 1 | 2 | undefined
            'enum (with default) *required': 0 | 1 | 2
            'enum (with example)'?: 0 | 1 | 2 | undefined
            'enum (with example) *required': 0 | 1 | 2
            'enum (with empty option)'?: '' | 0 | 1 | 2 | undefined
            'enum (with duplicate options)'?: '' | '' | 0 | 2 | 2 | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          json: {
            enum?: true | false | undefined
            'enum *required': true | false
            'enum (with default)'?: true | false | undefined
            'enum (with default) *required': true | false
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
