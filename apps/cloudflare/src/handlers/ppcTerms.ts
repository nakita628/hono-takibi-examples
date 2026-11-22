import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdPayPerCrawlSignatureLinkRoute,
  getAccountsAccountIdPayPerCrawlTermsRoute,
  getAccountsAccountIdPayPerCrawlTermsSignatureRoute,
  postAccountsAccountIdPayPerCrawlTermsSignatureRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppcTermsHandler = app
  .openapi(getAccountsAccountIdPayPerCrawlSignatureLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPayPerCrawlTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPayPerCrawlTermsSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPayPerCrawlTermsSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
