import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserWebhooksParseSettingsHostnameRoute,
  getUserWebhooksParseSettingsHostnameRoute,
  patchUserWebhooksParseSettingsHostnameRoute,
  postUserWebhooksParseSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settings__InboundParseHandler = app
  .openapi(postUserWebhooksParseSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserWebhooksParseSettingsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWebhooksParseSettingsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserWebhooksParseSettingsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
