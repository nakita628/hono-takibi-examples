import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateLaunchConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateLaunchConfigurationHandler = app.openapi(
  postUpdateLaunchConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
