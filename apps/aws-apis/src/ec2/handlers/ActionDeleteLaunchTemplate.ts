import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteLaunchTemplateRoute, postActionDeleteLaunchTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLaunchTemplateHandler = app
  .openapi(getActionDeleteLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
