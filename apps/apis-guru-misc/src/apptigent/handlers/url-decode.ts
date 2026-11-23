import { OpenAPIHono } from '@hono/zod-openapi'
import { postURLDecodeRoute } from '../routes'

const app = new OpenAPIHono()

export const urlDecodeHandler = app.openapi(postURLDecodeRoute, (c) => {
  throw new Error('Not implemented')
})
