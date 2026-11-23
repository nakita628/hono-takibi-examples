import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEnvKeyRoute,
  deleteAccountsAccountIdEnvKeyValueIdRoute,
  deleteAccountsAccountIdRoute,
  getAccountsAccountIdAiGatewayTokenRoute,
  getAccountsAccountIdAuditRoute,
  getAccountsAccountIdEnvKeyRoute,
  getAccountsAccountIdEnvRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  getAccountsTypesRoute,
  patchAccountsAccountIdEnvKeyRoute,
  postAccountsAccountIdEnvRoute,
  postAccountsRoute,
  putAccountsAccountIdEnvKeyRoute,
  putAccountsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsAccountIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEnvRoute, (c) => {
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
  .openapi(getAccountsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
