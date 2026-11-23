import { OpenAPIHono } from '@hono/zod-openapi'
import { postSharesRevokeRoute } from '../routes'

const app = new OpenAPIHono()

export const sharesRevokeHandler = app.openapi(postSharesRevokeRoute, (c) => {
  throw new Error('Not implemented')
})
