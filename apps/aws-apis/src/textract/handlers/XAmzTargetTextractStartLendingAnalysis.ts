import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractStartLendingAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTextractStartLendingAnalysisHandler = app.openapi(
  postXAmzTargetTextractStartLendingAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
