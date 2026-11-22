import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListDocumentClassifierSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListDocumentClassifierSummariesHandler = app.openapi(
  postXAmzTargetComprehend20171127ListDocumentClassifierSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
