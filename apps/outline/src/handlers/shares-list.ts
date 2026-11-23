import { OpenAPIHono } from '@hono/zod-openapi'
import { postSharesListRoute } from '../routes'

const app = new OpenAPIHono()

export const sharesListHandler = app.openapi(postSharesListRoute, (c) => {
  throw new Error('Not implemented')
})
