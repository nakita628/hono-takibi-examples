import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartEdgeConfigurationUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const startEdgeConfigurationUpdateHandler = app.openapi(
  postStartEdgeConfigurationUpdateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
