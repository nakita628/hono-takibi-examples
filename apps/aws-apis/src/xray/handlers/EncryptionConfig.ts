import { OpenAPIHono } from '@hono/zod-openapi'
import { postEncryptionConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const EncryptionConfigHandler = app.openapi(postEncryptionConfigRoute, (c) => {
  throw new Error('Not implemented')
})
