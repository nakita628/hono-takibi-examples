import { OpenAPIHono } from '@hono/zod-openapi'
import { getPermissionGroupMaxResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionGroupMaxResultsHandler = app.openapi(
  getPermissionGroupMaxResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
