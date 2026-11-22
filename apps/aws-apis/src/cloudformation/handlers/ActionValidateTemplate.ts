import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionValidateTemplateRoute, postActionValidateTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionValidateTemplateHandler = app
  .openapi(getActionValidateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionValidateTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
