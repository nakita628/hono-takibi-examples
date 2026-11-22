import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountHolderBalanceRoute,
  postAccountHolderTransactionListRoute,
  postDebitAccountHolderRoute,
  postPayoutAccountHolderRoute,
  postRefundFundsTransferRoute,
  postRefundNotPaidOutTransfersRoute,
  postSetupBeneficiaryRoute,
  postTransferFundsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(postAccountHolderBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountHolderTransactionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebitAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRefundFundsTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRefundNotPaidOutTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupBeneficiaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
