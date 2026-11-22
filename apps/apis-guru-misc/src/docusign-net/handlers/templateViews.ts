import { OpenAPIHono } from '@hono/zod-openapi'
import { postV21AccountsAccountIdTemplatesTemplateIdViewsEditRoute } from '../routes'

const app = new OpenAPIHono()

export const templateViewsHandler = app.openapi(
  postV21AccountsAccountIdTemplatesTemplateIdViewsEditRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
