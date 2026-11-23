import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSpecificationIdRoute,
  deleteChangelogsSlugRoute,
  deleteCustompagesSlugRoute,
  deleteDocsSlugRoute,
  deleteSwaggerIdRoute,
  deleteVersionVersionIdRoute,
  getApiSpecificationRoute,
  getCategoriesSlugDocsRoute,
  getCategoriesSlugRoute,
  getChangelogsRoute,
  getChangelogsSlugRoute,
  getCustompagesRoute,
  getCustompagesSlugRoute,
  getDocsSlugRoute,
  getErrorsRoute,
  getRoute,
  getVersionRoute,
  getVersionVersionIdRoute,
  postApiSpecificationRoute,
  postChangelogsRoute,
  postCustompagesRoute,
  postDocsRoute,
  postDocsSearchRoute,
  postSwaggerRoute,
  postVersionRoute,
  putApiSpecificationIdRoute,
  putChangelogsSlugRoute,
  putCustompagesSlugRoute,
  putDocsSlugRoute,
  putSwaggerIdRoute,
  putVersionVersionIdRoute,
} from './routes'
import {
  deleteApiSpecificationIdRouteHandler,
  deleteChangelogsSlugRouteHandler,
  deleteCustompagesSlugRouteHandler,
  deleteDocsSlugRouteHandler,
  deleteSwaggerIdRouteHandler,
  deleteVersionVersionIdRouteHandler,
  getApiSpecificationRouteHandler,
  getCategoriesSlugDocsRouteHandler,
  getCategoriesSlugRouteHandler,
  getChangelogsRouteHandler,
  getChangelogsSlugRouteHandler,
  getCustompagesRouteHandler,
  getCustompagesSlugRouteHandler,
  getDocsSlugRouteHandler,
  getErrorsRouteHandler,
  getRouteHandler,
  getVersionRouteHandler,
  getVersionVersionIdRouteHandler,
  postApiSpecificationRouteHandler,
  postChangelogsRouteHandler,
  postCustompagesRouteHandler,
  postDocsRouteHandler,
  postDocsSearchRouteHandler,
  postSwaggerRouteHandler,
  postVersionRouteHandler,
  putApiSpecificationIdRouteHandler,
  putChangelogsSlugRouteHandler,
  putCustompagesSlugRouteHandler,
  putDocsSlugRouteHandler,
  putSwaggerIdRouteHandler,
  putVersionVersionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getApiSpecificationRoute, getApiSpecificationRouteHandler)
  .openapi(postApiSpecificationRoute, postApiSpecificationRouteHandler)
  .openapi(deleteApiSpecificationIdRoute, deleteApiSpecificationIdRouteHandler)
  .openapi(putApiSpecificationIdRoute, putApiSpecificationIdRouteHandler)
  .openapi(getCategoriesSlugRoute, getCategoriesSlugRouteHandler)
  .openapi(getCategoriesSlugDocsRoute, getCategoriesSlugDocsRouteHandler)
  .openapi(getChangelogsRoute, getChangelogsRouteHandler)
  .openapi(postChangelogsRoute, postChangelogsRouteHandler)
  .openapi(deleteChangelogsSlugRoute, deleteChangelogsSlugRouteHandler)
  .openapi(getChangelogsSlugRoute, getChangelogsSlugRouteHandler)
  .openapi(putChangelogsSlugRoute, putChangelogsSlugRouteHandler)
  .openapi(getCustompagesRoute, getCustompagesRouteHandler)
  .openapi(postCustompagesRoute, postCustompagesRouteHandler)
  .openapi(deleteCustompagesSlugRoute, deleteCustompagesSlugRouteHandler)
  .openapi(getCustompagesSlugRoute, getCustompagesSlugRouteHandler)
  .openapi(putCustompagesSlugRoute, putCustompagesSlugRouteHandler)
  .openapi(postDocsRoute, postDocsRouteHandler)
  .openapi(postDocsSearchRoute, postDocsSearchRouteHandler)
  .openapi(deleteDocsSlugRoute, deleteDocsSlugRouteHandler)
  .openapi(getDocsSlugRoute, getDocsSlugRouteHandler)
  .openapi(putDocsSlugRoute, putDocsSlugRouteHandler)
  .openapi(getErrorsRoute, getErrorsRouteHandler)
  .openapi(postSwaggerRoute, postSwaggerRouteHandler)
  .openapi(deleteSwaggerIdRoute, deleteSwaggerIdRouteHandler)
  .openapi(putSwaggerIdRoute, putSwaggerIdRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)
  .openapi(postVersionRoute, postVersionRouteHandler)
  .openapi(deleteVersionVersionIdRoute, deleteVersionVersionIdRouteHandler)
  .openapi(getVersionVersionIdRoute, getVersionVersionIdRouteHandler)
  .openapi(putVersionVersionIdRoute, putVersionVersionIdRouteHandler)

export default app
