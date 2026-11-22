import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialSwitchPortStatusesPacketsRoute,
  getDevicesSerialSwitchPortStatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const switchPortsHandler = app
  .openapi(getDevicesSerialSwitchPortStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchPortStatusesPacketsRoute, (c) => {
    throw new Error('Not implemented')
  })
