import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DeleteDocumentClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DeleteDocumentClassifierHandler = app.openapi(
  postXAmzTargetComprehend20171127DeleteDocumentClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
