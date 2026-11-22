import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfo0JsonRoute } from '../routes'

const app = new OpenAPIHono()

export const info0JsonHandler = app.openapi(getInfo0JsonRoute, (c) => {
  throw new Error('Not implemented')
})
