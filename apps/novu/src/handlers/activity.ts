import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app.openapi(
  postV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
