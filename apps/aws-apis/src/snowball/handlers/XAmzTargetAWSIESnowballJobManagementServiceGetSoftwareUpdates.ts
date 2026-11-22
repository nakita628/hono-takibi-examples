import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
