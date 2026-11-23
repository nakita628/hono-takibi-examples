import { OpenAPIHono } from '@hono/zod-openapi'
import { putOrderUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderUpdateJsonHandler = app.openapi(putOrderUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
