import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateCloudFormationStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateCloudFormationStackHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateCloudFormationStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
