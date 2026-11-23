import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceListServiceVersionsHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
