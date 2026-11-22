import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeConfigRulesHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConfigRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
