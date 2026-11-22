import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteRemediationConfigurationHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
