import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DescribeFileCachesHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DescribeFileCachesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
