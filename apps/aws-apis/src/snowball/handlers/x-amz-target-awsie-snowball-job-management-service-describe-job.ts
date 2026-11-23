import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceDescribeJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceDescribeJobHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceDescribeJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
