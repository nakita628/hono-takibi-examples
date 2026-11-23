import { OpenAPIHono } from '@hono/zod-openapi'
import { getUmprnUmprnRoute } from '../routes'

const app = new OpenAPIHono()

export const umprnHandler = app.openapi(getUmprnUmprnRoute, (c) => {
  throw new Error('Not implemented')
})
