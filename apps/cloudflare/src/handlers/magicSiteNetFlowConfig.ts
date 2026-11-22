import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute,
  getAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute,
  patchAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute,
  postAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute,
  putAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicSiteNetFlowConfigHandler = app
  .openapi(deleteAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicSitesSiteIdNetflowConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
