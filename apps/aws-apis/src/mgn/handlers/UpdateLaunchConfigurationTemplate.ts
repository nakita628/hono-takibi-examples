import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateLaunchConfigurationTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateLaunchConfigurationTemplateHandler = app.openapi(
  postUpdateLaunchConfigurationTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
