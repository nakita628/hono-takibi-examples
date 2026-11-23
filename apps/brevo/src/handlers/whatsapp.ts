import { OpenAPIHono } from '@hono/zod-openapi'
import { getWhatsappStatisticsEventsRoute, postWhatsappSendMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsappHandler = app
  .openapi(postWhatsappSendMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappStatisticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
