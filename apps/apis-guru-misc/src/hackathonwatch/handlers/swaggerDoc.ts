import { OpenAPIHono } from '@hono/zod-openapi'
import { getSwaggerDocJsonRoute, getSwaggerDocNameJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const swaggerDocHandler = app
  .openapi(getSwaggerDocJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSwaggerDocNameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
