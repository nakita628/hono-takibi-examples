import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogPvtCollectionCollectionIdProductsRoute,
  getApiCatalogPvtCollectionInactiveRoute,
  getApiCatalogPvtCollectionStockkeepingunitImportfileexampleRoute,
  getApiCatalogSystemPvtCollectionSearchRoute,
  getApiCatalogSystemPvtCollectionSearchSearchTermsRoute,
  postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeRoute,
  postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertRoute,
  postApiCatalogPvtCollectionIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionBetaHandler = app
  .openapi(postApiCatalogPvtCollectionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionInactiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionStockkeepingunitImportfileexampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionCollectionIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtCollectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtCollectionSearchSearchTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
