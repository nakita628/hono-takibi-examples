import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteConfigurationRecorderHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
