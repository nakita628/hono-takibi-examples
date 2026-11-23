import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsWebhooksWebhookIDRoute,
  getEventsSandboxesRoute,
  getEventsSandboxesSandboxIDRoute,
  getEventsWebhooksRoute,
  getEventsWebhooksWebhookIDDeliveriesRoute,
  getEventsWebhooksWebhookIDRoute,
  getEventsWebhooksWebhookIDStatsRoute,
  patchEventsWebhooksWebhookIDRoute,
  postEventsWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsSandboxesSandboxIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsWebhooksWebhookIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsWebhooksWebhookIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsWebhooksWebhookIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsWebhooksWebhookIDDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsWebhooksWebhookIDStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
