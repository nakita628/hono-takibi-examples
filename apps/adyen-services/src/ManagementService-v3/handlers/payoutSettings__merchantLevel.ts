import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute,
  getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute,
  getMerchantsMerchantIdPayoutSettingsRoute,
  patchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute,
  postMerchantsMerchantIdPayoutSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payoutSettings__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdPayoutSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdPayoutSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
