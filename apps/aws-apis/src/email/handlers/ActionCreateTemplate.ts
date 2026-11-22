import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateTemplateRoute, postActionCreateTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTemplateHandler = app
  .openapi(getActionCreateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
