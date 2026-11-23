import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentEvaluationsRoute,
  getV1ParentExecutionsRoute,
  getV1ParentResultsRoute,
  getV1ParentRulesRoute,
  getV1ParentScannedResourcesRoute,
  postV1LocationInsightsWriteInsightRoute,
  postV1NameCancelRoute,
  postV1NameExecutionsRunRoute,
  postV1ParentEvaluationsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentEvaluationsRouteHandler,
  getV1ParentExecutionsRouteHandler,
  getV1ParentResultsRouteHandler,
  getV1ParentRulesRouteHandler,
  getV1ParentScannedResourcesRouteHandler,
  postV1LocationInsightsWriteInsightRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameExecutionsRunRouteHandler,
  postV1ParentEvaluationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1LocationInsightsWriteInsightRoute, postV1LocationInsightsWriteInsightRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1NameExecutionsRunRoute, postV1NameExecutionsRunRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1ParentEvaluationsRoute, getV1ParentEvaluationsRouteHandler)
  .openapi(postV1ParentEvaluationsRoute, postV1ParentEvaluationsRouteHandler)
  .openapi(getV1ParentExecutionsRoute, getV1ParentExecutionsRouteHandler)
  .openapi(getV1ParentResultsRoute, getV1ParentResultsRouteHandler)
  .openapi(getV1ParentRulesRoute, getV1ParentRulesRouteHandler)
  .openapi(getV1ParentScannedResourcesRoute, getV1ParentScannedResourcesRouteHandler)

export default app
