type ConnectedDevicesResponse = { uniqueDeviceIds?: string[] | undefined }
type InvalidField = { name: string; value: string; message: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type DeviceStatus = 'ONLINE' | 'OFFLINE'
type DeviceStatusResponse = { deviceId?: string | undefined; status?: DeviceStatus | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/merchants/:merchantAccount/connectedDevices': {
      $get:
        | {
            input: { param: { merchantAccount: string } } & {
              query: { store?: string | undefined }
            }
            output: ConnectedDevicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantAccount: string } } & {
              query: { store?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantAccount: string } } & {
              query: { store?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/merchants/:merchantAccount/devices/:deviceId/async': {
      $post: {
        input: { param: { merchantAccount: string; deviceId: string } } & { json: string }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/merchants/:merchantAccount/devices/:deviceId/status': {
      $get:
        | {
            input: { param: { merchantAccount: string; deviceId: string } }
            output: DeviceStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { merchantAccount: string; deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { merchantAccount: string; deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/merchants/:merchantAccount/devices/:deviceId/sync': {
      $post: {
        input: { param: { merchantAccount: string; deviceId: string } } & { json: string }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
