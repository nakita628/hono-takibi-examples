import { OpenAPIHono } from '@hono/zod-openapi'
import { getVarsRoute } from '../routes'

const app = new OpenAPIHono()

export const varsHandler = app.openapi(getVarsRoute, (c) => {
  throw new Error('Not implemented')
})
