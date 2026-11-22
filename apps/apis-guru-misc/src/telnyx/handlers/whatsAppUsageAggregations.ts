import { OpenAPIHono } from '@hono/zod-openapi'
import { getWhatsappUsageAggregationsRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppUsageAggregationsHandler = app.openapi(
  getWhatsappUsageAggregationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
