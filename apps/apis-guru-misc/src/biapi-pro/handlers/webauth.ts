import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebauthRoute } from '../routes'

const app = new OpenAPIHono()

export const webauthHandler = app.openapi(getWebauthRoute, (c) => {
  throw new Error('Not implemented')
})
