import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdMerchantsRoute,
  getCompaniesCompanyIdRoute,
  getCompaniesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const account__companyLevelHandler = app
  .openapi(getCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
