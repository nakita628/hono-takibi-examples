import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateLaunchConfigurationTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateLaunchConfigurationTemplateHandler = app.openapi(
  postCreateLaunchConfigurationTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
