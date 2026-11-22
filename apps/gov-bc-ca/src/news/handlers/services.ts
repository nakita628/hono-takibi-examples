import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiServicesKeyRoute, getApiServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
