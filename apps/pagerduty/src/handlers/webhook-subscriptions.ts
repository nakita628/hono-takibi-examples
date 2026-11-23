import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookSubscriptionsIdRoute,
  deleteWebhookSubscriptionsOauthClientsIdRoute,
  getWebhookSubscriptionsIdRoute,
  getWebhookSubscriptionsOauthClientsIdRoute,
  getWebhookSubscriptionsOauthClientsRoute,
  getWebhookSubscriptionsRoute,
  postWebhookSubscriptionsIdEnableRoute,
  postWebhookSubscriptionsIdPingRoute,
  postWebhookSubscriptionsOauthClientsRoute,
  postWebhookSubscriptionsRoute,
  putWebhookSubscriptionsIdRoute,
  putWebhookSubscriptionsOauthClientsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookSubscriptionsHandler = app
  .openapi(getWebhookSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhookSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookSubscriptionsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookSubscriptionsIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookSubscriptionsOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookSubscriptionsOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookSubscriptionsOauthClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebhookSubscriptionsOauthClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhookSubscriptionsOauthClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
