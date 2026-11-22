import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsCatalogIdCountryLocaleMappingRoute,
  getCatalogsAvailableFilterValuesRoute,
  getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute,
  getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsRoute,
  getCatalogsCatalogIdCountryLocaleMappingRoute,
  getCatalogsRoute,
  patchCatalogsCatalogIdRoute,
  postCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewRoute,
  postCatalogsCatalogIdAutoLocalizationConfigsRoute,
  postCatalogsRoute,
  postCollaborativeCatalogsRoute,
  putCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute,
  putCatalogsCatalogIdCountryLocaleMappingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogsHandler = app
  .openapi(getCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsAvailableFilterValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsCatalogIdAutoLocalizationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCatalogsCatalogIdCountryLocaleMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCatalogsCatalogIdCountryLocaleMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsCatalogIdCountryLocaleMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollaborativeCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
