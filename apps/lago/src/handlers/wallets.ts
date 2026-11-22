import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersExternalCustomerIdWalletsCodeRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  deleteWalletsLagoIdMetadataKeyRoute,
  deleteWalletsLagoIdMetadataRoute,
  deleteWalletsLagoIdRoute,
  getCustomersExternalCustomerIdWalletsCodeRoute,
  getCustomersExternalCustomerIdWalletsRoute,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  getWalletsLagoIdRoute,
  getWalletsLagoIdWalletTransactionsRoute,
  getWalletsRoute,
  getWalletTransactionsLagoIdConsumptionsRoute,
  getWalletTransactionsLagoIdFundingsRoute,
  getWalletTransactionsLagoIdRoute,
  patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  patchWalletsLagoIdMetadataRoute,
  postCustomersExternalCustomerIdWalletsRoute,
  postCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  postCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  postWalletsLagoIdMetadataRoute,
  postWalletsRoute,
  postWalletTransactionsLagoIdPaymentUrlRoute,
  postWalletTransactionsRoute,
  putCustomersExternalCustomerIdWalletsCodeRoute,
  putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  putWalletsLagoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletsHandler = app
  .openapi(postCustomersExternalCustomerIdWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersExternalCustomerIdWalletsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWalletsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletsLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletsLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWalletsLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWalletsLagoIdMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletTransactionsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionsLagoIdPaymentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletTransactionsLagoIdConsumptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletTransactionsLagoIdFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletsLagoIdWalletTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
