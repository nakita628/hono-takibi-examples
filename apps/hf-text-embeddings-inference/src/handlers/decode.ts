import { OpenAPIHono } from '@hono/zod-openapi'
import { postDecodeRoute } from '../routes'

const app = new OpenAPIHono()

export const decodeHandler = app.openapi(postDecodeRoute, (c) => {
  throw new Error('Not implemented')
})
