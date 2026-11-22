import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute,
  deleteAccountsAccountIdCustomCsrsCustomCsrIdRoute,
  getAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute,
  getAccountOrZoneAccountOrZoneIdCustomCsrsRoute,
  getAccountsAccountIdCustomCsrsCustomCsrIdRoute,
  getAccountsAccountIdCustomCsrsRoute,
  postAccountOrZoneAccountOrZoneIdCustomCsrsRoute,
  postAccountsAccountIdCustomCsrsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customCSRsForAnAccountHandler = app
  .openapi(getAccountsAccountIdCustomCsrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCustomCsrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCustomCsrsCustomCsrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCustomCsrsCustomCsrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdCustomCsrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdCustomCsrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdCustomCsrsCustomCsrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
