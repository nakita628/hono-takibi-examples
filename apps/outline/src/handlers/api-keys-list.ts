import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiKeysListRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysListHandler = app.openapi(postApiKeysListRoute, (c) => {
  throw new Error('Not implemented')
})
