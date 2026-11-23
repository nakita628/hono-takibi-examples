import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiKeysIdRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app.openapi(deleteApiKeysIdRoute, (c) => {
  throw new Error('Not implemented')
})
