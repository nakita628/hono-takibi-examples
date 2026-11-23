import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHolderBalanceHandler,
  accountHolderTransactionListHandler,
  debitAccountHolderHandler,
  payoutAccountHolderHandler,
  refundFundsTransferHandler,
  refundNotPaidOutTransfersHandler,
  setupBeneficiaryHandler,
  transferFundsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHolderBalanceHandler)
  .route('/', accountHolderTransactionListHandler)
  .route('/', debitAccountHolderHandler)
  .route('/', payoutAccountHolderHandler)
  .route('/', refundFundsTransferHandler)
  .route('/', refundNotPaidOutTransfersHandler)
  .route('/', setupBeneficiaryHandler)
  .route('/', transferFundsHandler)

export default app
