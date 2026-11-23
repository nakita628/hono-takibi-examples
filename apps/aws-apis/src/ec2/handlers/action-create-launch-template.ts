import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateLaunchTemplateRoute, postActionCreateLaunchTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateLaunchTemplateHandler = app
  .openapi(getActionCreateLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
