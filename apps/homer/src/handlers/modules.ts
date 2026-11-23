import { OpenAPIHono } from '@hono/zod-openapi'
import { getModulesRoute } from '../routes'

const app = new OpenAPIHono()

export const modulesHandler = app.openapi(getModulesRoute, (c) => {
  throw new Error('Not implemented')
})
