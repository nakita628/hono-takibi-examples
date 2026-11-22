import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoleManagementRoute, patchRoleManagementRoute } from '../routes'

const app = new OpenAPIHono()

export const roleManagementRoleManagementHandler = app
  .openapi(getRoleManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoleManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
