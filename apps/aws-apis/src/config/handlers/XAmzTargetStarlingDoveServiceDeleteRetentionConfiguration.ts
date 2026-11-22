import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteRetentionConfigurationHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
