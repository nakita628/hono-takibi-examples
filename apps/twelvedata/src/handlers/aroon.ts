import { OpenAPIHono } from '@hono/zod-openapi'
import { getAroonRoute } from '../routes'

const app = new OpenAPIHono()

export const aroonHandler = app.openapi(getAroonRoute, (c) => {
  throw new Error('Not implemented')
})
