import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppInstallationsInstallationIdRoute,
  deleteAppInstallationsInstallationIdSuspendedRoute,
  deleteApplicationsClientIdGrantRoute,
  deleteApplicationsClientIdTokenRoute,
  deleteInstallationTokenRoute,
  deleteUserInstallationsInstallationIdRepositoriesRepositoryIdRoute,
  getAppHookConfigRoute,
  getAppHookDeliveriesDeliveryIdRoute,
  getAppHookDeliveriesRoute,
  getAppInstallationRequestsRoute,
  getAppInstallationsInstallationIdRoute,
  getAppInstallationsRoute,
  getAppRoute,
  getAppsAppSlugRoute,
  getInstallationRepositoriesRoute,
  getMarketplaceListingAccountsAccountIdRoute,
  getMarketplaceListingPlansPlanIdAccountsRoute,
  getMarketplaceListingPlansRoute,
  getMarketplaceListingStubbedAccountsAccountIdRoute,
  getMarketplaceListingStubbedPlansPlanIdAccountsRoute,
  getMarketplaceListingStubbedPlansRoute,
  getOrgsOrgInstallationRoute,
  getReposOwnerRepoInstallationRoute,
  getUserInstallationsInstallationIdRepositoriesRoute,
  getUserInstallationsRoute,
  getUserMarketplacePurchasesRoute,
  getUserMarketplacePurchasesStubbedRoute,
  getUsersUsernameInstallationRoute,
  patchAppHookConfigRoute,
  patchApplicationsClientIdTokenRoute,
  postAppHookDeliveriesDeliveryIdAttemptsRoute,
  postAppInstallationsInstallationIdAccessTokensRoute,
  postApplicationsClientIdTokenRoute,
  postApplicationsClientIdTokenScopedRoute,
  postAppManifestsCodeConversionsRoute,
  putAppInstallationsInstallationIdSuspendedRoute,
  putUserInstallationsInstallationIdRepositoriesRepositoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppManifestsCodeConversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppHookDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppHookDeliveriesDeliveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppHookDeliveriesDeliveryIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstallationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstallationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppInstallationsInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstallationsInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppInstallationsInstallationIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppInstallationsInstallationIdSuspendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppInstallationsInstallationIdSuspendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsClientIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsClientIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsClientIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsClientIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsClientIdTokenScopedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstallationRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstallationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getOrgsOrgInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInstallationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInstallationsInstallationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserInstallationsInstallationIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserInstallationsInstallationIdRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMarketplacePurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMarketplacePurchasesStubbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
