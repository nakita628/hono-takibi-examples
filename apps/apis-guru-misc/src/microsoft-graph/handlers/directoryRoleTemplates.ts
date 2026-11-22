import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryRoleTemplatesCountRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryRoleTemplatesHandler = app.openapi(
  getDirectoryRoleTemplatesCountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
