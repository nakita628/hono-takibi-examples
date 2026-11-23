import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetCloudFormationStackRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetCloudFormationStackRecordsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetCloudFormationStackRecordsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
