import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdIntelWhoisRoute } from '../routes'

const app = new OpenAPIHono()

export const whoisRecordHandler = app.openapi(getAccountsAccountIdIntelWhoisRoute, (c) => {
  throw new Error('Not implemented')
})
