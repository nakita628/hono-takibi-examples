import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthDetailedRoute, getHealthStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHealthStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthDetailedRoute, (c) => {
    throw new Error('Not implemented')
  })
