import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionBusinessIDClientWhatsappBusinessAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const clientWhatsAppBusinessAccountsHandler = app.openapi(
  getVersionBusinessIDClientWhatsappBusinessAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
