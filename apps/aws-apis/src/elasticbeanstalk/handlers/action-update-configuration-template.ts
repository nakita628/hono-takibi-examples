import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateConfigurationTemplateRoute,
  postActionUpdateConfigurationTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateConfigurationTemplateHandler = app
  .openapi(getActionUpdateConfigurationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateConfigurationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
