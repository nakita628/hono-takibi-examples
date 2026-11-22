import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app.openapi(getClassificationsRolesRoute, (c) => {
  throw new Error('Not implemented')
})
