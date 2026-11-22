import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployerIdModulesRoute } from '../routes'

const app = new OpenAPIHono()

export const modulesHandler = app.openapi(getProvidersEmployersEmployerIdModulesRoute, (c) => {
  throw new Error('Not implemented')
})
