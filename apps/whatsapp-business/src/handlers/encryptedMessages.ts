import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionPhoneNumberIDMessagesEncryptedRoute } from '../routes'

const app = new OpenAPIHono()

export const encryptedMessagesHandler = app.openapi(
  postVersionPhoneNumberIDMessagesEncryptedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
