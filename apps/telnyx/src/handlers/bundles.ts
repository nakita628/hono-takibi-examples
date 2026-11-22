import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBundlePricingBillingBundlesBundleIdRoute,
  getBundlePricingBillingBundlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bundlesHandler = app
  .openapi(getBundlePricingBillingBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBundlePricingBillingBundlesBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
