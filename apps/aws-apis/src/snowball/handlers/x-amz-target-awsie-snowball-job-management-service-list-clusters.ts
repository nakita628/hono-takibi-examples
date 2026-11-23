import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceListClustersHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
