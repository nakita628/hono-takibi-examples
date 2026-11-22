import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDescribeCrossAccountAccessRoleHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
