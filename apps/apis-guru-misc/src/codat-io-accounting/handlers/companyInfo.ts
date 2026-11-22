import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdDataInfoRoute, postCompaniesCompanyIdDataInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const companyInfoHandler = app
  .openapi(getCompaniesCompanyIdDataInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdDataInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
