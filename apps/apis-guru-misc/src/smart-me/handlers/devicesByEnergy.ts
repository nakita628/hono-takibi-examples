import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDevicesByEnergyRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesByEnergyHandler = app.openapi(getApiDevicesByEnergyRoute, (c) => {
  throw new Error('Not implemented')
})
