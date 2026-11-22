import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionWhatsAppAccountNumberIDRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppAccountNumbersHandler = app.openapi(
  getVersionWhatsAppAccountNumberIDRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
