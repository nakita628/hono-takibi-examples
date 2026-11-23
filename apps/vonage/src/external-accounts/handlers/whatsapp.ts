import { OpenAPIHono } from '@hono/zod-openapi'
import { getWhatsappExternalIdRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsappHandler = app.openapi(getWhatsappExternalIdRoute, (c) => {
  throw new Error('Not implemented')
})
