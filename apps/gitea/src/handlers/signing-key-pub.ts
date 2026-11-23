import { OpenAPIHono } from '@hono/zod-openapi'
import { getSigningKeyPubRoute } from '../routes'

const app = new OpenAPIHono()

export const signingKeyPubHandler = app.openapi(getSigningKeyPubRoute, (c) => {
  throw new Error('Not implemented')
})
