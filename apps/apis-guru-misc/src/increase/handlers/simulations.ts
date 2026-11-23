import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSimulationsAccountStatementsRoute,
  postSimulationsAccountTransfersAccountTransferIdCompleteRoute,
  postSimulationsAchTransfersAchTransferIdReturnRoute,
  postSimulationsAchTransfersAchTransferIdSubmitRoute,
  postSimulationsCardAuthorizationsRoute,
  postSimulationsCardDisputesCardDisputeIdActionRoute,
  postSimulationsCardRefundsRoute,
  postSimulationsCardSettlementsRoute,
  postSimulationsCheckDepositsCheckDepositIdRejectRoute,
  postSimulationsCheckDepositsCheckDepositIdReturnRoute,
  postSimulationsCheckDepositsCheckDepositIdSubmitRoute,
  postSimulationsCheckTransfersCheckTransferIdDepositRoute,
  postSimulationsCheckTransfersCheckTransferIdMailRoute,
  postSimulationsDigitalWalletTokenRequestsRoute,
  postSimulationsDocumentsRoute,
  postSimulationsInboundAchTransfersRoute,
  postSimulationsInboundRealTimePaymentsTransfersRoute,
  postSimulationsInboundWireDrawdownRequestsRoute,
  postSimulationsInboundWireTransfersRoute,
  postSimulationsWireTransfersWireTransferIdReverseRoute,
  postSimulationsWireTransfersWireTransferIdSubmitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationsHandler = app
  .openapi(postSimulationsAccountStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsAccountTransfersAccountTransferIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsAchTransfersAchTransferIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsAchTransfersAchTransferIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCardAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCardDisputesCardDisputeIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCardRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCardSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCheckDepositsCheckDepositIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCheckDepositsCheckDepositIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCheckDepositsCheckDepositIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCheckTransfersCheckTransferIdDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsCheckTransfersCheckTransferIdMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsDigitalWalletTokenRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsInboundAchTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsInboundRealTimePaymentsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsInboundWireDrawdownRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsInboundWireTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsWireTransfersWireTransferIdReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsWireTransfersWireTransferIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
