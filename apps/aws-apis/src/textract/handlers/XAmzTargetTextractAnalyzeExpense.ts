import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractAnalyzeExpenseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractAnalyzeExpenseHandler = app.openapi(
  postXAmzTargetTextractAnalyzeExpenseRoute,
  (c) => {},
)
