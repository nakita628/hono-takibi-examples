import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserExtensionsRoute } from '../routes'

const app = new OpenAPIHono()

export const userExtensionsHandler = app.openapi(getUserExtensionsRoute, (c) => {
  throw new Error('Not implemented')
})
