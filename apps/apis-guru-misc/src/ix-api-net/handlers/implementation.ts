import { OpenAPIHono } from '@hono/zod-openapi'
import { getImplementationRoute } from '../routes'

const app = new OpenAPIHono()

export const implementationHandler = app.openapi(getImplementationRoute, (c) => {
  throw new Error('Not implemented')
})
