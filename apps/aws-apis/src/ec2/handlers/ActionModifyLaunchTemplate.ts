import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyLaunchTemplateRoute, postActionModifyLaunchTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyLaunchTemplateHandler = app
  .openapi(getActionModifyLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
