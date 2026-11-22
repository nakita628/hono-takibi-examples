import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsCatalogIdLocalStoresRoute,
  getCatalogsCatalogIdLocalStoresRoute,
  getCatalogsCatalogIdSupplementalItemsBatchBatchIdRoute,
  patchCatalogsCatalogIdLocalStoresRoute,
  postCatalogsCatalogIdLocalInventoryItemsBatchRoute,
  postCatalogsCatalogIdLocalInventoryItemsQueryRoute,
  postCatalogsCatalogIdLocalStoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogSupplementalHandler = app
  .openapi(postCatalogsCatalogIdLocalInventoryItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsCatalogIdLocalInventoryItemsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsCatalogIdLocalStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsCatalogIdSupplementalItemsBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
