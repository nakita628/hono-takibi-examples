import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiKeysCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysCreateHandler = app.openapi(postApiKeysCreateRoute, (c) => {
  throw new Error('Not implemented')
})
