import { OpenAPIHono } from '@hono/zod-openapi'
import { getWhatsappExternalIdRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppHandler = app.openapi(getWhatsappExternalIdRoute, (c) => {
  throw new Error('Not implemented')
})
