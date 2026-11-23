import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTextractAnalyzeDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTextractAnalyzeDocumentHandler = app.openapi(
  postXAmzTargetTextractAnalyzeDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
