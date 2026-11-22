import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2X402DiscoveryBundlesBundleSlugRoute,
  getV2X402DiscoveryBundlesRoute,
  getV2X402DiscoveryMerchantRoute,
  getV2X402DiscoveryResourcesRoute,
  getV2X402DiscoverySearchRoute,
  getV2X402SupportedRoute,
  postV2X402DiscoveryMcpRoute,
  postV2X402SettleRoute,
  postV2X402ValidateRoute,
  postV2X402VerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const x402FacilitatorHandler = app
  .openapi(postV2X402VerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2X402SettleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402SupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryMerchantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoverySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2X402DiscoveryMcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryBundlesBundleSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2X402ValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
