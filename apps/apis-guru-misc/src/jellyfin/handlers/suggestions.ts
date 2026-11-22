import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserIdSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestionsHandler = app.openapi(getUsersUserIdSuggestionsRoute, (c) => {
  throw new Error('Not implemented')
})
