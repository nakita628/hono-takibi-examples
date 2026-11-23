import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksWebhookIdRoute,
  deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  deleteWebhooksWebhookIdWebhookTokenRoute,
  getWebhooksWebhookIdRoute,
  getWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  getWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  getWebhooksWebhookIdWebhookTokenRoute,
  patchWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  patchWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  patchWebhooksWebhookIdWebhookTokenRoute,
  postWebhooksWebhookIdWebhookTokenGithubRoute,
  postWebhooksWebhookIdWebhookTokenRoute,
  postWebhooksWebhookIdWebhookTokenSlackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdWebhookTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdWebhookTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdWebhookTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksWebhookIdWebhookTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdWebhookTokenGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdWebhookTokenMessagesOriginalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksWebhookIdWebhookTokenMessagesOriginalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksWebhookIdWebhookTokenSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
