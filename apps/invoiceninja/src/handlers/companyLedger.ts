import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1CompanyLedgerRoute } from '../routes'

const app = new OpenAPIHono()

export const companyLedgerHandler = app.openapi(getApiV1CompanyLedgerRoute, (c) => {
  throw new Error('Not implemented')
})
