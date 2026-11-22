import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdDirectDebitsRoute, getDirectDebitsRoute } from '../routes'

const app = new OpenAPIHono()

export const directDebitsHandler = app
  .openapi(getAccountsAccountIdDirectDebitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectDebitsRoute, (c) => {
    throw new Error('Not implemented')
  })
