import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceStartConfigurationRecorderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceStartConfigurationRecorderHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceStartConfigurationRecorderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
