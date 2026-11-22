import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthReadyRoute, getHealthVendorsRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceHealthHandler = app
  .openapi(getHealthReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthVendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
