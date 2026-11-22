import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSipTrunkCalloutCountriesCountryIdRoute,
  deleteAccountsAccountIdSipTrunkInternalNumbersNumberIdRoute,
  deleteAccountsAccountIdSipTrunkNumbersRoute,
  deleteAccountsAccountIdSipTrunkTrunksTrunkIdRoute,
  getAccountsAccountIdSipTrunkCalloutCountriesRoute,
  getAccountsAccountIdSipTrunkInternalNumbersRoute,
  getAccountsAccountIdSipTrunkTrunksRoute,
  getSipTrunkNumbersRoute,
  patchAccountsAccountIdSipTrunkSettingsRoute,
  postAccountsAccountIdSipTrunkCalloutCountriesRoute,
  postAccountsAccountIdSipTrunkInternalNumbersRoute,
  postAccountsAccountIdSipTrunkNumbersRoute,
  postAccountsAccountIdSipTrunkTrunksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sipConnectedAudioHandler = app
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
  .openapi(getSipTrunkNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
