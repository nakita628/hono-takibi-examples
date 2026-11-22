import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceGetJobManifestHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceGetJobManifestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
