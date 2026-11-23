import { OpenAPIHono } from '@hono/zod-openapi'
import { postEncryptionResetRoute } from '../routes'

const app = new OpenAPIHono()

export const encryptionHandler = app.openapi(postEncryptionResetRoute, (c) => {
  throw new Error('Not implemented')
})
