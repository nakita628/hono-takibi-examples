import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi1TaxesCodesCodeRoute,
  getApi1TaxesCodesRoute,
  getApi1TaxesCompaniesCompanyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxesHandler = app
  .openapi(getApi1TaxesCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TaxesCodesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TaxesCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
