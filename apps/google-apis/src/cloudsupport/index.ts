import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2betaCaseClassificationsSearchRoute,
  getV2betaCasesSearchRoute,
  getV2betaNameDownloadRoute,
  getV2betaNameRoute,
  getV2betaParentAttachmentsRoute,
  getV2betaParentCasesRoute,
  getV2betaParentCommentsRoute,
  patchV2betaNameRoute,
  postV2betaNameCloseRoute,
  postV2betaNameEscalateRoute,
  postV2betaParentAttachmentsRoute,
  postV2betaParentCasesRoute,
  postV2betaParentCommentsRoute,
} from './routes'
import {
  getV2betaCaseClassificationsSearchRouteHandler,
  getV2betaCasesSearchRouteHandler,
  getV2betaNameDownloadRouteHandler,
  getV2betaNameRouteHandler,
  getV2betaParentAttachmentsRouteHandler,
  getV2betaParentCasesRouteHandler,
  getV2betaParentCommentsRouteHandler,
  patchV2betaNameRouteHandler,
  postV2betaNameCloseRouteHandler,
  postV2betaNameEscalateRouteHandler,
  postV2betaParentAttachmentsRouteHandler,
  postV2betaParentCasesRouteHandler,
  postV2betaParentCommentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2betaCaseClassificationsSearchRoute, getV2betaCaseClassificationsSearchRouteHandler)
  .openapi(getV2betaCasesSearchRoute, getV2betaCasesSearchRouteHandler)
  .openapi(getV2betaNameRoute, getV2betaNameRouteHandler)
  .openapi(patchV2betaNameRoute, patchV2betaNameRouteHandler)
  .openapi(postV2betaNameCloseRoute, postV2betaNameCloseRouteHandler)
  .openapi(getV2betaNameDownloadRoute, getV2betaNameDownloadRouteHandler)
  .openapi(postV2betaNameEscalateRoute, postV2betaNameEscalateRouteHandler)
  .openapi(getV2betaParentAttachmentsRoute, getV2betaParentAttachmentsRouteHandler)
  .openapi(postV2betaParentAttachmentsRoute, postV2betaParentAttachmentsRouteHandler)
  .openapi(getV2betaParentCasesRoute, getV2betaParentCasesRouteHandler)
  .openapi(postV2betaParentCasesRoute, postV2betaParentCasesRouteHandler)
  .openapi(getV2betaParentCommentsRoute, getV2betaParentCommentsRouteHandler)
  .openapi(postV2betaParentCommentsRoute, postV2betaParentCommentsRouteHandler)

export default app
