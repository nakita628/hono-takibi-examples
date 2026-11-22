import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
  deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRoute,
  getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
  getV2EmbeddedWalletApiEndUsersUserIdDelegationRoute,
  getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
  getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRoute,
  getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRoute,
  getV2EmbeddedWalletApiEvmBorrowProductsRoute,
  postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRoute,
  postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
  postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endUserAccountsHandler = app
  .openapi(getV2EmbeddedWalletApiEvmBorrowProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEndUsersUserIdDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
