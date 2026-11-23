import { OpenAPIHono } from '@hono/zod-openapi'
import { postURLEncodeRoute } from '../routes'

const app = new OpenAPIHono()

export const urlEncodeHandler = app.openapi(postURLEncodeRoute, (c) => {
  throw new Error('Not implemented')
})
