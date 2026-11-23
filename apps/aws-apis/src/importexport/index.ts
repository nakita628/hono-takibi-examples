import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationCancelJobActionCancelJobRoute,
  getOperationCreateJobActionCreateJobRoute,
  getOperationGetShippingLabelActionGetShippingLabelRoute,
  getOperationGetStatusActionGetStatusRoute,
  getOperationListJobsActionListJobsRoute,
  getOperationUpdateJobActionUpdateJobRoute,
  postOperationCancelJobActionCancelJobRoute,
  postOperationCreateJobActionCreateJobRoute,
  postOperationGetShippingLabelActionGetShippingLabelRoute,
  postOperationGetStatusActionGetStatusRoute,
  postOperationListJobsActionListJobsRoute,
  postOperationUpdateJobActionUpdateJobRoute,
} from './routes'
import {
  getOperationCancelJobActionCancelJobRouteHandler,
  getOperationCreateJobActionCreateJobRouteHandler,
  getOperationGetShippingLabelActionGetShippingLabelRouteHandler,
  getOperationGetStatusActionGetStatusRouteHandler,
  getOperationListJobsActionListJobsRouteHandler,
  getOperationUpdateJobActionUpdateJobRouteHandler,
  postOperationCancelJobActionCancelJobRouteHandler,
  postOperationCreateJobActionCreateJobRouteHandler,
  postOperationGetShippingLabelActionGetShippingLabelRouteHandler,
  postOperationGetStatusActionGetStatusRouteHandler,
  postOperationListJobsActionListJobsRouteHandler,
  postOperationUpdateJobActionUpdateJobRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOperationCancelJobActionCancelJobRoute,
    getOperationCancelJobActionCancelJobRouteHandler,
  )
  .openapi(
    postOperationCancelJobActionCancelJobRoute,
    postOperationCancelJobActionCancelJobRouteHandler,
  )
  .openapi(
    getOperationCreateJobActionCreateJobRoute,
    getOperationCreateJobActionCreateJobRouteHandler,
  )
  .openapi(
    postOperationCreateJobActionCreateJobRoute,
    postOperationCreateJobActionCreateJobRouteHandler,
  )
  .openapi(
    getOperationGetShippingLabelActionGetShippingLabelRoute,
    getOperationGetShippingLabelActionGetShippingLabelRouteHandler,
  )
  .openapi(
    postOperationGetShippingLabelActionGetShippingLabelRoute,
    postOperationGetShippingLabelActionGetShippingLabelRouteHandler,
  )
  .openapi(
    getOperationGetStatusActionGetStatusRoute,
    getOperationGetStatusActionGetStatusRouteHandler,
  )
  .openapi(
    postOperationGetStatusActionGetStatusRoute,
    postOperationGetStatusActionGetStatusRouteHandler,
  )
  .openapi(getOperationListJobsActionListJobsRoute, getOperationListJobsActionListJobsRouteHandler)
  .openapi(
    postOperationListJobsActionListJobsRoute,
    postOperationListJobsActionListJobsRouteHandler,
  )
  .openapi(
    getOperationUpdateJobActionUpdateJobRoute,
    getOperationUpdateJobActionUpdateJobRouteHandler,
  )
  .openapi(
    postOperationUpdateJobActionUpdateJobRoute,
    postOperationUpdateJobActionUpdateJobRouteHandler,
  )

export default app
