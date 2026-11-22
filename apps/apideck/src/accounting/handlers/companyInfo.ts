import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountingCompanyInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const companyInfoHandler = app.openapi(getAccountingCompanyInfoRoute, (c) => {
  throw new Error('Not implemented')
})
