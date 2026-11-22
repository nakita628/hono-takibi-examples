import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdDataSalesOrdersRoute,
  getCompaniesCompanyIdDataSalesOrdersSalesOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesOrdersHandler = app
  .openapi(getCompaniesCompanyIdDataSalesOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataSalesOrdersSalesOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
