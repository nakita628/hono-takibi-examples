import { OpenAPIHono } from '@hono/zod-openapi'
import { postLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const linkHandler = app.openapi(postLinkRoute, (c) => {
  throw new Error('Not implemented')
})
