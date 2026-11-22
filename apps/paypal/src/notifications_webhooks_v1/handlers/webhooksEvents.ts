import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NotificationsWebhooksEventsEventIdRoute,
  getV1NotificationsWebhooksEventsRoute,
  postV1NotificationsWebhooksEventsEventIdResendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksEventsHandler = app
  .openapi(getV1NotificationsWebhooksEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotificationsWebhooksEventsEventIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
