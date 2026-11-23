import { OpenAPIHono } from '@hono/zod-openapi'
import { getSigningKeysKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const signingKeysHandler = app.openapi(getSigningKeysKeysRoute, (c) => {
  throw new Error('Not implemented')
})
