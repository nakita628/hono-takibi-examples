import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsUsers202609RolesRoute } from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app.openapi(getSettingsUsers202609RolesRoute, (c) => {
  throw new Error('Not implemented')
})
