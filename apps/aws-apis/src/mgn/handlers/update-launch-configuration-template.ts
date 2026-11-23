import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateLaunchConfigurationTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateLaunchConfigurationTemplateHandler = app.openapi(
  postUpdateLaunchConfigurationTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
