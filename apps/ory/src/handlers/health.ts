import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthAliveRoute, getHealthReadyRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHealthAliveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
