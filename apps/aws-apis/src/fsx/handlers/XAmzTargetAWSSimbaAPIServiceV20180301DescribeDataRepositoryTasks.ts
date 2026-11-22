import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DescribeDataRepositoryTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
