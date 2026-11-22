import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3VariableRoute } from '../routes'

const app = new OpenAPIHono()

export const variablesHandler = app.openapi(getApiV3VariableRoute, (c) => {
  throw new Error('Not implemented')
})
