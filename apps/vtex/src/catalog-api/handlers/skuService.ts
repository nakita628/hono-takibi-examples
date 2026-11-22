import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSkuserviceSkuServiceIdRoute,
  getApiCatalogPvtSkuserviceSkuServiceIdRoute,
  postApiCatalogPvtSkuserviceRoute,
  putApiCatalogPvtSkuserviceSkuServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuServiceHandler = app
  .openapi(postApiCatalogPvtSkuserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuserviceSkuServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkuserviceSkuServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSkuserviceSkuServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
