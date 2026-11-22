import { OpenAPIHono } from '@hono/zod-openapi'
import { postApplicationTemplatesApplicationTemplateIdInstantiateRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationTemplatesApplicationTemplateActionsHandler = app.openapi(
  postApplicationTemplatesApplicationTemplateIdInstantiateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
