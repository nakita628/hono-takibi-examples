import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3AccountsIcanTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app.openapi(getV3AccountsIcanTransactionsRoute, (c) => {
  throw new Error('Not implemented')
})
