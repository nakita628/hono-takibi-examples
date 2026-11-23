import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeRulesPackagesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceDescribeRulesPackagesHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeRulesPackagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
