import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountBillingMethodsIdRoute,
  deleteAccountBillingSubscriptionsIdRoute,
  deleteAccountDevicesIdRoute,
  deleteAccountProfileBookmarksItemIdRoute,
  deleteAccountProfilesIdRoute,
  deleteAccountProfileWatchedRoute,
  getAccountBillingMethodsIdRoute,
  getAccountBillingMethodsRoute,
  getAccountBillingPurchasesRoute,
  getAccountDevicesIdRoute,
  getAccountDevicesRoute,
  getAccountEntitlementsRoute,
  getAccountItemsIdVideosGuardedRoute,
  getAccountItemsIdVideosRoute,
  getAccountNonceRoute,
  getAccountProfileBookmarksItemIdRoute,
  getAccountProfileBookmarksListRoute,
  getAccountProfileBookmarksRoute,
  getAccountProfileContinueWatchingListRoute,
  getAccountProfileItemsItemIdNextRoute,
  getAccountProfileRatingsItemIdRoute,
  getAccountProfileRatingsListRoute,
  getAccountProfileRatingsRoute,
  getAccountProfileRoute,
  getAccountProfilesIdRoute,
  getAccountProfileWatchedItemIdRoute,
  getAccountProfileWatchedListRoute,
  getAccountProfileWatchedRoute,
  getAccountRoute,
  patchAccountProfilesIdRoute,
  patchAccountRoute,
  postAccountBillingMethodsRoute,
  postAccountBillingPurchasesRoute,
  postAccountDevicesAuthorizationRoute,
  postAccountDevicesRoute,
  postAccountProfilesRoute,
  postAccountRequestEmailVerificationRoute,
  putAccountBillingSubscriptionsIdRoute,
  putAccountDevicesIdNameRoute,
  putAccountPasswordRoute,
  putAccountPinRoute,
  putAccountProfileBookmarksItemIdRoute,
  putAccountProfileRatingsItemIdRoute,
  putAccountProfileWatchedItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountBillingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountBillingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountBillingMethodsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountBillingMethodsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountBillingPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountBillingPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountBillingSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountBillingSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountDevicesAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountDevicesIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountItemsIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountItemsIdVideosGuardedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileBookmarksListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProfileBookmarksItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileBookmarksItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProfileBookmarksItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileContinueWatchingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileItemsItemIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileRatingsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileRatingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProfileRatingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProfileWatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileWatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileWatchedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileWatchedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProfileWatchedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRequestEmailVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
