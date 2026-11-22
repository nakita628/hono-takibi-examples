import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2EvmSmartAccountsAddressRoute,
  getV2EvmSmartAccountsAddressSpendPermissionsListRoute,
  getV2EvmSmartAccountsAddressUserOperationsUserOpHashRoute,
  getV2EvmSmartAccountsByNameNameRoute,
  getV2EvmSmartAccountsRoute,
  postV2EvmSmartAccountsAddressSpendPermissionsRevokeRoute,
  postV2EvmSmartAccountsAddressSpendPermissionsRoute,
  postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRoute,
  postV2EvmSmartAccountsAddressUserOperationsRoute,
  postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRoute,
  postV2EvmSmartAccountsRoute,
  putV2EvmSmartAccountsAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evmSmartAccountsHandler = app
  .openapi(getV2EvmSmartAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EvmSmartAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressUserOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsAddressUserOperationsUserOpHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressSpendPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsAddressSpendPermissionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressSpendPermissionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
