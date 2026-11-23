import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adjustAuthorisationHandler,
  authorise3dHandler,
  authorise3ds2Handler,
  authoriseHandler,
  cancelHandler,
  cancelOrRefundHandler,
  captureHandler,
  donateHandler,
  getAuthenticationResultHandler,
  refundHandler,
  retrieve3ds2ResultHandler,
  technicalCancelHandler,
  voidPendingRefundHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adjustAuthorisationHandler)
  .route('/', authoriseHandler)
  .route('/', authorise3dHandler)
  .route('/', authorise3ds2Handler)
  .route('/', cancelHandler)
  .route('/', cancelOrRefundHandler)
  .route('/', captureHandler)
  .route('/', donateHandler)
  .route('/', getAuthenticationResultHandler)
  .route('/', refundHandler)
  .route('/', retrieve3ds2ResultHandler)
  .route('/', technicalCancelHandler)
  .route('/', voidPendingRefundHandler)

export default app
