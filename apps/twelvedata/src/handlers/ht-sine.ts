import { OpenAPIHono } from '@hono/zod-openapi'
import { getHtSineRoute } from '../routes'

const app = new OpenAPIHono()

export const htSineHandler = app.openapi(getHtSineRoute, (c) => {
  throw new Error('Not implemented')
})
