import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeImageGenerationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeImageGenerationConfigurationHandler = app.openapi(
  postDescribeImageGenerationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
