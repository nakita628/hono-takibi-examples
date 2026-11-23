import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserSystemOverridesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const userSystemOverridesHandler = app.openapi(getUserSystemOverridesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
