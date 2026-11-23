import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301DescribeVolumesHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DescribeVolumesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
