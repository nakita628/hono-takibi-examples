import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute,
  putDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mgPortForwardingRulesHandler = app
  .openapi(getDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
