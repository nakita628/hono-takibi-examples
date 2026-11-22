import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSharesShareIdExcludedRecipientsExcludedRecipientIdRoute,
  deleteAccountsAccountIdSharesShareIdRecipientsRecipientIdRoute,
  deleteAccountsAccountIdSharesShareIdResourcesShareResourceIdRoute,
  deleteAccountsAccountIdSharesShareIdRoute,
  getAccountsAccountIdSharesRoute,
  getAccountsAccountIdSharesShareIdExcludedRecipientsExcludedRecipientIdRoute,
  getAccountsAccountIdSharesShareIdExcludedRecipientsRoute,
  getAccountsAccountIdSharesShareIdRecipientsRecipientIdRoute,
  getAccountsAccountIdSharesShareIdRecipientsRoute,
  getAccountsAccountIdSharesShareIdResourcesRoute,
  getAccountsAccountIdSharesShareIdResourcesShareResourceIdRoute,
  getAccountsAccountIdSharesShareIdRoute,
  getOrganizationsOrganizationIdSharesRoute,
  postAccountsAccountIdSharesRoute,
  postAccountsAccountIdSharesShareIdExcludedRecipientsRoute,
  postAccountsAccountIdSharesShareIdRecipientsRoute,
  postAccountsAccountIdSharesShareIdResourcesRoute,
  putAccountsAccountIdSharesShareIdExcludedRecipientsRoute,
  putAccountsAccountIdSharesShareIdRecipientsRoute,
  putAccountsAccountIdSharesShareIdResourcesShareResourceIdRoute,
  putAccountsAccountIdSharesShareIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceSharingHandler = app
  .openapi(getAccountsAccountIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSharesShareIdExcludedRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSharesShareIdExcludedRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSharesShareIdExcludedRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSharesShareIdExcludedRecipientsExcludedRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSharesShareIdExcludedRecipientsExcludedRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSharesShareIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSharesShareIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSharesShareIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSharesShareIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSharesShareIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSharesShareIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSharesShareIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSharesShareIdResourcesShareResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSharesShareIdResourcesShareResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSharesShareIdResourcesShareResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
