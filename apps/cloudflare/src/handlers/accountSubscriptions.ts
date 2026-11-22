import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSubscriptionsSubscriptionIdentifierRoute,
  getAccountOrZoneAccountOrZoneIdSubscriptionsRoute,
  getAccountsAccountIdSubscriptionsRoute,
  getAccountsAccountIdSubscriptionsSubscriptionIdentifierCancelReasonRoute,
  getAccountsAccountIdSubscriptionsSubscriptionIdentifierRoute,
  postAccountOrZoneAccountOrZoneIdSubscriptionsRoute,
  postAccountsAccountIdBulkSubscriptionsRoute,
  postAccountsAccountIdSubscriptionsCancelDowngradeRoute,
  postAccountsAccountIdSubscriptionsRoute,
  postAccountsAccountIdSubscriptionsSubscriptionIdentifierActionAppendRoute,
  postAccountsAccountIdSubscriptionsSubscriptionIdentifierCancelReasonRoute,
  putAccountsAccountIdSubscriptionsSubscriptionIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountSubscriptionsHandler = app
  .openapi(postAccountsAccountIdBulkSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSubscriptionsCancelDowngradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSubscriptionsSubscriptionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSubscriptionsSubscriptionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSubscriptionsSubscriptionIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSubscriptionsSubscriptionIdentifierActionAppendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSubscriptionsSubscriptionIdentifierCancelReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSubscriptionsSubscriptionIdentifierCancelReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
