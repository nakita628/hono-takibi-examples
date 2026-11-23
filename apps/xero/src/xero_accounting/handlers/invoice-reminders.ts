import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvoiceRemindersSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const invoiceRemindersHandler = app.openapi(getInvoiceRemindersSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
