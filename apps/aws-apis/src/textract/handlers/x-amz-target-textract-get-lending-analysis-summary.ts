import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetLendingAnalysisSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractGetLendingAnalysisSummaryHandler = app.openapi(
  postXAmzTargetTextractGetLendingAnalysisSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
