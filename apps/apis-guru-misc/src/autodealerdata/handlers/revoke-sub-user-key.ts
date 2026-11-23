import { OpenAPIHono } from '@hono/zod-openapi'
import { putRevokeSubUserKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const revokeSubUserKeyHandler = app.openapi(putRevokeSubUserKeyRoute, (c) => {
  throw new Error('Not implemented')
})
