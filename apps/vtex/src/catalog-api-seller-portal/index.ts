import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSellerPortalBrandsBrandIdRoute,
  getApiCatalogSellerPortalBrandsRoute,
  getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRoute,
  getApiCatalogSellerPortalCategoryTreeRoute,
  getApiCatalogSellerPortalProductsParamRoute,
  getApiCatalogSellerPortalProductsProductIdDescriptionRoute,
  getApiCatalogSellerPortalProductsProductIdRoute,
  getApiCatalogSellerPortalSkusIdsRoute,
  getApiCatalogSellerPortalSkusSearchRoute,
  postApiCatalogSellerPortalBrandsRoute,
  postApiCatalogSellerPortalCategoryTreeCategoriesRoute,
  postApiCatalogSellerPortalProductsRoute,
  putApiCatalogSellerPortalBrandsBrandIdRoute,
  putApiCatalogSellerPortalCategoryTreeRoute,
  putApiCatalogSellerPortalProductsProductIdDescriptionRoute,
  putApiCatalogSellerPortalProductsProductIdRoute,
} from './routes'
import {
  getApiCatalogSellerPortalBrandsBrandIdRouteHandler,
  getApiCatalogSellerPortalBrandsRouteHandler,
  getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRouteHandler,
  getApiCatalogSellerPortalCategoryTreeRouteHandler,
  getApiCatalogSellerPortalProductsParamRouteHandler,
  getApiCatalogSellerPortalProductsProductIdDescriptionRouteHandler,
  getApiCatalogSellerPortalProductsProductIdRouteHandler,
  getApiCatalogSellerPortalSkusIdsRouteHandler,
  getApiCatalogSellerPortalSkusSearchRouteHandler,
  postApiCatalogSellerPortalBrandsRouteHandler,
  postApiCatalogSellerPortalCategoryTreeCategoriesRouteHandler,
  postApiCatalogSellerPortalProductsRouteHandler,
  putApiCatalogSellerPortalBrandsBrandIdRouteHandler,
  putApiCatalogSellerPortalCategoryTreeRouteHandler,
  putApiCatalogSellerPortalProductsProductIdDescriptionRouteHandler,
  putApiCatalogSellerPortalProductsProductIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiCatalogSellerPortalBrandsRoute, getApiCatalogSellerPortalBrandsRouteHandler)
  .openapi(postApiCatalogSellerPortalBrandsRoute, postApiCatalogSellerPortalBrandsRouteHandler)
  .openapi(
    getApiCatalogSellerPortalBrandsBrandIdRoute,
    getApiCatalogSellerPortalBrandsBrandIdRouteHandler,
  )
  .openapi(
    putApiCatalogSellerPortalBrandsBrandIdRoute,
    putApiCatalogSellerPortalBrandsBrandIdRouteHandler,
  )
  .openapi(
    getApiCatalogSellerPortalCategoryTreeRoute,
    getApiCatalogSellerPortalCategoryTreeRouteHandler,
  )
  .openapi(
    putApiCatalogSellerPortalCategoryTreeRoute,
    putApiCatalogSellerPortalCategoryTreeRouteHandler,
  )
  .openapi(
    postApiCatalogSellerPortalCategoryTreeCategoriesRoute,
    postApiCatalogSellerPortalCategoryTreeCategoriesRouteHandler,
  )
  .openapi(
    getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRoute,
    getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRouteHandler,
  )
  .openapi(postApiCatalogSellerPortalProductsRoute, postApiCatalogSellerPortalProductsRouteHandler)
  .openapi(
    getApiCatalogSellerPortalProductsParamRoute,
    getApiCatalogSellerPortalProductsParamRouteHandler,
  )
  .openapi(
    getApiCatalogSellerPortalProductsProductIdRoute,
    getApiCatalogSellerPortalProductsProductIdRouteHandler,
  )
  .openapi(
    putApiCatalogSellerPortalProductsProductIdRoute,
    putApiCatalogSellerPortalProductsProductIdRouteHandler,
  )
  .openapi(
    getApiCatalogSellerPortalProductsProductIdDescriptionRoute,
    getApiCatalogSellerPortalProductsProductIdDescriptionRouteHandler,
  )
  .openapi(
    putApiCatalogSellerPortalProductsProductIdDescriptionRoute,
    putApiCatalogSellerPortalProductsProductIdDescriptionRouteHandler,
  )
  .openapi(
    getApiCatalogSellerPortalSkusSearchRoute,
    getApiCatalogSellerPortalSkusSearchRouteHandler,
  )
  .openapi(getApiCatalogSellerPortalSkusIdsRoute, getApiCatalogSellerPortalSkusIdsRouteHandler)

export default app
