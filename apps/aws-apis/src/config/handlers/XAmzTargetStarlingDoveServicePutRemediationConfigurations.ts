import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutRemediationConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutRemediationConfigurationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutRemediationConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
