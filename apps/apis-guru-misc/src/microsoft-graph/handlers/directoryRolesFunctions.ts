import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryRolesMicrosoftGraphDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryRolesFunctionsHandler = app.openapi(
  getDirectoryRolesMicrosoftGraphDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
