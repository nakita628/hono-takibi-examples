import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutConfigurationRecorderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutConfigurationRecorderHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutConfigurationRecorderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
