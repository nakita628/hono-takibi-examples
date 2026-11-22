import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NotificationsWebhooksWebhookIdRoute,
  getV1NotificationsWebhooksRoute,
  getV1NotificationsWebhooksWebhookIdEventTypesRoute,
  getV1NotificationsWebhooksWebhookIdRoute,
  patchV1NotificationsWebhooksWebhookIdRoute,
  postV1NotificationsWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postV1NotificationsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NotificationsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NotificationsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksWebhookIdEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
