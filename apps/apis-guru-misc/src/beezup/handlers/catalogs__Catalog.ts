import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserCatalogsStoreIdCustomColumnsColumnIdRoute,
  getV2UserCatalogsStoreIdCatalogColumnsRoute,
  getV2UserCatalogsStoreIdCategoriesRoute,
  getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute,
  getV2UserCatalogsStoreIdCustomColumnsRoute,
  getV2UserCatalogsStoreIdInputConfigurationRoute,
  getV2UserCatalogsStoreIdProductsProductIdRoute,
  getV2UserCatalogsStoreIdProductsRandomRoute,
  getV2UserCatalogsStoreIdProductsRoute,
  getV2UserCatalogsStoreIdRoute,
  postV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameRoute,
  postV2UserCatalogsStoreIdCustomColumnsColumnIdRenameRoute,
  postV2UserCatalogsStoreIdCustomColumnsComputeExpressionRoute,
  postV2UserCatalogsStoreIdProductsListRoute,
  putV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute,
  putV2UserCatalogsStoreIdCustomColumnsColumnIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogs__CatalogHandler = app
  .openapi(getV2UserCatalogsStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCatalogColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCustomColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdCustomColumnsComputeExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCatalogsStoreIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCatalogsStoreIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdCustomColumnsColumnIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdInputConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdProductsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdProductsRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
