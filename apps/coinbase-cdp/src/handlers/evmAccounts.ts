import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2EvmAccountsAddressRoute,
  getV2EvmAccountsByNameNameRoute,
  getV2EvmAccountsRoute,
  getV2EvmEip7702DelegationOperationsDelegationOperationIdRoute,
  postV2EvmAccountsAddressEip7702DelegationRoute,
  postV2EvmAccountsAddressExportRoute,
  postV2EvmAccountsAddressSendTransactionRoute,
  postV2EvmAccountsAddressSignMessageRoute,
  postV2EvmAccountsAddressSignRoute,
  postV2EvmAccountsAddressSignTransactionRoute,
  postV2EvmAccountsAddressSignTypedDataRoute,
  postV2EvmAccountsExportByNameNameRoute,
  postV2EvmAccountsImportRoute,
  postV2EvmAccountsRoute,
  putV2EvmAccountsAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evmAccountsHandler = app
  .openapi(getV2EvmAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EvmAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmAccountsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignTypedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressEip7702DelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmEip7702DelegationOperationsDelegationOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsExportByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
