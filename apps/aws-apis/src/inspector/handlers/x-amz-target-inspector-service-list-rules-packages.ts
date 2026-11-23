import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListRulesPackagesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceListRulesPackagesHandler = app.openapi(
  postXAmzTargetInspectorServiceListRulesPackagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
