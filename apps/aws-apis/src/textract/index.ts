import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetTextractAnalyzeDocumentHandler,
  xAmzTargetTextractAnalyzeExpenseHandler,
  xAmzTargetTextractAnalyzeIdHandler,
  xAmzTargetTextractDetectDocumentTextHandler,
  xAmzTargetTextractGetDocumentAnalysisHandler,
  xAmzTargetTextractGetDocumentTextDetectionHandler,
  xAmzTargetTextractGetExpenseAnalysisHandler,
  xAmzTargetTextractGetLendingAnalysisHandler,
  xAmzTargetTextractGetLendingAnalysisSummaryHandler,
  xAmzTargetTextractStartDocumentAnalysisHandler,
  xAmzTargetTextractStartDocumentTextDetectionHandler,
  xAmzTargetTextractStartExpenseAnalysisHandler,
  xAmzTargetTextractStartLendingAnalysisHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetTextractAnalyzeDocumentHandler)
  .route('/', xAmzTargetTextractAnalyzeExpenseHandler)
  .route('/', xAmzTargetTextractAnalyzeIdHandler)
  .route('/', xAmzTargetTextractDetectDocumentTextHandler)
  .route('/', xAmzTargetTextractGetDocumentAnalysisHandler)
  .route('/', xAmzTargetTextractGetDocumentTextDetectionHandler)
  .route('/', xAmzTargetTextractGetExpenseAnalysisHandler)
  .route('/', xAmzTargetTextractGetLendingAnalysisHandler)
  .route('/', xAmzTargetTextractGetLendingAnalysisSummaryHandler)
  .route('/', xAmzTargetTextractStartDocumentAnalysisHandler)
  .route('/', xAmzTargetTextractStartDocumentTextDetectionHandler)
  .route('/', xAmzTargetTextractStartExpenseAnalysisHandler)
  .route('/', xAmzTargetTextractStartLendingAnalysisHandler)

export default app
