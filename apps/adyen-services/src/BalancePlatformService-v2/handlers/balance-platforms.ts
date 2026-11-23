import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  deleteBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRoute,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesRoute,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  getBalancePlatformsIdAccountHoldersRoute,
  getBalancePlatformsIdRoute,
  getBalancePlatformsIdTransactionRulesRoute,
  getBalancePlatformsIdTransferLimitsRoute,
  getBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
  patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
  postBalancePlatformsIdTransferLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balancePlatformsHandler = app
  .openapi(getBalancePlatformsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsIdAccountHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsIdTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsBalancePlatformIdPayoutSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getBalancePlatformsIdTransferLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalancePlatformsIdTransferLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsIdTransferLimitsTransferLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBalancePlatformsIdTransferLimitsTransferLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
