import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountBillingMethodsIdRoute,
  deleteAccountBillingSubscriptionsIdRoute,
  deleteAccountDevicesIdRoute,
  deleteAccountProfilesIdRoute,
  getAccountBillingMethodsIdRoute,
  getAccountBillingMethodsRoute,
  getAccountBillingPurchasesRoute,
  getAccountDevicesIdRoute,
  getAccountDevicesRoute,
  getAccountEntitlementsRoute,
  getAccountItemsIdVideosGuardedRoute,
  getAccountItemsIdVideosRoute,
  getAccountNonceRoute,
  getAccountProfilesIdRoute,
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
