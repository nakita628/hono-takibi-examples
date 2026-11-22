import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminProductsIdRoute,
  deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute,
  deleteAdminProductsIdVariantsVariantIdRoute,
  getAdminProductsIdOptionsRoute,
  getAdminProductsIdRoute,
  getAdminProductsIdVariantsRoute,
  getAdminProductsIdVariantsVariantIdRoute,
  getAdminProductsRoute,
  postAdminProductsBatchRoute,
  postAdminProductsExportRoute,
  postAdminProductsIdImagesImageIdVariantsBatchRoute,
  postAdminProductsIdOptionsBatchRoute,
  postAdminProductsIdRoute,
  postAdminProductsIdVariantsBatchRoute,
  postAdminProductsIdVariantsInventoryItemsBatchRoute,
  postAdminProductsIdVariantsRoute,
  postAdminProductsIdVariantsVariantIdImagesBatchRoute,
  postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute,
  postAdminProductsIdVariantsVariantIdInventoryItemsRoute,
  postAdminProductsIdVariantsVariantIdRoute,
  postAdminProductsImportRoute,
  postAdminProductsImportsRoute,
  postAdminProductsImportsTransactionIdConfirmRoute,
  postAdminProductsImportTransactionIdConfirmRoute,
  postAdminProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getAdminProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportTransactionIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportsTransactionIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdImagesImageIdVariantsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdOptionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsInventoryItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductsIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdImagesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
