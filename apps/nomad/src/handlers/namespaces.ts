import { OpenAPIHono } from '@hono/zod-openapi'
import { getNamespacesRoute } from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app.openapi(getNamespacesRoute, (c) => {
  throw new Error('Not implemented')
})
