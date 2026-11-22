import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeDocumentClassificationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DescribeDocumentClassificationJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeDocumentClassificationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
