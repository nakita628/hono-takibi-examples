import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetCustomRulePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetCustomRulePolicyHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetCustomRulePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
