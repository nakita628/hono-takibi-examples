import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAcceptDisputeRoute,
  postDefendDisputeRoute,
  postDeleteDisputeDefenseDocumentRoute,
  postRetrieveApplicableDefenseReasonsRoute,
  postSupplyDefenseDocumentRoute,
} from './routes'
import {
  postAcceptDisputeRouteHandler,
  postDefendDisputeRouteHandler,
  postDeleteDisputeDefenseDocumentRouteHandler,
  postRetrieveApplicableDefenseReasonsRouteHandler,
  postSupplyDefenseDocumentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAcceptDisputeRoute, postAcceptDisputeRouteHandler)
  .openapi(postDefendDisputeRoute, postDefendDisputeRouteHandler)
  .openapi(postDeleteDisputeDefenseDocumentRoute, postDeleteDisputeDefenseDocumentRouteHandler)
  .openapi(
    postRetrieveApplicableDefenseReasonsRoute,
    postRetrieveApplicableDefenseReasonsRouteHandler,
  )
  .openapi(postSupplyDefenseDocumentRoute, postSupplyDefenseDocumentRouteHandler)

export default app
