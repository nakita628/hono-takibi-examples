import { OpenAPIHono } from '@hono/zod-openapi'
import { getSigninsRoute } from '../routes'

const app = new OpenAPIHono()

export const signinsHandler = app.openapi(getSigninsRoute, (c) => {
  throw new Error('Not implemented')
})
