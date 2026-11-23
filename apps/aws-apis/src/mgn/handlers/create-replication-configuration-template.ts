import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateReplicationConfigurationTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const createReplicationConfigurationTemplateHandler = app.openapi(
  postCreateReplicationConfigurationTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
