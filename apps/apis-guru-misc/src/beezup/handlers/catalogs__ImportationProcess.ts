import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserCatalogsImportationsRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdReportRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionRoute,
  getV2UserCatalogsStoreIdImportationsRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCancelRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCommitRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdProductsListRoute,
  postV2UserCatalogsStoreIdImportationsStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogs__ImportationProcessHandler = app
  .openapi(getV2UserCatalogsImportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdProductsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionRoute, (c) => {
    throw new Error('Not implemented')
  })
