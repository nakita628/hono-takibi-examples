import { OpenAPIHono } from '@hono/zod-openapi'
import {
  operationCancelJobActionCancelJobHandler,
  operationCreateJobActionCreateJobHandler,
  operationGetShippingLabelActionGetShippingLabelHandler,
  operationGetStatusActionGetStatusHandler,
  operationListJobsActionListJobsHandler,
  operationUpdateJobActionUpdateJobHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', operationCancelJobActionCancelJobHandler)
  .route('/', operationCreateJobActionCreateJobHandler)
  .route('/', operationGetShippingLabelActionGetShippingLabelHandler)
  .route('/', operationGetStatusActionGetStatusHandler)
  .route('/', operationListJobsActionListJobsHandler)
  .route('/', operationUpdateJobActionUpdateJobHandler)

export default app
