import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChildrenSha1CountCursorRoute,
  getInfoRoute,
  getLookupMd5Md5Route,
  getLookupSha1Sha1Route,
  getLookupSha256Sha256Route,
  getParentsSha1CountCursorRoute,
  getSessionCreateNameRoute,
  getSessionGetNameRoute,
  getStatsTopRoute,
  postBulkMd5Route,
  postBulkSha1Route,
} from './routes'
import {
  getChildrenSha1CountCursorRouteHandler,
  getInfoRouteHandler,
  getLookupMd5Md5RouteHandler,
  getLookupSha1Sha1RouteHandler,
  getLookupSha256Sha256RouteHandler,
  getParentsSha1CountCursorRouteHandler,
  getSessionCreateNameRouteHandler,
  getSessionGetNameRouteHandler,
  getStatsTopRouteHandler,
  postBulkMd5RouteHandler,
  postBulkSha1RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBulkMd5Route, postBulkMd5RouteHandler)
  .openapi(postBulkSha1Route, postBulkSha1RouteHandler)
  .openapi(getChildrenSha1CountCursorRoute, getChildrenSha1CountCursorRouteHandler)
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(getLookupMd5Md5Route, getLookupMd5Md5RouteHandler)
  .openapi(getLookupSha1Sha1Route, getLookupSha1Sha1RouteHandler)
  .openapi(getLookupSha256Sha256Route, getLookupSha256Sha256RouteHandler)
  .openapi(getParentsSha1CountCursorRoute, getParentsSha1CountCursorRouteHandler)
  .openapi(getSessionCreateNameRoute, getSessionCreateNameRouteHandler)
  .openapi(getSessionGetNameRoute, getSessionGetNameRouteHandler)
  .openapi(getStatsTopRoute, getStatsTopRouteHandler)

export default app
