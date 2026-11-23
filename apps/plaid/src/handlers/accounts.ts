import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsBalanceGetRoute, postAccountsGetRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postAccountsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
