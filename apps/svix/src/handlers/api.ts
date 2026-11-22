import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1HealthPingRoute, headApiV1HealthPingRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1HealthPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1HealthPingRoute, (c) => {
    throw new Error('Not implemented')
  })
