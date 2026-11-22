import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdPaymentsAppsRoute,
  getMerchantsMerchantIdStoresStoreIdPaymentsAppsRoute,
  postMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRoute,
  postMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRoute,
  postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsAppHandler = app
  .openapi(postMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdPaymentsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdStoresStoreIdPaymentsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
