import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceRegisterCrossAccountAccessRoleHandler = app.openapi(
  postXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
