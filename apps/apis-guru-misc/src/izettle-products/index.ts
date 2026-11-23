import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
  deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  deleteOrganizationsOrganizationUuidProductsProductUuidRoute,
  deleteOrganizationsOrganizationUuidProductsRoute,
  deleteV1TaxesTaxRateUuidRoute,
  getOrganizationsOrganizationUuidCategoriesV2Route,
  getOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  getOrganizationsOrganizationUuidDiscountsRoute,
  getOrganizationsOrganizationUuidImagesRoute,
  getOrganizationsOrganizationUuidImportStatusImportUuidRoute,
  getOrganizationsOrganizationUuidImportStatusRoute,
  getOrganizationsOrganizationUuidLibraryRoute,
  getOrganizationsOrganizationUuidProductsOptionsRoute,
  getOrganizationsOrganizationUuidProductsProductUuidRoute,
  getOrganizationsOrganizationUuidProductsRoute,
  getOrganizationsOrganizationUuidProductsV2CountRoute,
  getOrganizationsOrganizationUuidProductsV2Route,
  getV1TaxesCountRoute,
  getV1TaxesRoute,
  getV1TaxesSettingsRoute,
  getV1TaxesTaxRateUuidRoute,
  patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
  postOrganizationsOrganizationUuidCategoriesV2Route,
  postOrganizationsOrganizationUuidDiscountsRoute,
  postOrganizationsOrganizationUuidImportV2Route,
  postOrganizationsOrganizationUuidProductsOnlineSlugRoute,
  postOrganizationsOrganizationUuidProductsRoute,
  postV1TaxesRoute,
  putOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  putOrganizationsOrganizationUuidProductsV2ProductUuidRoute,
  putV1TaxesSettingsRoute,
  putV1TaxesTaxRateUuidRoute,
} from './routes'
import {
  deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRouteHandler,
  deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRouteHandler,
  deleteOrganizationsOrganizationUuidProductsProductUuidRouteHandler,
  deleteOrganizationsOrganizationUuidProductsRouteHandler,
  deleteV1TaxesTaxRateUuidRouteHandler,
  getOrganizationsOrganizationUuidCategoriesV2RouteHandler,
  getOrganizationsOrganizationUuidDiscountsDiscountUuidRouteHandler,
  getOrganizationsOrganizationUuidDiscountsRouteHandler,
  getOrganizationsOrganizationUuidImagesRouteHandler,
  getOrganizationsOrganizationUuidImportStatusImportUuidRouteHandler,
  getOrganizationsOrganizationUuidImportStatusRouteHandler,
  getOrganizationsOrganizationUuidLibraryRouteHandler,
  getOrganizationsOrganizationUuidProductsOptionsRouteHandler,
  getOrganizationsOrganizationUuidProductsProductUuidRouteHandler,
  getOrganizationsOrganizationUuidProductsRouteHandler,
  getOrganizationsOrganizationUuidProductsV2CountRouteHandler,
  getOrganizationsOrganizationUuidProductsV2RouteHandler,
  getV1TaxesCountRouteHandler,
  getV1TaxesRouteHandler,
  getV1TaxesSettingsRouteHandler,
  getV1TaxesTaxRateUuidRouteHandler,
  patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRouteHandler,
  postOrganizationsOrganizationUuidCategoriesV2RouteHandler,
  postOrganizationsOrganizationUuidDiscountsRouteHandler,
  postOrganizationsOrganizationUuidImportV2RouteHandler,
  postOrganizationsOrganizationUuidProductsOnlineSlugRouteHandler,
  postOrganizationsOrganizationUuidProductsRouteHandler,
  postV1TaxesRouteHandler,
  putOrganizationsOrganizationUuidDiscountsDiscountUuidRouteHandler,
  putOrganizationsOrganizationUuidProductsV2ProductUuidRouteHandler,
  putV1TaxesSettingsRouteHandler,
  putV1TaxesTaxRateUuidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOrganizationsOrganizationUuidCategoriesV2Route,
    getOrganizationsOrganizationUuidCategoriesV2RouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationUuidCategoriesV2Route,
    postOrganizationsOrganizationUuidCategoriesV2RouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
    deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRouteHandler,
  )
  .openapi(
    patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
    patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidDiscountsRoute,
    getOrganizationsOrganizationUuidDiscountsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationUuidDiscountsRoute,
    postOrganizationsOrganizationUuidDiscountsRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
    deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
    getOrganizationsOrganizationUuidDiscountsDiscountUuidRouteHandler,
  )
  .openapi(
    putOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
    putOrganizationsOrganizationUuidDiscountsDiscountUuidRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidImagesRoute,
    getOrganizationsOrganizationUuidImagesRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidImportStatusRoute,
    getOrganizationsOrganizationUuidImportStatusRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidImportStatusImportUuidRoute,
    getOrganizationsOrganizationUuidImportStatusImportUuidRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationUuidImportV2Route,
    postOrganizationsOrganizationUuidImportV2RouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidLibraryRoute,
    getOrganizationsOrganizationUuidLibraryRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationUuidProductsRoute,
    deleteOrganizationsOrganizationUuidProductsRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidProductsRoute,
    getOrganizationsOrganizationUuidProductsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationUuidProductsRoute,
    postOrganizationsOrganizationUuidProductsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationUuidProductsOnlineSlugRoute,
    postOrganizationsOrganizationUuidProductsOnlineSlugRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidProductsOptionsRoute,
    getOrganizationsOrganizationUuidProductsOptionsRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidProductsV2Route,
    getOrganizationsOrganizationUuidProductsV2RouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidProductsV2CountRoute,
    getOrganizationsOrganizationUuidProductsV2CountRouteHandler,
  )
  .openapi(
    putOrganizationsOrganizationUuidProductsV2ProductUuidRoute,
    putOrganizationsOrganizationUuidProductsV2ProductUuidRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationUuidProductsProductUuidRoute,
    deleteOrganizationsOrganizationUuidProductsProductUuidRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationUuidProductsProductUuidRoute,
    getOrganizationsOrganizationUuidProductsProductUuidRouteHandler,
  )
  .openapi(getV1TaxesRoute, getV1TaxesRouteHandler)
  .openapi(postV1TaxesRoute, postV1TaxesRouteHandler)
  .openapi(getV1TaxesCountRoute, getV1TaxesCountRouteHandler)
  .openapi(getV1TaxesSettingsRoute, getV1TaxesSettingsRouteHandler)
  .openapi(putV1TaxesSettingsRoute, putV1TaxesSettingsRouteHandler)
  .openapi(deleteV1TaxesTaxRateUuidRoute, deleteV1TaxesTaxRateUuidRouteHandler)
  .openapi(getV1TaxesTaxRateUuidRoute, getV1TaxesTaxRateUuidRouteHandler)
  .openapi(putV1TaxesTaxRateUuidRoute, putV1TaxesTaxRateUuidRouteHandler)

export default app
