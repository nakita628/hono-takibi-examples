import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialCellularGatewaySettingsRoute,
  putDevicesSerialCellularGatewaySettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mglanSettingsHandler = app
  .openapi(getDevicesSerialCellularGatewaySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGatewaySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
