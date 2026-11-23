import { OpenAPIHono } from '@hono/zod-openapi'
import { getSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app.openapi(getSessionRoute, (c) => {
  throw new Error('Not implemented')
})
