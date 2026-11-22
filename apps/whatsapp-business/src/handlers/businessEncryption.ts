import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionPhoneNumberIDWhatsappBusinessEncryptionRoute } from '../routes'

const app = new OpenAPIHono()

export const businessEncryptionHandler = app.openapi(
  postVersionPhoneNumberIDWhatsappBusinessEncryptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
