import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserWebhooksEventSettingsRoute,
  getUserWebhooksEventSettingsSignedRoute,
  getUserWebhooksParseSettingsRoute,
  getUserWebhooksParseStatsRoute,
  patchUserWebhooksEventSettingsRoute,
  patchUserWebhooksEventSettingsSignedRoute,
  postUserWebhooksEventTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getUserWebhooksEventSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserWebhooksEventSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksEventSettingsSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserWebhooksEventSettingsSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserWebhooksEventTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksParseSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksParseStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
