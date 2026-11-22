import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmExtensionsCardsDev202609AppIdViewsMigrateRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(
  postCrmExtensionsCardsDev202609AppIdViewsMigrateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
