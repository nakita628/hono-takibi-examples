import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountEntityTransfersTokenRoute,
  deleteAccountOauthClientsClientIdRoute,
  deleteAccountPaymentMethodsPaymentMethodIdRoute,
  deleteAccountServiceTransfersTokenRoute,
  deleteAccountUsersUsernameRoute,
  getAccountEntityTransfersRoute,
  getAccountEntityTransfersTokenRoute,
  getAccountEventsEventIdRoute,
  getAccountEventsRoute,
  getAccountInvoicesInvoiceIdItemsRoute,
  getAccountInvoicesInvoiceIdRoute,
  getAccountInvoicesRoute,
  getAccountLoginsLoginIdRoute,
  getAccountLoginsRoute,
  getAccountMaintenanceRoute,
  getAccountNotificationsRoute,
  getAccountOauthClientsClientIdRoute,
  getAccountOauthClientsClientIdThumbnailRoute,
  getAccountOauthClientsRoute,
  getAccountPaymentMethodsPaymentMethodIdRoute,
  getAccountPaymentMethodsRoute,
  getAccountPaymentsPaymentIdRoute,
  getAccountPaymentsRoute,
  getAccountRoute,
  getAccountServiceTransfersRoute,
  getAccountServiceTransfersTokenRoute,
  getAccountSettingsRoute,
  getAccountTransferRoute,
  getAccountUsersRoute,
  getAccountUsersUsernameGrantsRoute,
  getAccountUsersUsernameRoute,
  postAccountCancelRoute,
  postAccountCreditCardRoute,
  postAccountEntityTransfersRoute,
  postAccountEntityTransfersTokenAcceptRoute,
  postAccountEventsEventIdReadRoute,
  postAccountEventsEventIdSeenRoute,
  postAccountOauthClientsClientIdResetSecretRoute,
  postAccountOauthClientsRoute,
  postAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute,
  postAccountPaymentMethodsRoute,
  postAccountPaymentsPaypalExecuteRoute,
  postAccountPaymentsPaypalRoute,
  postAccountPaymentsRoute,
  postAccountPromoCodesRoute,
  postAccountServiceTransfersRoute,
  postAccountServiceTransfersTokenAcceptRoute,
  postAccountSettingsManagedEnableRoute,
  postAccountUsersRoute,
  putAccountOauthClientsClientIdRoute,
  putAccountOauthClientsClientIdThumbnailRoute,
  putAccountRoute,
  putAccountSettingsRoute,
  putAccountUsersUsernameGrantsRoute,
  putAccountUsersUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountEntityTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountEntityTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountEntityTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountEntityTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountEntityTransfersTokenAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountEventsEventIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountEventsEventIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInvoicesInvoiceIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountLoginsLoginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOauthClientsClientIdResetSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOauthClientsClientIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOauthClientsClientIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountPaymentsPaypalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountPaymentsPaypalExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountPromoCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountServiceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountServiceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountServiceTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountServiceTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountServiceTransfersTokenAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSettingsManagedEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountUsersUsernameGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountUsersUsernameGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
