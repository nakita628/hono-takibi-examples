import { OpenAPIHono } from '@hono/zod-openapi'
import { postWhatsappWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsappHandler = app.openapi(postWhatsappWebhooksRoute, (c) => {
  throw new Error('Not implemented')
})
