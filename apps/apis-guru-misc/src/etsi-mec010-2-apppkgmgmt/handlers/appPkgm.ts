import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppPackagesAppPkgIdRoute,
  deleteSubscriptionsSubscriptionIdRoute,
  getAppPackagesAppPkgIdAppdRoute,
  getAppPackagesAppPkgIdPackageContentRoute,
  getAppPackagesAppPkgIdRoute,
  getAppPackagesRoute,
  getOnboardedAppPackagesAppDIdAppdRoute,
  getOnboardedAppPackagesAppDIdPackageContentRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchAppPackagesAppPkgIdRoute,
  postAppPackagesRoute,
  postSubscriptionsRoute,
  putAppPackagesAppPkgIdPackageContentRoute,
  putOnboardedAppPackagesAppDIdPackageContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPkgmHandler = app
  .openapi(getAppPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppPackagesAppPkgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppPackagesAppPkgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppPackagesAppPkgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppPackagesAppPkgIdAppdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppPackagesAppPkgIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppPackagesAppPkgIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOnboardedAppPackagesAppDIdAppdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOnboardedAppPackagesAppDIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOnboardedAppPackagesAppDIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
