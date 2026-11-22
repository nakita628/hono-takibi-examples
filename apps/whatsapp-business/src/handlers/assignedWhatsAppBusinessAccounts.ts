import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionUserIDAssignedWhatsappBusinessAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const assignedWhatsAppBusinessAccountsHandler = app.openapi(
  getVersionUserIDAssignedWhatsappBusinessAccountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
