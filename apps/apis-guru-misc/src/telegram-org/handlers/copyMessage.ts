import { OpenAPIHono } from '@hono/zod-openapi'
import { postCopyMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const copyMessageHandler = app.openapi(postCopyMessageRoute, (c) => {
  throw new Error('Not implemented')
})
