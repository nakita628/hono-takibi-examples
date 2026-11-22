import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRoute,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesRoute,
  patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  postBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedPayoutSchedulesHandler = app
  .openapi(getBalanceAccountsBalanceAccountIdPayoutSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalanceAccountsBalanceAccountIdPayoutSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsBalancePlatformIdPayoutSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
