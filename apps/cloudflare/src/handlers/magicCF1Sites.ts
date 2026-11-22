import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicCf1SitesCf1SiteIdRoute,
  getAccountsAccountIdMagicCf1SitesCf1SiteIdRoute,
  getAccountsAccountIdMagicCf1SitesRoute,
  patchAccountsAccountIdMagicCf1SitesCf1SiteIdRoute,
  postAccountsAccountIdMagicCf1SitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicCF1SitesHandler = app
  .openapi(getAccountsAccountIdMagicCf1SitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicCf1SitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicCf1SitesCf1SiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicCf1SitesCf1SiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicCf1SitesCf1SiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
