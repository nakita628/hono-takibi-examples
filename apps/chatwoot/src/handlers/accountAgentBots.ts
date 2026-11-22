import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdAgentBotsIdRoute,
  getApiV1AccountsAccountIdAgentBotsIdRoute,
  getApiV1AccountsAccountIdAgentBotsRoute,
  patchApiV1AccountsAccountIdAgentBotsIdRoute,
  postApiV1AccountsAccountIdAgentBotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountAgentBotsHandler = app
  .openapi(getApiV1AccountsAccountIdAgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdAgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdAgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdAgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdAgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
