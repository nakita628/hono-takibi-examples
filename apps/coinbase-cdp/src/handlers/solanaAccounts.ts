import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SolanaAccountsAddressRoute,
  getV2SolanaAccountsByNameNameRoute,
  getV2SolanaAccountsRoute,
  postV2SolanaAccountsAddressExportRoute,
  postV2SolanaAccountsAddressSignMessageRoute,
  postV2SolanaAccountsAddressSignTransactionRoute,
  postV2SolanaAccountsExportByNameNameRoute,
  postV2SolanaAccountsImportRoute,
  postV2SolanaAccountsRoute,
  postV2SolanaAccountsSendTransactionRoute,
  putV2SolanaAccountsAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solanaAccountsHandler = app
  .openapi(getV2SolanaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SolanaAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2SolanaAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SolanaAccountsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsAddressExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsExportByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsAddressSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsAddressSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
