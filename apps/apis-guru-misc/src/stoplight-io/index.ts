import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionsVersionIdExportFormatRoute,
  postVersionsPublishAnonRoute,
  postVersionsVersionIdPublishRoute,
  putVersionsVersionIdImportRoute,
  putVersionsVersionIdUnpublishRoute,
} from './routes'
import {
  getVersionsVersionIdExportFormatRouteHandler,
  postVersionsPublishAnonRouteHandler,
  postVersionsVersionIdPublishRouteHandler,
  putVersionsVersionIdImportRouteHandler,
  putVersionsVersionIdUnpublishRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postVersionsPublishAnonRoute, postVersionsPublishAnonRouteHandler)
  .openapi(getVersionsVersionIdExportFormatRoute, getVersionsVersionIdExportFormatRouteHandler)
  .openapi(putVersionsVersionIdImportRoute, putVersionsVersionIdImportRouteHandler)
  .openapi(postVersionsVersionIdPublishRoute, postVersionsVersionIdPublishRouteHandler)
  .openapi(putVersionsVersionIdUnpublishRoute, putVersionsVersionIdUnpublishRouteHandler)

export default app
