import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookDeleteJsonRoute,
  getWebhookCountJsonRoute,
  getWebhookEventsJsonRoute,
  getWebhookListJsonRoute,
  postWebhookCreateJsonRoute,
  putWebhookUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookHandler = app
  .openapi(getWebhookCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookCreateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookEventsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhookUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
