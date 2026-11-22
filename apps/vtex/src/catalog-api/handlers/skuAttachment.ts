import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSkuattachmentRoute,
  deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdRoute,
  getApiCatalogPvtStockkeepingunitSkuIdAttachmentRoute,
  postApiCatalogPvtSkuattachmentRoute,
  postApiCatalogSystemPvtSkuAssociateattachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuAttachmentHandler = app
  .openapi(deleteApiCatalogPvtSkuattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkuattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSkuAssociateattachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
