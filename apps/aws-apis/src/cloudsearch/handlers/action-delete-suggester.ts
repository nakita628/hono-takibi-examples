import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteSuggesterRoute, postActionDeleteSuggesterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteSuggesterHandler = app
  .openapi(getActionDeleteSuggesterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSuggesterRoute, (c) => {
    throw new Error('Not implemented')
  })
