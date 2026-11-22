import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatConfigRoute,
  getApiV1LivechatConfigRoutingRoute,
  getApiV1LivechatIntegrationsSettingsRoute,
  getApiV1LivechatQueueRoute,
  postApiV1LivechatSmsIncomingServiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const livechatHandler = app
  .openapi(getApiV1LivechatConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatIntegrationsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatSmsIncomingServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatConfigRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
