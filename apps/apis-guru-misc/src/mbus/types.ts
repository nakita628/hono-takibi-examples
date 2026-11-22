type Yaml = string
type TextError = string
type Device = string
type Baudrate = 300 | 600 | 1200 | 2400 | 4800 | 9600
type Address = string
type MbusData = string
type Maxframes = number
type Hat = {
  product?: string | undefined
  productId?: string | undefined
  productVer?: string | undefined
  uuid?: string | undefined
  vendor?: string | undefined
}
type Slaves = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/mbus/api': {
      $get:
        | { input: {}; output: Yaml; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TextError; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/mbus/get/:device/:baudrate/:address': {
      $post:
        | {
            input: { param: { device: Device; baudrate: Baudrate; address: Address } }
            output: MbusData
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device: Device; baudrate: Baudrate; address: Address } }
            output: TextError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { device: Device; baudrate: Baudrate; address: Address } }
            output: TextError
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/mbus/getMulti/:device/:baudrate/:address/:maxframes': {
      $post:
        | {
            input: {
              param: { device: Device; baudrate: Baudrate; address: Address; maxframes: Maxframes }
            }
            output: MbusData
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { device: Device; baudrate: Baudrate; address: Address; maxframes: Maxframes }
            }
            output: TextError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: { device: Device; baudrate: Baudrate; address: Address; maxframes: Maxframes }
            }
            output: TextError
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/mbus/hat': {
      $get:
        | { input: {}; output: Hat; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TextError; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/mbus/hat/off': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: TextError; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/mbus/hat/on': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: TextError; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/mbus/scan/:device/:baudrate': {
      $post:
        | {
            input: { param: { device: Device; baudrate: Baudrate } }
            output: Slaves
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device: Device; baudrate: Baudrate } }
            output: TextError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { device: Device; baudrate: Baudrate } }
            output: TextError
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
