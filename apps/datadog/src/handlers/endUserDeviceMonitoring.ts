import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2EudmDevicesDeviceIdRoute, getApiV2EudmDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const endUserDeviceMonitoringHandler = app
  .openapi(getApiV2EudmDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EudmDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
