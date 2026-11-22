import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute,
  deleteV1AccountsAccountIdRecipientBanksBankIdRoute,
  deleteV1AccountsAccountIdTransfersTransferIdRoute,
  getV1AccountsAccountIdAchRelationshipsRoute,
  getV1AccountsAccountIdRecipientBanksRoute,
  getV1AccountsAccountIdTransfersRoute,
  getV1JitSettlementsRoute,
  getV1JitSettlementsSettlementIdRoute,
  getV1TransfersJitLedgerIdBalancesRoute,
  getV1TransfersJitLedgersRoute,
  getV1TransfersJitLimitsRoute,
  getV1TransfersJitReportsRoute,
  postV1AccountsAccountIdAchRelationshipsRoute,
  postV1AccountsAccountIdRecipientBanksRoute,
  postV1AccountsAccountIdTransfersRoute,
  postV1JitSettlementsRoute,
  postV1TestingIncomingWiresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fundingHandler = app
  .openapi(getV1AccountsAccountIdAchRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdAchRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdRecipientBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdRecipientBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdRecipientBanksBankIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JitSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JitSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JitSettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TestingIncomingWiresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitLedgerIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitLedgersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransfersJitReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
