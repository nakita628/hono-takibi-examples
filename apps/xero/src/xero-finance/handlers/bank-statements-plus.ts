import { OpenAPIHono } from '@hono/zod-openapi'
import { getBankStatementsPlusStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const bankStatementsPlusHandler = app.openapi(getBankStatementsPlusStatementsRoute, (c) => {
  throw new Error('Not implemented')
})
