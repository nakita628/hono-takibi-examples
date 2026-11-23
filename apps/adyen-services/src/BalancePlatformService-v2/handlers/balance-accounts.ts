import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
  deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  deleteBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
  getBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
  getBalanceAccountsBalanceAccountIdSweepsRoute,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRoute,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  getBalanceAccountsIdPaymentInstrumentsRoute,
  getBalanceAccountsIdRoute,
  getBalanceAccountsIdTransactionRulesRoute,
  getBalanceAccountsIdTransferLimitsCurrentRoute,
  getBalanceAccountsIdTransferLimitsRoute,
  getBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
  patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
  patchBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  patchBalanceAccountsIdRoute,
  postBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
  postBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
  postBalanceAccountsBalanceAccountIdSweepsRoute,
  postBalanceAccountsIdTransferLimitsApproveRoute,
  postBalanceAccountsIdTransferLimitsRoute,
  postBalanceAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balanceAccountsHandler = app
  .openapi(postBalanceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getBalanceAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBalanceAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdPaymentInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdTransferLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalanceAccountsIdTransferLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBalanceAccountsIdTransferLimitsApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdTransferLimitsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdTransferLimitsTransferLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBalanceAccountsIdTransferLimitsTransferLimitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
