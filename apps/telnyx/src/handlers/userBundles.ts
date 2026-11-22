import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBundlePricingUserBundlesUserBundleIdRoute,
  getBundlePricingUserBundlesRoute,
  getBundlePricingUserBundlesUnusedRoute,
  getBundlePricingUserBundlesUserBundleIdResourcesRoute,
  getBundlePricingUserBundlesUserBundleIdRoute,
  postBundlePricingUserBundlesBulkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userBundlesHandler = app
  .openapi(getBundlePricingUserBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBundlePricingUserBundlesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBundlePricingUserBundlesUnusedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBundlePricingUserBundlesUserBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBundlePricingUserBundlesUserBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBundlePricingUserBundlesUserBundleIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
