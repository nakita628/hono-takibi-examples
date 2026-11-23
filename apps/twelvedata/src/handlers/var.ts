import { OpenAPIHono } from '@hono/zod-openapi'
import { getVarRoute } from '../routes'

const app = new OpenAPIHono()

export const varHandler = app.openapi(getVarRoute, (c) => {
  throw new Error('Not implemented')
})
