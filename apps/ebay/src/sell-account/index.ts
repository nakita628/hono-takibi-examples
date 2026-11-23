import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFulfillmentPolicyFulfillmentPolicyIdRoute,
  deletePaymentPolicyPaymentPolicyIdRoute,
  deleteReturnPolicyReturnPolicyIdRoute,
  deleteSalesTaxCountryCodeJurisdictionIdRoute,
  getAdvertisingEligibilityRoute,
  getCustomPolicyCustomPolicyIdRoute,
  getCustomPolicyIndexRoute,
  getFulfillmentPolicyFulfillmentPolicyIdRoute,
  getFulfillmentPolicyGetByPolicyNameRoute,
  getFulfillmentPolicyRoute,
  getKycRoute,
  getPaymentPolicyGetByPolicyNameRoute,
  getPaymentPolicyPaymentPolicyIdRoute,
  getPaymentPolicyRoute,
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRoute,
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeRoute,
  getPrivilegeRoute,
  getProgramGetOptedInProgramsRoute,
  getRateTableRoute,
  getReturnPolicyGetByPolicyNameRoute,
  getReturnPolicyReturnPolicyIdRoute,
  getReturnPolicyRoute,
  getSalesTaxCountryCodeJurisdictionIdRoute,
  getSalesTaxRoute,
  getSubscriptionRoute,
  postCustomPolicyIndexRoute,
  postFulfillmentPolicyIndexRoute,
  postPaymentPolicyRoute,
  postProgramOptInRoute,
  postProgramOptOutRoute,
  postReturnPolicyRoute,
  putCustomPolicyCustomPolicyIdRoute,
  putFulfillmentPolicyFulfillmentPolicyIdRoute,
  putPaymentPolicyPaymentPolicyIdRoute,
  putReturnPolicyReturnPolicyIdRoute,
  putSalesTaxCountryCodeJurisdictionIdRoute,
} from './routes'
import {
  deleteFulfillmentPolicyFulfillmentPolicyIdRouteHandler,
  deletePaymentPolicyPaymentPolicyIdRouteHandler,
  deleteReturnPolicyReturnPolicyIdRouteHandler,
  deleteSalesTaxCountryCodeJurisdictionIdRouteHandler,
  getAdvertisingEligibilityRouteHandler,
  getCustomPolicyCustomPolicyIdRouteHandler,
  getCustomPolicyIndexRouteHandler,
  getFulfillmentPolicyFulfillmentPolicyIdRouteHandler,
  getFulfillmentPolicyGetByPolicyNameRouteHandler,
  getFulfillmentPolicyRouteHandler,
  getKycRouteHandler,
  getPaymentPolicyGetByPolicyNameRouteHandler,
  getPaymentPolicyPaymentPolicyIdRouteHandler,
  getPaymentPolicyRouteHandler,
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRouteHandler,
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeRouteHandler,
  getPrivilegeRouteHandler,
  getProgramGetOptedInProgramsRouteHandler,
  getRateTableRouteHandler,
  getReturnPolicyGetByPolicyNameRouteHandler,
  getReturnPolicyReturnPolicyIdRouteHandler,
  getReturnPolicyRouteHandler,
  getSalesTaxCountryCodeJurisdictionIdRouteHandler,
  getSalesTaxRouteHandler,
  getSubscriptionRouteHandler,
  postCustomPolicyIndexRouteHandler,
  postFulfillmentPolicyIndexRouteHandler,
  postPaymentPolicyRouteHandler,
  postProgramOptInRouteHandler,
  postProgramOptOutRouteHandler,
  postReturnPolicyRouteHandler,
  putCustomPolicyCustomPolicyIdRouteHandler,
  putFulfillmentPolicyFulfillmentPolicyIdRouteHandler,
  putPaymentPolicyPaymentPolicyIdRouteHandler,
  putReturnPolicyReturnPolicyIdRouteHandler,
  putSalesTaxCountryCodeJurisdictionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdvertisingEligibilityRoute, getAdvertisingEligibilityRouteHandler)
  .openapi(getCustomPolicyIndexRoute, getCustomPolicyIndexRouteHandler)
  .openapi(postCustomPolicyIndexRoute, postCustomPolicyIndexRouteHandler)
  .openapi(getCustomPolicyCustomPolicyIdRoute, getCustomPolicyCustomPolicyIdRouteHandler)
  .openapi(putCustomPolicyCustomPolicyIdRoute, putCustomPolicyCustomPolicyIdRouteHandler)
  .openapi(getFulfillmentPolicyRoute, getFulfillmentPolicyRouteHandler)
  .openapi(postFulfillmentPolicyIndexRoute, postFulfillmentPolicyIndexRouteHandler)
  .openapi(
    getFulfillmentPolicyGetByPolicyNameRoute,
    getFulfillmentPolicyGetByPolicyNameRouteHandler,
  )
  .openapi(
    deleteFulfillmentPolicyFulfillmentPolicyIdRoute,
    deleteFulfillmentPolicyFulfillmentPolicyIdRouteHandler,
  )
  .openapi(
    getFulfillmentPolicyFulfillmentPolicyIdRoute,
    getFulfillmentPolicyFulfillmentPolicyIdRouteHandler,
  )
  .openapi(
    putFulfillmentPolicyFulfillmentPolicyIdRoute,
    putFulfillmentPolicyFulfillmentPolicyIdRouteHandler,
  )
  .openapi(getKycRoute, getKycRouteHandler)
  .openapi(getPaymentPolicyRoute, getPaymentPolicyRouteHandler)
  .openapi(postPaymentPolicyRoute, postPaymentPolicyRouteHandler)
  .openapi(getPaymentPolicyGetByPolicyNameRoute, getPaymentPolicyGetByPolicyNameRouteHandler)
  .openapi(deletePaymentPolicyPaymentPolicyIdRoute, deletePaymentPolicyPaymentPolicyIdRouteHandler)
  .openapi(getPaymentPolicyPaymentPolicyIdRoute, getPaymentPolicyPaymentPolicyIdRouteHandler)
  .openapi(putPaymentPolicyPaymentPolicyIdRoute, putPaymentPolicyPaymentPolicyIdRouteHandler)
  .openapi(
    getPaymentsProgramMarketplaceIdPaymentsProgramTypeRoute,
    getPaymentsProgramMarketplaceIdPaymentsProgramTypeRouteHandler,
  )
  .openapi(
    getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRoute,
    getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingRouteHandler,
  )
  .openapi(getPrivilegeRoute, getPrivilegeRouteHandler)
  .openapi(getProgramGetOptedInProgramsRoute, getProgramGetOptedInProgramsRouteHandler)
  .openapi(postProgramOptInRoute, postProgramOptInRouteHandler)
  .openapi(postProgramOptOutRoute, postProgramOptOutRouteHandler)
  .openapi(getRateTableRoute, getRateTableRouteHandler)
  .openapi(getReturnPolicyRoute, getReturnPolicyRouteHandler)
  .openapi(postReturnPolicyRoute, postReturnPolicyRouteHandler)
  .openapi(getReturnPolicyGetByPolicyNameRoute, getReturnPolicyGetByPolicyNameRouteHandler)
  .openapi(deleteReturnPolicyReturnPolicyIdRoute, deleteReturnPolicyReturnPolicyIdRouteHandler)
  .openapi(getReturnPolicyReturnPolicyIdRoute, getReturnPolicyReturnPolicyIdRouteHandler)
  .openapi(putReturnPolicyReturnPolicyIdRoute, putReturnPolicyReturnPolicyIdRouteHandler)
  .openapi(getSalesTaxRoute, getSalesTaxRouteHandler)
  .openapi(
    deleteSalesTaxCountryCodeJurisdictionIdRoute,
    deleteSalesTaxCountryCodeJurisdictionIdRouteHandler,
  )
  .openapi(
    getSalesTaxCountryCodeJurisdictionIdRoute,
    getSalesTaxCountryCodeJurisdictionIdRouteHandler,
  )
  .openapi(
    putSalesTaxCountryCodeJurisdictionIdRoute,
    putSalesTaxCountryCodeJurisdictionIdRouteHandler,
  )
  .openapi(getSubscriptionRoute, getSubscriptionRouteHandler)

export default app
