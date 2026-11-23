import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnvironmentVariablesRoute } from '../routes'

const app = new OpenAPIHono()

export const environmentVariablesHandler = app.openapi(getEnvironmentVariablesRoute, (c) => {
  throw new Error('Not implemented')
})
