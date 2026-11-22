import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const contactSuggestionsHandler = app.openapi(getContactSuggestionsRoute, (c) => {
  throw new Error('Not implemented')
})
