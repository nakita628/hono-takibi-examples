import { OpenAPIHono } from '@hono/zod-openapi'
import { getSwaggerDocJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const swaggerDocJsonHandler = app.openapi(getSwaggerDocJsonRoute, (c) => {
  throw new Error('Not implemented')
})
