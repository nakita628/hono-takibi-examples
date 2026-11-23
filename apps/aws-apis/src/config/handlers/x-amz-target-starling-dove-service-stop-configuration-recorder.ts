import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceStopConfigurationRecorderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceStopConfigurationRecorderHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceStopConfigurationRecorderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
