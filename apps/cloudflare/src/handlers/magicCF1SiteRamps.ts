import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRampIdRoute,
  getAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRampIdRoute,
  getAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRoute,
  postAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicCF1SiteRampsHandler = app
  .openapi(getAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRampIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicCf1SitesCf1SiteIdRampsRampIdRoute, (c) => {
    throw new Error('Not implemented')
  })
