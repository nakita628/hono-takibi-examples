import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessAiControlsMcpServersIdRoute,
  getAccountsAccountIdAccessAiControlsMcpServersIdRoute,
  getAccountsAccountIdAccessAiControlsMcpServersRoute,
  postAccountsAccountIdAccessAiControlsMcpServersIdSyncRoute,
  postAccountsAccountIdAccessAiControlsMcpServersRoute,
  putAccountsAccountIdAccessAiControlsMcpServersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpPortalServersHandler = app
  .openapi(getAccountsAccountIdAccessAiControlsMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessAiControlsMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessAiControlsMcpServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessAiControlsMcpServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessAiControlsMcpServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessAiControlsMcpServersIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
