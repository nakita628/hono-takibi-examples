import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteLaunchTemplateRoute, postActionDeleteLaunchTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteLaunchTemplateHandler = app
  .openapi(getActionDeleteLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLaunchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
