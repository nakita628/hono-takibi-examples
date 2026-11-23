import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceDescribeClusterHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceDescribeClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
