import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DescribeDatasetHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
