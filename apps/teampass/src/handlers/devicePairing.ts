import { OpenAPIHono } from '@hono/zod-openapi'
import { postDevicePairingCredentialStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const devicePairingHandler = app.openapi(postDevicePairingCredentialStatusRoute, (c) => {
  throw new Error('Not implemented')
})
