import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postWalletCreateRoute,
  postWalletGetRoute,
  postWalletListRoute,
  postWalletTransactionExecuteRoute,
  postWalletTransactionGetRoute,
  postWalletTransactionListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletHandler = app
  .openapi(postWalletCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionListRoute, (c) => {
    throw new Error('Not implemented')
  })
