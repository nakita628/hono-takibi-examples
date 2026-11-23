import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketplaceListingAccountsAccountIdRoute,
  getMarketplaceListingPlansPlanIdAccountsRoute,
  getMarketplaceListingPlansRoute,
  getMarketplaceListingStubbedAccountsAccountIdRoute,
  getMarketplaceListingStubbedPlansPlanIdAccountsRoute,
  getMarketplaceListingStubbedPlansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaceListingHandler = app
  .openapi(getMarketplaceListingAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceListingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceListingPlansPlanIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceListingStubbedAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceListingStubbedPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketplaceListingStubbedPlansPlanIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
