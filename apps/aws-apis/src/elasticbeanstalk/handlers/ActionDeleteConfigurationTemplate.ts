import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteConfigurationTemplateRoute,
  postActionDeleteConfigurationTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteConfigurationTemplateHandler = app
  .openapi(getActionDeleteConfigurationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteConfigurationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
