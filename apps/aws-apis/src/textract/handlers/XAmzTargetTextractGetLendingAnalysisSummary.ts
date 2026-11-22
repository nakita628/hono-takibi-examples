import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetLendingAnalysisSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractGetLendingAnalysisSummaryHandler = app.openapi(
  postXAmzTargetTextractGetLendingAnalysisSummaryRoute,
  (c) => {},
)
