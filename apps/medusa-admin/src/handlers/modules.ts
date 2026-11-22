import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminModulesRoute } from '../routes'

const app = new OpenAPIHono()

export const modulesHandler = app.openapi(getAdminModulesRoute, (c) => {
  throw new Error('Not implemented')
})
