import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateTemplateRoute, postActionUpdateTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateTemplateHandler = app
  .openapi(getActionUpdateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
