import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetTextractAnalyzeDocumentHandler,
  XAmzTargetTextractAnalyzeExpenseHandler,
  XAmzTargetTextractAnalyzeIDHandler,
  XAmzTargetTextractDetectDocumentTextHandler,
  XAmzTargetTextractGetDocumentAnalysisHandler,
  XAmzTargetTextractGetDocumentTextDetectionHandler,
  XAmzTargetTextractGetExpenseAnalysisHandler,
  XAmzTargetTextractGetLendingAnalysisHandler,
  XAmzTargetTextractGetLendingAnalysisSummaryHandler,
  XAmzTargetTextractStartDocumentAnalysisHandler,
  XAmzTargetTextractStartDocumentTextDetectionHandler,
  XAmzTargetTextractStartExpenseAnalysisHandler,
  XAmzTargetTextractStartLendingAnalysisHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetTextractAnalyzeDocumentHandler)
  .route('/', XAmzTargetTextractAnalyzeExpenseHandler)
  .route('/', XAmzTargetTextractAnalyzeIDHandler)
  .route('/', XAmzTargetTextractDetectDocumentTextHandler)
  .route('/', XAmzTargetTextractGetDocumentAnalysisHandler)
  .route('/', XAmzTargetTextractGetDocumentTextDetectionHandler)
  .route('/', XAmzTargetTextractGetExpenseAnalysisHandler)
  .route('/', XAmzTargetTextractGetLendingAnalysisHandler)
  .route('/', XAmzTargetTextractGetLendingAnalysisSummaryHandler)
  .route('/', XAmzTargetTextractStartDocumentAnalysisHandler)
  .route('/', XAmzTargetTextractStartDocumentTextDetectionHandler)
  .route('/', XAmzTargetTextractStartExpenseAnalysisHandler)
  .route('/', XAmzTargetTextractStartLendingAnalysisHandler)

export default app
