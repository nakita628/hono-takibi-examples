import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceGetJobManifestHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
