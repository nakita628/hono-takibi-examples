import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute,
  getApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute,
  postApiCatalogPvtSkuservicevalueRoute,
  putApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuServiceValueHandler = app
  .openapi(postApiCatalogPvtSkuservicevalueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
