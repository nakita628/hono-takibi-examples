import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteLaunchConfigurationTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteLaunchConfigurationTemplateHandler = app.openapi(
  postDeleteLaunchConfigurationTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
