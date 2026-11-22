import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesHaproxyReloadsIdRoute, getServicesHaproxyReloadsRoute } from '../routes'

const app = new OpenAPIHono()

export const reloadsHandler = app
  .openapi(getServicesHaproxyReloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyReloadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
