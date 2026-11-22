import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectProjectKmsCaRoute } from '../routes'

const app = new OpenAPIHono()

export const projectKeyManagementHandler = app.openapi(getProjectProjectKmsCaRoute, (c) => {
  throw new Error('Not implemented')
})
