import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryRolesDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryRolesDirectoryRoleFunctionsHandler = app.openapi(
  getDirectoryRolesDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
