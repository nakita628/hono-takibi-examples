import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1WalletTxnsIdRoute,
  getApi1WalletTxnsIdRoute,
  getApi1WalletTxnsRoute,
  postApi1WalletTxnsIdCreateDealRoute,
  postApi1WalletTxnsIdCreatePrivateDealRoute,
  postApi1WalletTxnsIdCreateTransferRoute,
  postApi1WalletTxnsIdIgnoreRoute,
  postApi1WalletTxnsIdReconcileRoute,
  postApi1WalletTxnsIdResetRoute,
  postApi1WalletTxnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletTxnsHandler = app
  .openapi(getApi1WalletTxnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1WalletTxnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1WalletTxnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdCreateDealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdCreateTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdCreatePrivateDealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdIgnoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletTxnsIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
