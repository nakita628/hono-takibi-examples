import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ClassifyDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ClassifyDocumentHandler = app.openapi(
  postXAmzTargetComprehend20171127ClassifyDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
