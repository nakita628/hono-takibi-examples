import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRoute,
  deleteAccountsAccountIdSettingsVirtualBackgroundsRoute,
  deleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdRoute,
  deleteAccountsAccountIdSipTrunkInternalNumbersNumberIdRoute,
  deleteAccountsAccountIdSipTrunkNumbersRoute,
  deleteAccountsAccountIdSipTrunkTrunksTrunkIdRoute,
  getAccountsAccountIdBillingInvoicesInvoiceIdRoute,
  getAccountsAccountIdBillingInvoicesRoute,
  getAccountsAccountIdBillingRoute,
  getAccountsAccountIdLockSettingsRoute,
  getAccountsAccountIdManagedDomainsRoute,
  getAccountsAccountIdPlansRoute,
  getAccountsAccountIdPlansUsageRoute,
  getAccountsAccountIdRecordingsRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdSettingsRoute,
  getAccountsAccountIdSipTrunkCalloutCountriesRoute,
  getAccountsAccountIdSipTrunkInternalNumbersRoute,
  getAccountsAccountIdSipTrunkTrunksRoute,
  getAccountsAccountIdTrustedDomainsRoute,
  getAccountsRoute,
  patchAccountsAccountIdBillingRoute,
  patchAccountsAccountIdLockSettingsRoute,
  patchAccountsAccountIdOptionsRoute,
  patchAccountsAccountIdPhoneSettingsRoute,
  patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRoute,
  patchAccountsAccountIdPlansAddonsStatusRoute,
  patchAccountsAccountIdPlansBaseStatusRoute,
  patchAccountsAccountIdSettingsRoute,
  patchAccountsAccountIdSipTrunkSettingsRoute,
  postAccountsAccountIdPhoneSetupRoute,
  postAccountsAccountIdPhoneSipTrunkTrunksRoute,
  postAccountsAccountIdPlansAddonsRoute,
  postAccountsAccountIdPlansRoute,
  postAccountsAccountIdSettingsVirtualBackgroundsRoute,
  postAccountsAccountIdSipTrunkCalloutCountriesRoute,
  postAccountsAccountIdSipTrunkInternalNumbersRoute,
  postAccountsAccountIdSipTrunkNumbersRoute,
  postAccountsAccountIdSipTrunkTrunksRoute,
  postAccountsRoute,
  putAccountsAccountIdOwnerRoute,
  putAccountsAccountIdPlansAddonsRoute,
  putAccountsAccountIdPlansBaseRoute,
  putAccountsAccountIdUsersUserIdAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLockSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLockSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdManagedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPhoneSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPhoneSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPhoneSipTrunkTrunksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPlansAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPlansAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPlansAddonsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdPlansBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPlansBaseStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPlansUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSipTrunkCalloutCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSipTrunkCalloutCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSipTrunkInternalNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSipTrunkInternalNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSipTrunkInternalNumbersNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSipTrunkNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSipTrunkNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdSipTrunkSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSipTrunkTrunksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSipTrunkTrunksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSipTrunkTrunksTrunkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTrustedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdUsersUserIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
