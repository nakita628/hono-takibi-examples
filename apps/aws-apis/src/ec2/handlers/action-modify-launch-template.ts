import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyLaunchTemplateRoute, postActionModifyLaunchTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyLaunchTemplateHandler = app
  .openapi(getActionModifyLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
