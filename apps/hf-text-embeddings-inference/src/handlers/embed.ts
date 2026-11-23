import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmbedRoute } from '../routes'

const app = new OpenAPIHono()

export const embedHandler = app.openapi(postEmbedRoute, (c) => {
  throw new Error('Not implemented')
})
