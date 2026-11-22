import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute,
  getApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute,
  postApiCatalogPvtSkuservicetypeRoute,
  putApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuServiceTypeHandler = app
  .openapi(postApiCatalogPvtSkuservicetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
