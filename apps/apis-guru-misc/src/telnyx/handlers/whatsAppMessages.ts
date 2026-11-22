import { OpenAPIHono } from '@hono/zod-openapi'
import { patchWhatsappMessagesMessageIdRoute, postWhatsappMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppMessagesHandler = app
  .openapi(postWhatsappMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWhatsappMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
