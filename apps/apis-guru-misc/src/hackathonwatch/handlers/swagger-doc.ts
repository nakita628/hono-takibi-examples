import { OpenAPIHono } from '@hono/zod-openapi'
import { getSwaggerDocNameJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const swaggerDocHandler = app.openapi(getSwaggerDocNameJsonRoute, (c) => {
  throw new Error('Not implemented')
})
