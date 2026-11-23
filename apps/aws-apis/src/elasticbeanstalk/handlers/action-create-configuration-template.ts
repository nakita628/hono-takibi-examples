import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateConfigurationTemplateRoute,
  postActionCreateConfigurationTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateConfigurationTemplateHandler = app
  .openapi(getActionCreateConfigurationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateConfigurationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
