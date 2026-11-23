import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1FlightsComputeFlightEmissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(postV1FlightsComputeFlightEmissionsRoute, (c) => {
  throw new Error('Not implemented')
})
