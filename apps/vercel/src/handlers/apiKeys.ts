import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app.openapi(postApiKeysRoute, (c) => {
  throw new Error('Not implemented')
})
