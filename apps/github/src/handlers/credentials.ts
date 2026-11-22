import { OpenAPIHono } from '@hono/zod-openapi'
import { postCredentialsRevokeRoute } from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app.openapi(postCredentialsRevokeRoute, (c) => {
  throw new Error('Not implemented')
})
