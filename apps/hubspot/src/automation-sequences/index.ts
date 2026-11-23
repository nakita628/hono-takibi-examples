import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
  getAutomationSequences202609EnrollmentsContactContactIdRoute,
  getAutomationSequences202609Route,
  getAutomationSequences202609SequenceIdRoute,
  getAutomationSequences202609ServiceaccountsSequencesRoute,
  getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceRoute,
  getAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
  postAutomationSequences202609EnrollmentsRoute,
  postAutomationSequences202609ServiceaccountsEnrollmentsRoute,
  postAutomationSequences202609ServiceaccountsSequencesRoute,
  putAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
} from './routes'
import {
  deleteAutomationSequences202609ServiceaccountsSequencesSequenceIdRouteHandler,
  getAutomationSequences202609EnrollmentsContactContactIdRouteHandler,
  getAutomationSequences202609RouteHandler,
  getAutomationSequences202609SequenceIdRouteHandler,
  getAutomationSequences202609ServiceaccountsSequencesRouteHandler,
  getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceRouteHandler,
  getAutomationSequences202609ServiceaccountsSequencesSequenceIdRouteHandler,
  postAutomationSequences202609EnrollmentsRouteHandler,
  postAutomationSequences202609ServiceaccountsEnrollmentsRouteHandler,
  postAutomationSequences202609ServiceaccountsSequencesRouteHandler,
  putAutomationSequences202609ServiceaccountsSequencesSequenceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAutomationSequences202609Route, getAutomationSequences202609RouteHandler)
  .openapi(
    postAutomationSequences202609EnrollmentsRoute,
    postAutomationSequences202609EnrollmentsRouteHandler,
  )
  .openapi(
    getAutomationSequences202609EnrollmentsContactContactIdRoute,
    getAutomationSequences202609EnrollmentsContactContactIdRouteHandler,
  )
  .openapi(
    postAutomationSequences202609ServiceaccountsEnrollmentsRoute,
    postAutomationSequences202609ServiceaccountsEnrollmentsRouteHandler,
  )
  .openapi(
    getAutomationSequences202609ServiceaccountsSequencesRoute,
    getAutomationSequences202609ServiceaccountsSequencesRouteHandler,
  )
  .openapi(
    postAutomationSequences202609ServiceaccountsSequencesRoute,
    postAutomationSequences202609ServiceaccountsSequencesRouteHandler,
  )
  .openapi(
    getAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
    getAutomationSequences202609ServiceaccountsSequencesSequenceIdRouteHandler,
  )
  .openapi(
    putAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
    putAutomationSequences202609ServiceaccountsSequencesSequenceIdRouteHandler,
  )
  .openapi(
    deleteAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute,
    deleteAutomationSequences202609ServiceaccountsSequencesSequenceIdRouteHandler,
  )
  .openapi(
    getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceRoute,
    getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceRouteHandler,
  )
  .openapi(
    getAutomationSequences202609SequenceIdRoute,
    getAutomationSequences202609SequenceIdRouteHandler,
  )

export default app
