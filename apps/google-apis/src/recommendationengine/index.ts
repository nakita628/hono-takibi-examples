import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentCatalogItemsRoute,
  getV1beta1ParentCatalogsRoute,
  getV1beta1ParentPredictionApiKeyRegistrationsRoute,
  getV1beta1ParentUserEventsCollectRoute,
  getV1beta1ParentUserEventsRoute,
  patchV1beta1NameRoute,
  postV1beta1NamePredictRoute,
  postV1beta1ParentCatalogItemsImportRoute,
  postV1beta1ParentCatalogItemsRoute,
  postV1beta1ParentPredictionApiKeyRegistrationsRoute,
  postV1beta1ParentUserEventsImportRoute,
  postV1beta1ParentUserEventsPurgeRoute,
  postV1beta1ParentUserEventsRejoinRoute,
  postV1beta1ParentUserEventsWriteRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentCatalogItemsRouteHandler,
  getV1beta1ParentCatalogsRouteHandler,
  getV1beta1ParentPredictionApiKeyRegistrationsRouteHandler,
  getV1beta1ParentUserEventsCollectRouteHandler,
  getV1beta1ParentUserEventsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NamePredictRouteHandler,
  postV1beta1ParentCatalogItemsImportRouteHandler,
  postV1beta1ParentCatalogItemsRouteHandler,
  postV1beta1ParentPredictionApiKeyRegistrationsRouteHandler,
  postV1beta1ParentUserEventsImportRouteHandler,
  postV1beta1ParentUserEventsPurgeRouteHandler,
  postV1beta1ParentUserEventsRejoinRouteHandler,
  postV1beta1ParentUserEventsWriteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NamePredictRoute, postV1beta1NamePredictRouteHandler)
  .openapi(getV1beta1ParentCatalogItemsRoute, getV1beta1ParentCatalogItemsRouteHandler)
  .openapi(postV1beta1ParentCatalogItemsRoute, postV1beta1ParentCatalogItemsRouteHandler)
  .openapi(
    postV1beta1ParentCatalogItemsImportRoute,
    postV1beta1ParentCatalogItemsImportRouteHandler,
  )
  .openapi(getV1beta1ParentCatalogsRoute, getV1beta1ParentCatalogsRouteHandler)
  .openapi(
    getV1beta1ParentPredictionApiKeyRegistrationsRoute,
    getV1beta1ParentPredictionApiKeyRegistrationsRouteHandler,
  )
  .openapi(
    postV1beta1ParentPredictionApiKeyRegistrationsRoute,
    postV1beta1ParentPredictionApiKeyRegistrationsRouteHandler,
  )
  .openapi(getV1beta1ParentUserEventsRoute, getV1beta1ParentUserEventsRouteHandler)
  .openapi(getV1beta1ParentUserEventsCollectRoute, getV1beta1ParentUserEventsCollectRouteHandler)
  .openapi(postV1beta1ParentUserEventsImportRoute, postV1beta1ParentUserEventsImportRouteHandler)
  .openapi(postV1beta1ParentUserEventsPurgeRoute, postV1beta1ParentUserEventsPurgeRouteHandler)
  .openapi(postV1beta1ParentUserEventsRejoinRoute, postV1beta1ParentUserEventsRejoinRouteHandler)
  .openapi(postV1beta1ParentUserEventsWriteRoute, postV1beta1ParentUserEventsWriteRouteHandler)

export default app
