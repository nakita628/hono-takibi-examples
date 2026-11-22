import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdIntelDomainBulkRoute,
  getAccountsAccountIdIntelDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainIntelligenceHandler = app
  .openapi(getAccountsAccountIdIntelDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelDomainBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
