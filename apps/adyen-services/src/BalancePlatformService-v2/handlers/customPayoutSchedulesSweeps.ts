import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  getBalanceAccountsBalanceAccountIdSweepsRoute,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRoute,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  patchBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  postBalanceAccountsBalanceAccountIdSweepsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customPayoutSchedulesSweepsHandler = app
  .openapi(getBalanceAccountsBalanceAccountIdSweepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalanceAccountsBalanceAccountIdSweepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsBalanceAccountIdSweepsSweepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBalanceAccountsBalanceAccountIdSweepsSweepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
