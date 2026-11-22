import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4SettingsKeypairRoute,
  deleteV4SettingsWebhooksWebhookIdRoute,
  getV4SettingsKeypairRoute,
  getV4SettingsKeypairsRoute,
  getV4SettingsNotificationsChannelsRoute,
  getV4SettingsRoute,
  getV4SettingsWebhooksEventTypesRoute,
  getV4SettingsWebhooksRoute,
  getV4SettingsWebhooksWebhookIdRoute,
  postV4SettingsKeypairRoute,
  postV4SettingsKeypairsRoute,
  postV4SettingsWebhooksRoute,
  postV4SettingsWebhooksWebhookIdResetLifetimeRoute,
  putV4SettingsNotificationsChannelsRoute,
  putV4SettingsRoute,
  putV4SettingsWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getV4SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SettingsKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsNotificationsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SettingsNotificationsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsWebhooksEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsWebhooksWebhookIdResetLifetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
