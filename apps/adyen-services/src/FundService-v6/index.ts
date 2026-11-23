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
} from './routes'
import {
  postAccountHolderBalanceRouteHandler,
  postAccountHolderTransactionListRouteHandler,
  postDebitAccountHolderRouteHandler,
  postPayoutAccountHolderRouteHandler,
  postRefundFundsTransferRouteHandler,
  postRefundNotPaidOutTransfersRouteHandler,
  postSetupBeneficiaryRouteHandler,
  postTransferFundsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountHolderBalanceRoute, postAccountHolderBalanceRouteHandler)
  .openapi(postAccountHolderTransactionListRoute, postAccountHolderTransactionListRouteHandler)
  .openapi(postDebitAccountHolderRoute, postDebitAccountHolderRouteHandler)
  .openapi(postPayoutAccountHolderRoute, postPayoutAccountHolderRouteHandler)
  .openapi(postRefundFundsTransferRoute, postRefundFundsTransferRouteHandler)
  .openapi(postRefundNotPaidOutTransfersRoute, postRefundNotPaidOutTransfersRouteHandler)
  .openapi(postSetupBeneficiaryRoute, postSetupBeneficiaryRouteHandler)
  .openapi(postTransferFundsRoute, postTransferFundsRouteHandler)

export default app
