import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutRemediationConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutRemediationConfigurationsHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutRemediationConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
