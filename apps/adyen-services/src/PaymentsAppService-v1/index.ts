import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdPaymentsAppsRoute,
  getMerchantsMerchantIdStoresStoreIdPaymentsAppsRoute,
  postMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRoute,
  postMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRoute,
  postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRoute,
} from './routes'
import {
  getMerchantsMerchantIdPaymentsAppsRouteHandler,
  getMerchantsMerchantIdStoresStoreIdPaymentsAppsRouteHandler,
  postMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRouteHandler,
  postMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRouteHandler,
  postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRoute,
    postMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRouteHandler,
  )
  .openapi(getMerchantsMerchantIdPaymentsAppsRoute, getMerchantsMerchantIdPaymentsAppsRouteHandler)
  .openapi(
    postMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRoute,
    postMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRouteHandler,
  )
  .openapi(
    postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRoute,
    postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRouteHandler,
  )
  .openapi(
    getMerchantsMerchantIdStoresStoreIdPaymentsAppsRoute,
    getMerchantsMerchantIdStoresStoreIdPaymentsAppsRouteHandler,
  )

export default app
