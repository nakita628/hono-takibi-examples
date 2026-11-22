import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserManagementUsersUserIdFeatureFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const userManagementUsersFeatureFlagsHandler = app.openapi(
  getUserManagementUsersUserIdFeatureFlagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
