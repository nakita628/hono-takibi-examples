import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiWebhooksIdRoute,
  getApiWebhooksEventsRoute,
  getApiWebhooksIdDeliveriesDeliveryIdRoute,
  getApiWebhooksIdDeliveriesRoute,
  getApiWebhooksIdRoute,
  getApiWebhooksRoute,
  patchApiWebhooksIdRoute,
  postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRoute,
  postApiWebhooksIdPingRoute,
  postApiWebhooksRoute,
  putApiWebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksIdDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksIdDeliveriesDeliveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksIdDeliveriesDeliveryIdRedeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
