import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
  getBalanceAccountsIdTransferLimitsCurrentRoute,
  getBalanceAccountsIdTransferLimitsRoute,
  getBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
  postBalanceAccountsIdTransferLimitsApproveRoute,
  postBalanceAccountsIdTransferLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferLimits__balanceAccountLevelHandler = app
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
