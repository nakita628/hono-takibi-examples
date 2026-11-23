import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmbedAllRoute } from '../routes'

const app = new OpenAPIHono()

export const embedAllHandler = app.openapi(postEmbedAllRoute, (c) => {
  throw new Error('Not implemented')
})
