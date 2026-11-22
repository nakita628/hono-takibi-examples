import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutOrganizationConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutOrganizationConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutOrganizationConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
