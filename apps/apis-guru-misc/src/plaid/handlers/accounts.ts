import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsBalanceGetRoute, postAccountsGetRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postAccountsBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
