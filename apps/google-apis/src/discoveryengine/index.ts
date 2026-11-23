import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentDocumentsRoute,
  getV1betaParentUserEventsCollectRoute,
  patchV1betaNameRoute,
  postV1betaParentDocumentsImportRoute,
  postV1betaParentDocumentsRoute,
  postV1betaParentUserEventsImportRoute,
  postV1betaParentUserEventsWriteRoute,
  postV1betaServingConfigRecommendRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameOperationsRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentDocumentsRouteHandler,
  getV1betaParentUserEventsCollectRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaParentDocumentsImportRouteHandler,
  postV1betaParentDocumentsRouteHandler,
  postV1betaParentUserEventsImportRouteHandler,
  postV1betaParentUserEventsWriteRouteHandler,
  postV1betaServingConfigRecommendRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(getV1betaNameOperationsRoute, getV1betaNameOperationsRouteHandler)
  .openapi(getV1betaParentDocumentsRoute, getV1betaParentDocumentsRouteHandler)
  .openapi(postV1betaParentDocumentsRoute, postV1betaParentDocumentsRouteHandler)
  .openapi(postV1betaParentDocumentsImportRoute, postV1betaParentDocumentsImportRouteHandler)
  .openapi(getV1betaParentUserEventsCollectRoute, getV1betaParentUserEventsCollectRouteHandler)
  .openapi(postV1betaParentUserEventsImportRoute, postV1betaParentUserEventsImportRouteHandler)
  .openapi(postV1betaParentUserEventsWriteRoute, postV1betaParentUserEventsWriteRouteHandler)
  .openapi(postV1betaServingConfigRecommendRoute, postV1betaServingConfigRecommendRouteHandler)

export default app
