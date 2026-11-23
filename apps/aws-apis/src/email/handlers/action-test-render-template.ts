import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTestRenderTemplateRoute, postActionTestRenderTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTestRenderTemplateHandler = app
  .openapi(getActionTestRenderTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTestRenderTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
