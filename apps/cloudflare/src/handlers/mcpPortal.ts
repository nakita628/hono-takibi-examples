import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessAiControlsMcpPortalsIdRoute,
  getAccountsAccountIdAccessAiControlsMcpPortalsIdRoute,
  getAccountsAccountIdAccessAiControlsMcpPortalsPortalIdServersServerIdEffectiveRedirectUriRoute,
  getAccountsAccountIdAccessAiControlsMcpPortalsRoute,
  postAccountsAccountIdAccessAiControlsMcpPortalsRoute,
  putAccountsAccountIdAccessAiControlsMcpPortalsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpPortalHandler = app
  .openapi(getAccountsAccountIdAccessAiControlsMcpPortalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessAiControlsMcpPortalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessAiControlsMcpPortalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessAiControlsMcpPortalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessAiControlsMcpPortalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdAccessAiControlsMcpPortalsPortalIdServersServerIdEffectiveRedirectUriRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
