import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractGetLendingAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractGetLendingAnalysisHandler = app.openapi(
  postXAmzTargetTextractGetLendingAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
