import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetExpenseAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractGetExpenseAnalysisHandler = app.openapi(
  postXAmzTargetTextractGetExpenseAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
