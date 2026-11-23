import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
