import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDefineSuggesterRoute, postActionDefineSuggesterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDefineSuggesterHandler = app
  .openapi(getActionDefineSuggesterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDefineSuggesterRoute, (c) => {
    throw new Error('Not implemented')
  })
