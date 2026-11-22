import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CompanyCompanyIdRoute,
  getV1CompanyCompanyIdRoute,
  putV1CompanyCompanyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyCompanyIdHandler = app
  .openapi(deleteV1CompanyCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CompanyCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
