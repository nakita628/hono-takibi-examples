import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCountryCountryCodeSalesTaxJurisdictionRoute,
  getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesRoute,
  getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesRoute,
  getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsRoute,
  getMarketplaceMarketplaceIdGetItemConditionPoliciesRoute,
  getMarketplaceMarketplaceIdGetListingStructurePoliciesRoute,
  getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesRoute,
  getMarketplaceMarketplaceIdGetReturnPoliciesRoute,
} from './routes'
import {
  getCountryCountryCodeSalesTaxJurisdictionRouteHandler,
  getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesRouteHandler,
  getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesRouteHandler,
  getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsRouteHandler,
  getMarketplaceMarketplaceIdGetItemConditionPoliciesRouteHandler,
  getMarketplaceMarketplaceIdGetListingStructurePoliciesRouteHandler,
  getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesRouteHandler,
  getMarketplaceMarketplaceIdGetReturnPoliciesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCountryCountryCodeSalesTaxJurisdictionRoute,
    getCountryCountryCodeSalesTaxJurisdictionRouteHandler,
  )
  .openapi(
    getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesRoute,
    getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesRouteHandler,
  )
  .openapi(
    getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesRoute,
    getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesRouteHandler,
  )
  .openapi(
    getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsRoute,
    getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsRouteHandler,
  )
  .openapi(
    getMarketplaceMarketplaceIdGetItemConditionPoliciesRoute,
    getMarketplaceMarketplaceIdGetItemConditionPoliciesRouteHandler,
  )
  .openapi(
    getMarketplaceMarketplaceIdGetListingStructurePoliciesRoute,
    getMarketplaceMarketplaceIdGetListingStructurePoliciesRouteHandler,
  )
  .openapi(
    getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesRoute,
    getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesRouteHandler,
  )
  .openapi(
    getMarketplaceMarketplaceIdGetReturnPoliciesRoute,
    getMarketplaceMarketplaceIdGetReturnPoliciesRouteHandler,
  )

export default app
