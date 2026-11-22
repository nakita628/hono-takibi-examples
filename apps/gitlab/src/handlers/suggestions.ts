import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiV4SuggestionsBatchApplyRoute, putApiV4SuggestionsIdApplyRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestionsHandler = app
  .openapi(putApiV4SuggestionsIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4SuggestionsBatchApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
