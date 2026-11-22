import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetCustomRulePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetCustomRulePolicyHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetCustomRulePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
