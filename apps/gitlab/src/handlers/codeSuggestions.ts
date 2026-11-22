import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV4CodeSuggestionsCompletionsRoute,
  postApiV4CodeSuggestionsConnectionDetailsRoute,
  postApiV4CodeSuggestionsDirectAccessRoute,
  postApiV4CodeSuggestionsEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codeSuggestionsHandler = app
  .openapi(postApiV4CodeSuggestionsCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4CodeSuggestionsDirectAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4CodeSuggestionsEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4CodeSuggestionsConnectionDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
