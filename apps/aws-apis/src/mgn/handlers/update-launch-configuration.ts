import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateLaunchConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateLaunchConfigurationHandler = app.openapi(
  postUpdateLaunchConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
