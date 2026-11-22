import { OpenAPIHono } from '@hono/zod-openapi'
import { postApplicationTemplatesApplicationTemplateIdMicrosoftGraphInstantiateRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationTemplatesActionsHandler = app.openapi(
  postApplicationTemplatesApplicationTemplateIdMicrosoftGraphInstantiateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
