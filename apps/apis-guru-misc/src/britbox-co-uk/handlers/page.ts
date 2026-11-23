import { OpenAPIHono } from '@hono/zod-openapi'
import { getPageRoute } from '../routes'

const app = new OpenAPIHono()

export const pageHandler = app.openapi(getPageRoute, (c) => {
  throw new Error('Not implemented')
})
