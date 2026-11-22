import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetExpenseAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractGetExpenseAnalysisHandler = app.openapi(
  postXAmzTargetTextractGetExpenseAnalysisRoute,
  (c) => {},
)
