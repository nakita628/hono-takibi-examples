import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProviderAccountsProviderAccountIdRoute,
  getProviderAccountsProfileRoute,
  getProviderAccountsProviderAccountIdRoute,
  getProviderAccountsRoute,
  putProviderAccountsProviderAccountIdPreferencesRoute,
  putProviderAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providerAccountsHandler = app
  .openapi(getProviderAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProviderAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProviderAccountsProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProviderAccountsProviderAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProviderAccountsProviderAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProviderAccountsProviderAccountIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
