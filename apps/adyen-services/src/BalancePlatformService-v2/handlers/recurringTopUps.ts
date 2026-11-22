import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
  getBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
  patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
  postBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recurringTopUpsHandler = app
  .openapi(getBalanceAccountsBalanceAccountIdRecurringTopUpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalanceAccountsBalanceAccountIdRecurringTopUpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
