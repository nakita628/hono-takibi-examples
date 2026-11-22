import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdRoute,
  deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdRoute,
  deleteApiCatalogPvtSubcollectionSubCollectionIdRoute,
  deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdRoute,
  getApiCatalogPvtCollectionCollectionIdSubcollectionRoute,
  getApiCatalogPvtSubcollectionSubCollectionIdRoute,
  postApiCatalogPvtCollectionCollectionIdPositionRoute,
  postApiCatalogPvtSubcollectionRoute,
  postApiCatalogPvtSubcollectionSubCollectionIdBrandRoute,
  postApiCatalogPvtSubcollectionSubCollectionIdCategoryRoute,
  postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitRoute,
  putApiCatalogPvtSubcollectionSubCollectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legacySubcollectionHandler = app
  .openapi(postApiCatalogPvtCollectionCollectionIdPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionCollectionIdSubcollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSubcollectionSubCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSubcollectionSubCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionSubCollectionIdBrandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionSubCollectionIdCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
