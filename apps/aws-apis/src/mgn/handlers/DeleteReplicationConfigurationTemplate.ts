import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteReplicationConfigurationTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteReplicationConfigurationTemplateHandler = app.openapi(
  postDeleteReplicationConfigurationTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
