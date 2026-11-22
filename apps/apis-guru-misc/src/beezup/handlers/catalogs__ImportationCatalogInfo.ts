import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapRoute,
  putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogs__ImportationCatalogInfoHandler = app
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
