import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListDocumentClassifiersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListDocumentClassifiersHandler = app.openapi(
  postXAmzTargetComprehend20171127ListDocumentClassifiersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
