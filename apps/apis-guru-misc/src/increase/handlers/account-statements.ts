import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountStatementsAccountStatementIdRoute, getAccountStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountStatementsHandler = app
  .openapi(getAccountStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountStatementsAccountStatementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
