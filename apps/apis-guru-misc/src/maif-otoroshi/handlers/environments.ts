import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinesLineServicesRoute, getLinesRoute } from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinesLineServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
