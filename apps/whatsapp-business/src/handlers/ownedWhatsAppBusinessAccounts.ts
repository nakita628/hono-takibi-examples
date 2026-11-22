import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionBusinessIDOwnedWhatsappBusinessAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const ownedWhatsAppBusinessAccountsHandler = app.openapi(
  getVersionBusinessIDOwnedWhatsappBusinessAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
