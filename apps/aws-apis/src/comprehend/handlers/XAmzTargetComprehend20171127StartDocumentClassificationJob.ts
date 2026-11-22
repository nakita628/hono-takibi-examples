import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartDocumentClassificationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127StartDocumentClassificationJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartDocumentClassificationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
