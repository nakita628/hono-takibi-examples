import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsIdManagersIndexRoute,
  deleteAccountsIdWorkersIndexRoute,
  getAccountsIdBraintreeCustomerIndexRoute,
  getAccountsIdIndexRoute,
  getAccountsIdManagersIndexRoute,
  getAccountsIdStripeGetPaymentMethodIndexRoute,
  getAccountsIdStripeGetSetupAttemptIndexRoute,
  getAccountsIdStripeGetSetupIntentIndexRoute,
  getAccountsIdStripePaymentMethodsIndexRoute,
  getAccountsIdStripeSetupIntentsIndexRoute,
  getAccountsIdWorkersIndexRoute,
  getAccountsIndexRoute,
  patchAccountsIdIndexRoute,
  postAccountsIdChangeOwnerIndexRoute,
  postAccountsIdManagersIndexRoute,
  postAccountsIdStripeCreateSetupIntentIndexRoute,
  postAccountsIdWorkersIndexRoute,
  putAccountsIdIndexRoute,
  putAccountsIdStripeAttachPaymentMethodIndexRoute,
  putAccountsIdStripeCreateSetupIntentIndexRoute,
  putAccountsIdStripeDetachPaymentMethodIndexRoute,
  putAccountsIdStripeSetDefaultPaymentMethodIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdBraintreeCustomerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsIdChangeOwnerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsIdManagersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdManagersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsIdManagersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdStripeAttachPaymentMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsIdStripeCreateSetupIntentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdStripeCreateSetupIntentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdStripeDetachPaymentMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdStripeGetPaymentMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdStripeGetSetupAttemptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdStripeGetSetupIntentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdStripePaymentMethodsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdStripeSetDefaultPaymentMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdStripeSetupIntentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsIdWorkersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdWorkersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsIdWorkersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
