import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopfeedsTagModeRoute } from '../routes'

const app = new OpenAPIHono()

export const topfeedsHandler = app.openapi(getTopfeedsTagModeRoute, (c) => {
  throw new Error('Not implemented')
})
