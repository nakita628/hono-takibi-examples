import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractAnalyzeIDRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractAnalyzeIdHandler = app.openapi(
  postXAmzTargetTextractAnalyzeIDRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
