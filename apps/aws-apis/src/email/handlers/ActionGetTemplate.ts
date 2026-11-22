import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetTemplateRoute, postActionGetTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetTemplateHandler = app
  .openapi(getActionGetTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
