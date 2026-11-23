import { OpenAPIHono } from '@hono/zod-openapi'
import { getSwaggerRoute } from '../routes'

const app = new OpenAPIHono()

export const swaggerHandler = app.openapi(getSwaggerRoute, (c) => {
  throw new Error('Not implemented')
})
