import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeDocumentClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeDocumentClassifierHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeDocumentClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
