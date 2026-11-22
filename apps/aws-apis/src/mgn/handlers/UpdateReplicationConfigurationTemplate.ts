import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateReplicationConfigurationTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateReplicationConfigurationTemplateHandler = app.openapi(
  postUpdateReplicationConfigurationTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
