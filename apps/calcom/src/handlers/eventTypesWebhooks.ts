import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2EventTypesEventTypeIdWebhooksRoute,
  deleteV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
  getV2EventTypesEventTypeIdWebhooksRoute,
  getV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
  patchV2EventTypesEventTypeIdWebhooksWebhookIdRoute,
  postV2EventTypesEventTypeIdWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventTypesWebhooksHandler = app
  .openapi(postV2EventTypesEventTypeIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2EventTypesEventTypeIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EventTypesEventTypeIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EventTypesEventTypeIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
