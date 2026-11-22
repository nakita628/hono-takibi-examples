import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanyCreditsCompanyCompanyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsCompanyCompanyIdHandler = app.openapi(
  getV1CompanyCreditsCompanyCompanyIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
