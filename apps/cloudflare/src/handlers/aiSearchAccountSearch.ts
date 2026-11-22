import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountsAccountIdAiSearchNamespacesNameChatCompletionsRoute,
  postAccountsAccountIdAiSearchNamespacesNameSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiSearchAccountSearchHandler = app
  .openapi(postAccountsAccountIdAiSearchNamespacesNameChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiSearchNamespacesNameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
