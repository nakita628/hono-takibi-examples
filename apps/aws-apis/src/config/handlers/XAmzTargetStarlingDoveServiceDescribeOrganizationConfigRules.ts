import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
