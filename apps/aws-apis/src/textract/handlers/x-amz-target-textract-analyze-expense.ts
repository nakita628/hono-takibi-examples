import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractAnalyzeExpenseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractAnalyzeExpenseHandler = app.openapi(
  postXAmzTargetTextractAnalyzeExpenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
