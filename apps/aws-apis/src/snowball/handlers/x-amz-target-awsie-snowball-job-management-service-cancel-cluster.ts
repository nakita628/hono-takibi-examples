import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCancelClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceCancelClusterHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceCancelClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
