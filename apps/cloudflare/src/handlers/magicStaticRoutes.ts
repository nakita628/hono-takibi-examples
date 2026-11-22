import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicRoutesRoute,
  deleteAccountsAccountIdMagicRoutesRouteIdRoute,
  getAccountsAccountIdMagicRoutesRoute,
  getAccountsAccountIdMagicRoutesRouteIdRoute,
  postAccountsAccountIdMagicRoutesRoute,
  putAccountsAccountIdMagicRoutesRoute,
  putAccountsAccountIdMagicRoutesRouteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicStaticRoutesHandler = app
  .openapi(deleteAccountsAccountIdMagicRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
