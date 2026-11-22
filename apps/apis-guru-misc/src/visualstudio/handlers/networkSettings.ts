import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
  patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
  postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginRoute,
  postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
  putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationRoute,
  putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkSettingsHandler = app
  .openapi(
    putApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeSubscriptionLifeCycleNotificationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceCreationValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceDeletionValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchCompletedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourcePatchValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdResourceGroupsResourceGroupProvidersGitHubNetworkResourceTypeResourceNameResourceReadBeginRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
