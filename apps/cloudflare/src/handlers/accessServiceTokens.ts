import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute,
  deleteAccountsAccountIdAccessServiceTokensServiceTokenIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute,
  getAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute,
  getAccountsAccountIdAccessServiceTokensRoute,
  getAccountsAccountIdAccessServiceTokensServiceTokenIdRoute,
  postAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute,
  postAccountsAccountIdAccessServiceTokensRoute,
  postAccountsAccountIdAccessServiceTokensServiceTokenIdRefreshRoute,
  postAccountsAccountIdAccessServiceTokensServiceTokenIdRotateRoute,
  putAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute,
  putAccountsAccountIdAccessServiceTokensServiceTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessServiceTokensHandler = app
  .openapi(getAccountsAccountIdAccessServiceTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessServiceTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessServiceTokensServiceTokenIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessServiceTokensServiceTokenIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessServiceTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
