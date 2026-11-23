import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateImageGenerationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateImageGenerationConfigurationHandler = app.openapi(
  postUpdateImageGenerationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
