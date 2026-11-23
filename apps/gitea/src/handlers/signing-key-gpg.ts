import { OpenAPIHono } from '@hono/zod-openapi'
import { getSigningKeyGpgRoute } from '../routes'

const app = new OpenAPIHono()

export const signingKeyGpgHandler = app.openapi(getSigningKeyGpgRoute, (c) => {
  throw new Error('Not implemented')
})
