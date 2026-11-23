import { OpenAPIHono } from '@hono/zod-openapi'
import { getDenyRoute } from '../routes'

const app = new OpenAPIHono()

export const denyHandler = app.openapi(getDenyRoute, (c) => {
  throw new Error('Not implemented')
})
