import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteBankAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteBankAccountsHandler = app.openapi(postDeleteBankAccountsRoute, (c) => {
  throw new Error('Not implemented')
})
