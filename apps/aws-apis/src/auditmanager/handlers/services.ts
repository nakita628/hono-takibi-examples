import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app.openapi(getServicesRoute, (c) => {
  throw new Error('Not implemented')
})
