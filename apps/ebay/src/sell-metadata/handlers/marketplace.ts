import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesRoute,
  getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesRoute,
  getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsRoute,
  getMarketplaceMarketplaceIdGetItemConditionPoliciesRoute,
  getMarketplaceMarketplaceIdGetListingStructurePoliciesRoute,
  getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesRoute,
  getMarketplaceMarketplaceIdGetReturnPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaceHandler = app
  .openapi(getMarketplaceMarketplaceIdGetAutomotivePartsCompatibilityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceMarketplaceIdGetExtendedProducerResponsibilityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceMarketplaceIdGetHazardousMaterialsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceMarketplaceIdGetItemConditionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceMarketplaceIdGetListingStructurePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceMarketplaceIdGetNegotiatedPricePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceMarketplaceIdGetReturnPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
