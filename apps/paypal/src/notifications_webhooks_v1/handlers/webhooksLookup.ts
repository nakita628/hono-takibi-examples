import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NotificationsWebhooksLookupWebhookLookupIdRoute,
  getV1NotificationsWebhooksLookupRoute,
  getV1NotificationsWebhooksLookupWebhookLookupIdRoute,
  postV1NotificationsWebhooksLookupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksLookupHandler = app
  .openapi(postV1NotificationsWebhooksLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksLookupWebhookLookupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NotificationsWebhooksLookupWebhookLookupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
