import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteConfigurationRecorderHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
