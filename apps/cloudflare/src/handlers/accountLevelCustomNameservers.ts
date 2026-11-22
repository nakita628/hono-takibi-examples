import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCustomNsCustomNsIdRoute,
  getAccountOrZoneAccountOrZoneIdCustomNsRoute,
  getAccountsAccountIdCustomNsRoute,
  postAccountOrZoneAccountOrZoneIdCustomNsRoute,
  postAccountsAccountIdCustomNsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountLevelCustomNameserversHandler = app
  .openapi(getAccountsAccountIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCustomNsCustomNsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdCustomNsRoute, (c) => {
    throw new Error('Not implemented')
  })
