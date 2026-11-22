import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdAgentsIdRoute,
  getApiV1AccountsAccountIdAgentsRoute,
  patchApiV1AccountsAccountIdAgentsIdRoute,
  postApiV1AccountsAccountIdAgentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(getApiV1AccountsAccountIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
