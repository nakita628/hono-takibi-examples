import { OpenAPIHono } from '@hono/zod-openapi'
import { getBearerRoute } from '../routes'

const app = new OpenAPIHono()

export const bearerHandler = app.openapi(getBearerRoute, (c) => {
  throw new Error('Not implemented')
})
