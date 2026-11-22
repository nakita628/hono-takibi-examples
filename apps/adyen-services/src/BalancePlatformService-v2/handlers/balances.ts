import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balancesHandler = app
  .openapi(getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
