import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  getAccountsAccountIdAdclientsAdClientIdRoute,
  getAccountsAccountIdAdclientsRoute,
  getAccountsAccountIdReportsRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  patchAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  postAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  putAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAdclientsAdClientIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAdclientsAdClientIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAdclientsAdClientIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
