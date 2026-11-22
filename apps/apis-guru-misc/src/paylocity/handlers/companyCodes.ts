import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CompaniesCompanyIdCodesCodeResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCodesHandler = app.openapi(
  getV2CompaniesCompanyIdCodesCodeResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
