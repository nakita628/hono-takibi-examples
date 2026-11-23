import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127CreateDocumentClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127CreateDocumentClassifierHandler = app.openapi(
  postXAmzTargetComprehend20171127CreateDocumentClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
