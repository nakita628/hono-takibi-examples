import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEnvKeyRoute,
  deleteAccountsAccountIdEnvKeyValueIdRoute,
  getAccountsAccountIdEnvKeyRoute,
  getAccountsAccountIdEnvRoute,
  getApiV1SitesSiteIdEnvRoute,
  patchAccountsAccountIdEnvKeyRoute,
  postAccountsAccountIdEnvRoute,
  putAccountsAccountIdEnvKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentVariablesHandler = app
  .openapi(getAccountsAccountIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEnvKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdEnvKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEnvKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEnvKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEnvKeyValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
