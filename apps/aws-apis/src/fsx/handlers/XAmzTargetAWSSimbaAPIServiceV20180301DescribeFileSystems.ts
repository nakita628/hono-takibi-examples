import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileSystemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
