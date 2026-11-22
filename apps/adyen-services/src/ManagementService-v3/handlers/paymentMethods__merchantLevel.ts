import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRoute,
  getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute,
  getMerchantsMerchantIdPaymentMethodSettingsRoute,
  patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute,
  postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRoute,
  postMerchantsMerchantIdPaymentMethodSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethods__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdPaymentMethodSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdPaymentMethodSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
