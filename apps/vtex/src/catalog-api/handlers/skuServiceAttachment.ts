import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSkuservicetypeattachmentRoute,
  deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdRoute,
  postApiCatalogPvtSkuservicetypeattachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuServiceAttachmentHandler = app
  .openapi(deleteApiCatalogPvtSkuservicetypeattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkuservicetypeattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
