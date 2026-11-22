import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1HealthRoute, headApiV1HealthRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getApiV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
