import { OpenAPIHono } from '@hono/zod-openapi'
import { getWhatsappStatisticsEventsRoute, postWhatsappSendMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionalWhatsAppHandler = app
  .openapi(postWhatsappSendMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappStatisticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
