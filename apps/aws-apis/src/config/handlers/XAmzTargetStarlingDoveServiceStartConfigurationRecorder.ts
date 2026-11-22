import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceStartConfigurationRecorderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceStartConfigurationRecorderHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceStartConfigurationRecorderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
