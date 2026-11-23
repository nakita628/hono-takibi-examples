import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReadOperationsOperationIdRoute,
  getTextOperationsOperationIdRoute,
  postReadCoreAsyncBatchAnalyzeRoute,
  postRecognizeTextRoute,
} from './routes'
import {
  getReadOperationsOperationIdRouteHandler,
  getTextOperationsOperationIdRouteHandler,
  postReadCoreAsyncBatchAnalyzeRouteHandler,
  postRecognizeTextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postReadCoreAsyncBatchAnalyzeRoute, postReadCoreAsyncBatchAnalyzeRouteHandler)
  .openapi(getReadOperationsOperationIdRoute, getReadOperationsOperationIdRouteHandler)
  .openapi(postRecognizeTextRoute, postRecognizeTextRouteHandler)
  .openapi(getTextOperationsOperationIdRoute, getTextOperationsOperationIdRouteHandler)

export default app
