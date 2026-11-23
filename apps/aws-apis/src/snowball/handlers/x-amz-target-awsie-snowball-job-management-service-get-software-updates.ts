import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceGetSoftwareUpdatesHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
