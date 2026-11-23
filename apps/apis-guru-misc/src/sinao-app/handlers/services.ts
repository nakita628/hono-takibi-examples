import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesViesSirenRoute, postServicesCollectorRoute } from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(postServicesCollectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesViesSirenRoute, (c) => {
    throw new Error('Not implemented')
  })
