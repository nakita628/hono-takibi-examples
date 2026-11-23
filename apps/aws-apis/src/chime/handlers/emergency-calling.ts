import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmergencyCallingAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const emergencyCallingHandler = app.openapi(postEmergencyCallingAddressRoute, (c) => {
  throw new Error('Not implemented')
})
