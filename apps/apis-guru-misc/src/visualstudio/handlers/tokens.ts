import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1TokensPlansPlanNameDeleteAllCodespacesRoute,
  postApiV1TokensPlansPlanNameReadAllCodespacesRoute,
  postApiV1TokensPlansPlanNameWriteCodespacesRoute,
  postApiV1TokensPlansPlanNameWriteDelegatesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesRoute,
  postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsRoute,
  putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(postApiV1TokensPlansPlanNameDeleteAllCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensPlansPlanNameReadAllCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensPlansPlanNameWriteCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TokensPlansPlanNameWriteDelegatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameDeleteAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameReadAllEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteCodespacesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteDelegatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1TokensSubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersProviderNamespacePlansResourceNameWriteEnvironmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
