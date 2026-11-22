import { OpenAPIHono } from '@hono/zod-openapi'
import { postCloseRoute } from '../routes'

const app = new OpenAPIHono()

export const closeHandler = app.openapi(postCloseRoute, (c) => {
  throw new Error('Not implemented')
})
