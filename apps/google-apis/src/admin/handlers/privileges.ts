import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesRoute } from '../routes'

const app = new OpenAPIHono()

export const privilegesHandler = app.openapi(
  getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesRoute,
  (c) => {},
)
