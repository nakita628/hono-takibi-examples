import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeLaunchConfigurationTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeLaunchConfigurationTemplatesHandler = app.openapi(
  postDescribeLaunchConfigurationTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
