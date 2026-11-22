declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/numbers/base': {
      $get: {
        input: { query: { number: number; from?: number | undefined; to: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/base/binary': {
      $get: {
        input: { query: { number: number; from?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/base/hex': {
      $get: {
        input: { query: { number: number; from?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/base/octal': {
      $get: {
        input: { query: { number: number; from?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/cardinal': {
      $get: {
        input: { query: { number?: number | undefined; language?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/currency': {
      $get: {
        input: { query: { number?: number | undefined; language?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/fact': {
      $get: { input: { query: { number: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/numbers/is-cube': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/is-palindrome': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/is-square': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/is-triangle': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/numbers/nod': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/numbers/numeral/chinese': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/numeral/egyptian': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/numeral/roman': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/ordinal': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/pi': {
      $get: {
        input: { query: { from?: number | undefined; to?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/factors': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/is-fermat-prime': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/is-fibonacci-prime': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/is-mersenne-prime': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/is-partition-prime': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/is-pell-prime': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/is-perfect': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/prime/is-prime': {
      $get: {
        input: { query: { number?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/random': {
      $get: {
        input: {
          query: { min?: number | undefined; max?: number | undefined; total?: number | undefined }
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
