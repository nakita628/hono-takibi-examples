import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBudgetsBudgetIdAccountsAccountIdRoute,
  getBudgetsBudgetIdAccountsRoute,
  postBudgetsBudgetIdAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getBudgetsBudgetIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBudgetsBudgetIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
