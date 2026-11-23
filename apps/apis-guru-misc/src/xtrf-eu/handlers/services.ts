import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesActiveRoute, getServicesAllRoute } from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
