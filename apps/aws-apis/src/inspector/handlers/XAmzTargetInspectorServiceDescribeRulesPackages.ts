import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeRulesPackagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDescribeRulesPackagesHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeRulesPackagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
