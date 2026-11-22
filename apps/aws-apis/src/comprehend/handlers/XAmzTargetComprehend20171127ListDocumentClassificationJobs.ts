import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListDocumentClassificationJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListDocumentClassificationJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListDocumentClassificationJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
