import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdRoute, getAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
