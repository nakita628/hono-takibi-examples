import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSpecificationIdRoute,
  deleteCategoriesSlugRoute,
  deleteChangelogsSlugRoute,
  deleteCustompagesSlugRoute,
  deleteDocsSlugRoute,
  deleteVersionVersionIdRoute,
  getApiRegistryUuidRoute,
  getApiSpecificationRoute,
  getApplyRoute,
  getCategoriesRoute,
  getCategoriesSlugDocsRoute,
  getCategoriesSlugRoute,
  getChangelogsRoute,
  getChangelogsSlugRoute,
  getCustompagesRoute,
  getCustompagesSlugRoute,
  getDocsSlugProductionRoute,
  getDocsSlugRoute,
  getRoute,
  getSchemaRoute,
  getVersionRoute,
  getVersionVersionIdRoute,
  postApiSpecificationRoute,
  postApplyRoute,
  postCategoriesRoute,
  postChangelogsRoute,
  postCustompagesRoute,
  postDocsRoute,
  postDocsSearchRoute,
  postVersionRoute,
  putApiSpecificationIdRoute,
  putCategoriesSlugRoute,
  putChangelogsSlugRoute,
  putCustompagesSlugRoute,
  putDocsSlugRoute,
  putVersionVersionIdRoute,
} from './routes'
import {
  deleteApiSpecificationIdRouteHandler,
  deleteCategoriesSlugRouteHandler,
  deleteChangelogsSlugRouteHandler,
  deleteCustompagesSlugRouteHandler,
  deleteDocsSlugRouteHandler,
  deleteVersionVersionIdRouteHandler,
  getApiRegistryUuidRouteHandler,
  getApiSpecificationRouteHandler,
  getApplyRouteHandler,
  getCategoriesRouteHandler,
  getCategoriesSlugDocsRouteHandler,
  getCategoriesSlugRouteHandler,
  getChangelogsRouteHandler,
  getChangelogsSlugRouteHandler,
  getCustompagesRouteHandler,
  getCustompagesSlugRouteHandler,
  getDocsSlugProductionRouteHandler,
  getDocsSlugRouteHandler,
  getRouteHandler,
  getSchemaRouteHandler,
  getVersionRouteHandler,
  getVersionVersionIdRouteHandler,
  postApiSpecificationRouteHandler,
  postApplyRouteHandler,
  postCategoriesRouteHandler,
  postChangelogsRouteHandler,
  postCustompagesRouteHandler,
  postDocsRouteHandler,
  postDocsSearchRouteHandler,
  postVersionRouteHandler,
  putApiSpecificationIdRouteHandler,
  putCategoriesSlugRouteHandler,
  putChangelogsSlugRouteHandler,
  putCustompagesSlugRouteHandler,
  putDocsSlugRouteHandler,
  putVersionVersionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiRegistryUuidRoute, getApiRegistryUuidRouteHandler)
  .openapi(getApiSpecificationRoute, getApiSpecificationRouteHandler)
  .openapi(postApiSpecificationRoute, postApiSpecificationRouteHandler)
  .openapi(putApiSpecificationIdRoute, putApiSpecificationIdRouteHandler)
  .openapi(deleteApiSpecificationIdRoute, deleteApiSpecificationIdRouteHandler)
  .openapi(getApplyRoute, getApplyRouteHandler)
  .openapi(postApplyRoute, postApplyRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(postCategoriesRoute, postCategoriesRouteHandler)
  .openapi(getCategoriesSlugRoute, getCategoriesSlugRouteHandler)
  .openapi(putCategoriesSlugRoute, putCategoriesSlugRouteHandler)
  .openapi(deleteCategoriesSlugRoute, deleteCategoriesSlugRouteHandler)
  .openapi(getCategoriesSlugDocsRoute, getCategoriesSlugDocsRouteHandler)
  .openapi(getChangelogsRoute, getChangelogsRouteHandler)
  .openapi(postChangelogsRoute, postChangelogsRouteHandler)
  .openapi(getChangelogsSlugRoute, getChangelogsSlugRouteHandler)
  .openapi(putChangelogsSlugRoute, putChangelogsSlugRouteHandler)
  .openapi(deleteChangelogsSlugRoute, deleteChangelogsSlugRouteHandler)
  .openapi(getCustompagesRoute, getCustompagesRouteHandler)
  .openapi(postCustompagesRoute, postCustompagesRouteHandler)
  .openapi(getCustompagesSlugRoute, getCustompagesSlugRouteHandler)
  .openapi(putCustompagesSlugRoute, putCustompagesSlugRouteHandler)
  .openapi(deleteCustompagesSlugRoute, deleteCustompagesSlugRouteHandler)
  .openapi(getDocsSlugRoute, getDocsSlugRouteHandler)
  .openapi(putDocsSlugRoute, putDocsSlugRouteHandler)
  .openapi(deleteDocsSlugRoute, deleteDocsSlugRouteHandler)
  .openapi(getDocsSlugProductionRoute, getDocsSlugProductionRouteHandler)
  .openapi(postDocsRoute, postDocsRouteHandler)
  .openapi(postDocsSearchRoute, postDocsSearchRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getSchemaRoute, getSchemaRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)
  .openapi(postVersionRoute, postVersionRouteHandler)
  .openapi(getVersionVersionIdRoute, getVersionVersionIdRouteHandler)
  .openapi(putVersionVersionIdRoute, putVersionVersionIdRouteHandler)
  .openapi(deleteVersionVersionIdRoute, deleteVersionVersionIdRouteHandler)

export default app
