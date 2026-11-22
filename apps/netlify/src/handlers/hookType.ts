import { OpenAPIHono } from '@hono/zod-openapi'
import { getHooksTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const hookTypeHandler = app.openapi(getHooksTypesRoute, (c) => {
  throw new Error('Not implemented')
})
