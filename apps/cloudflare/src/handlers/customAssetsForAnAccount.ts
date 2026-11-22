import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute,
  deleteAccountsAccountIdCustomPagesAssetsAssetNameRoute,
  getAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute,
  getAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute,
  getAccountsAccountIdCustomPagesAssetsAssetNameRoute,
  getAccountsAccountIdCustomPagesAssetsRoute,
  postAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute,
  postAccountsAccountIdCustomPagesAssetsRoute,
  putAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute,
  putAccountsAccountIdCustomPagesAssetsAssetNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customAssetsForAnAccountHandler = app
  .openapi(getAccountsAccountIdCustomPagesAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCustomPagesAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdCustomPagesAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
