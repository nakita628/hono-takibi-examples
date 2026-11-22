import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutEncryptionConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const PutEncryptionConfigHandler = app.openapi(postPutEncryptionConfigRoute, (c) => {
  throw new Error('Not implemented')
})
