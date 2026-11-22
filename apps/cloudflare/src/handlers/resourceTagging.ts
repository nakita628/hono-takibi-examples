import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdTagsRoute,
  deleteAccountsAccountIdTagsRoute,
  deleteZonesZoneIdTagsRoute,
  getAccountOrZoneAccountOrZoneIdTagsRoute,
  getAccountsAccountIdTagsKeysRoute,
  getAccountsAccountIdTagsResourcesRoute,
  getAccountsAccountIdTagsRoute,
  getAccountsAccountIdTagsSummaryRoute,
  getAccountsAccountIdTagsValuesTagKeyRoute,
  getZonesZoneIdTagsRoute,
  putAccountOrZoneAccountOrZoneIdTagsRoute,
  putAccountsAccountIdTagsRoute,
  putZonesZoneIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceTaggingHandler = app
  .openapi(deleteAccountsAccountIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTagsKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTagsResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTagsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTagsValuesTagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
