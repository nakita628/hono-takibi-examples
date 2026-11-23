import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesIdRoute, getServicesRoute, putServicesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
