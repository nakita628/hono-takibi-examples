import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatementsRoute, getStatementsStatementIdRoute, postStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const statementsHandler = app
  .openapi(getStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatementsStatementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
