import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteTemplateRoute, postActionDeleteTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTemplateHandler = app
  .openapi(getActionDeleteTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
