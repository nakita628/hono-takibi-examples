import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutEncryptionConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const putEncryptionConfigHandler = app.openapi(postPutEncryptionConfigRoute, (c) => {
  throw new Error('Not implemented')
})
