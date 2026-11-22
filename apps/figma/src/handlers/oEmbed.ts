import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OembedRoute } from '../routes'

const app = new OpenAPIHono()

export const oEmbedHandler = app.openapi(getV1OembedRoute, (c) => {
  throw new Error('Not implemented')
})
