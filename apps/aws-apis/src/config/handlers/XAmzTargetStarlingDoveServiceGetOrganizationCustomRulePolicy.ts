import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
