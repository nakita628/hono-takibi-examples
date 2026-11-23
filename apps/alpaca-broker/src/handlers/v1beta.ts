import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
  getV1betaAccountsAccountIdFundingWalletFundingDetailsRoute,
  getV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
  getV1betaAccountsAccountIdFundingWalletRoute,
  getV1betaAccountsAccountIdFundingWalletTransfersRoute,
  getV1betaAccountsAccountIdFundingWalletTransfersTransferIdRoute,
  postV1betaAccountsAccountIdFundingWalletRecipientBankRoute,
  postV1betaAccountsAccountIdFundingWalletRoute,
  postV1betaAccountsAccountIdFundingWalletWithdrawalRoute,
  postV1betaAccountsFundingWalletRoute,
  postV1betaDemoBankingFundingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app
  .openapi(getV1betaAccountsAccountIdFundingWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaAccountsAccountIdFundingWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaAccountsAccountIdFundingWalletFundingDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1betaAccountsAccountIdFundingWalletRecipientBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaAccountsAccountIdFundingWalletRecipientBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaAccountsAccountIdFundingWalletRecipientBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaAccountsAccountIdFundingWalletTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaAccountsAccountIdFundingWalletTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaAccountsAccountIdFundingWalletWithdrawalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaAccountsFundingWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaDemoBankingFundingRoute, (c) => {
    throw new Error('Not implemented')
  })
