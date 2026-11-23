import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAuthinfoRoute, postAccountsBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsAuthinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
