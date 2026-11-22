import { OpenAPIHono } from '@hono/zod-openapi'
import {
  OperationCancelJobActionCancelJobHandler,
  OperationCreateJobActionCreateJobHandler,
  OperationGetShippingLabelActionGetShippingLabelHandler,
  OperationGetStatusActionGetStatusHandler,
  OperationListJobsActionListJobsHandler,
  OperationUpdateJobActionUpdateJobHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', OperationCancelJobActionCancelJobHandler)
  .route('/', OperationCreateJobActionCreateJobHandler)
  .route('/', OperationGetShippingLabelActionGetShippingLabelHandler)
  .route('/', OperationGetStatusActionGetStatusHandler)
  .route('/', OperationListJobsActionListJobsHandler)
  .route('/', OperationUpdateJobActionUpdateJobHandler)

export default app
