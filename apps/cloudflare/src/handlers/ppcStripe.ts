import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdPayPerCrawlCrawlerStripeRoute,
  deleteAccountsAccountIdPayPerCrawlPublisherStripeRoute,
  getAccountsAccountIdPayPerCrawlCrawlerStripeRoute,
  getAccountsAccountIdPayPerCrawlPublisherStripeRoute,
  postAccountsAccountIdPayPerCrawlCrawlerStripeRoute,
  postAccountsAccountIdPayPerCrawlPublisherStripeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppcStripeHandler = app
  .openapi(deleteAccountsAccountIdPayPerCrawlCrawlerStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPayPerCrawlCrawlerStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPayPerCrawlCrawlerStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPayPerCrawlPublisherStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPayPerCrawlPublisherStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPayPerCrawlPublisherStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
