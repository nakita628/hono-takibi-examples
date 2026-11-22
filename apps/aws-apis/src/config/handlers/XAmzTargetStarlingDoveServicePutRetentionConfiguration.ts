import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutRetentionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutRetentionConfigurationHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutRetentionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
