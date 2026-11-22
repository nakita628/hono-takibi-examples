import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CatalogObjectObjectIdRoute,
  getV2CatalogInfoRoute,
  getV2CatalogListRoute,
  getV2CatalogObjectObjectIdRoute,
  postV2CatalogBatchDeleteRoute,
  postV2CatalogBatchRetrieveRoute,
  postV2CatalogBatchUpsertRoute,
  postV2CatalogObjectRoute,
  postV2CatalogSearchCatalogItemsRoute,
  postV2CatalogSearchRoute,
  postV2CatalogUpdateItemModifierListsRoute,
  postV2CatalogUpdateItemTaxesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app
  .openapi(postV2CatalogBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CatalogObjectObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogObjectObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogSearchCatalogItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogUpdateItemModifierListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogUpdateItemTaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
