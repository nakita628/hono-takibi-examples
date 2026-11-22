import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractStartExpenseAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractStartExpenseAnalysisHandler = app.openapi(
  postXAmzTargetTextractStartExpenseAnalysisRoute,
  (c) => {},
)
