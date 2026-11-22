import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdPayPerCrawlCrawlersRoute } from '../routes'

const app = new OpenAPIHono()

export const ppcCrawlersHandler = app.openapi(getAccountsAccountIdPayPerCrawlCrawlersRoute, (c) => {
  throw new Error('Not implemented')
})
