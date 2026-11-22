import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdRegionsRegionIdRoute,
  getMerchantIdRegionsRegionIdRoute,
  getMerchantIdRegionsRoute,
  patchMerchantIdRegionsRegionIdRoute,
  postMerchantIdRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getMerchantIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
