import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetTextractAnalyzeDocumentRoute,
  postXAmzTargetTextractAnalyzeExpenseRoute,
  postXAmzTargetTextractAnalyzeIDRoute,
  postXAmzTargetTextractDetectDocumentTextRoute,
  postXAmzTargetTextractGetDocumentAnalysisRoute,
  postXAmzTargetTextractGetDocumentTextDetectionRoute,
  postXAmzTargetTextractGetExpenseAnalysisRoute,
  postXAmzTargetTextractGetLendingAnalysisRoute,
  postXAmzTargetTextractGetLendingAnalysisSummaryRoute,
  postXAmzTargetTextractStartDocumentAnalysisRoute,
  postXAmzTargetTextractStartDocumentTextDetectionRoute,
  postXAmzTargetTextractStartExpenseAnalysisRoute,
  postXAmzTargetTextractStartLendingAnalysisRoute,
} from './routes'
import {
  postXAmzTargetTextractAnalyzeDocumentRouteHandler,
  postXAmzTargetTextractAnalyzeExpenseRouteHandler,
  postXAmzTargetTextractAnalyzeIDRouteHandler,
  postXAmzTargetTextractDetectDocumentTextRouteHandler,
  postXAmzTargetTextractGetDocumentAnalysisRouteHandler,
  postXAmzTargetTextractGetDocumentTextDetectionRouteHandler,
  postXAmzTargetTextractGetExpenseAnalysisRouteHandler,
  postXAmzTargetTextractGetLendingAnalysisRouteHandler,
  postXAmzTargetTextractGetLendingAnalysisSummaryRouteHandler,
  postXAmzTargetTextractStartDocumentAnalysisRouteHandler,
  postXAmzTargetTextractStartDocumentTextDetectionRouteHandler,
  postXAmzTargetTextractStartExpenseAnalysisRouteHandler,
  postXAmzTargetTextractStartLendingAnalysisRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetTextractAnalyzeDocumentRoute,
    postXAmzTargetTextractAnalyzeDocumentRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractAnalyzeExpenseRoute,
    postXAmzTargetTextractAnalyzeExpenseRouteHandler,
  )
  .openapi(postXAmzTargetTextractAnalyzeIDRoute, postXAmzTargetTextractAnalyzeIDRouteHandler)
  .openapi(
    postXAmzTargetTextractDetectDocumentTextRoute,
    postXAmzTargetTextractDetectDocumentTextRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractGetDocumentAnalysisRoute,
    postXAmzTargetTextractGetDocumentAnalysisRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractGetDocumentTextDetectionRoute,
    postXAmzTargetTextractGetDocumentTextDetectionRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractGetExpenseAnalysisRoute,
    postXAmzTargetTextractGetExpenseAnalysisRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractGetLendingAnalysisRoute,
    postXAmzTargetTextractGetLendingAnalysisRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractGetLendingAnalysisSummaryRoute,
    postXAmzTargetTextractGetLendingAnalysisSummaryRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractStartDocumentAnalysisRoute,
    postXAmzTargetTextractStartDocumentAnalysisRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractStartDocumentTextDetectionRoute,
    postXAmzTargetTextractStartDocumentTextDetectionRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractStartExpenseAnalysisRoute,
    postXAmzTargetTextractStartExpenseAnalysisRouteHandler,
  )
  .openapi(
    postXAmzTargetTextractStartLendingAnalysisRoute,
    postXAmzTargetTextractStartLendingAnalysisRouteHandler,
  )

export default app
