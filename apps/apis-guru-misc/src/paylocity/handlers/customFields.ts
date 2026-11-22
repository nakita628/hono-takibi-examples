import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CompaniesCompanyIdCustomfieldsCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const customFieldsHandler = app.openapi(
  getV2CompaniesCompanyIdCustomfieldsCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
