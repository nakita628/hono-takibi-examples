import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NotificationsWebhooksLookupWebhookLookupIdRoute,
  deleteV1NotificationsWebhooksWebhookIdRoute,
  getV1NotificationsWebhooksEventsEventIdRoute,
  getV1NotificationsWebhooksEventsRoute,
  getV1NotificationsWebhooksEventTypesRoute,
  getV1NotificationsWebhooksLookupRoute,
  getV1NotificationsWebhooksLookupWebhookLookupIdRoute,
  getV1NotificationsWebhooksRoute,
  getV1NotificationsWebhooksWebhookIdEventTypesRoute,
  getV1NotificationsWebhooksWebhookIdRoute,
  patchV1NotificationsWebhooksWebhookIdRoute,
  postV1NotificationsSimulateEventRoute,
  postV1NotificationsVerifyWebhookSignatureRoute,
  postV1NotificationsWebhooksEventsEventIdResendRoute,
  postV1NotificationsWebhooksLookupRoute,
  postV1NotificationsWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
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
  .openapi(postV1NotificationsVerifyWebhookSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationsWebhooksEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotificationsWebhooksEventsEventIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotificationsSimulateEventRoute, (c) => {
    throw new Error('Not implemented')
  })
