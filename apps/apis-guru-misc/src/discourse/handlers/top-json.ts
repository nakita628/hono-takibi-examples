import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const topJsonHandler = app.openapi(getTopJsonRoute, (c) => {
  throw new Error('Not implemented')
})
