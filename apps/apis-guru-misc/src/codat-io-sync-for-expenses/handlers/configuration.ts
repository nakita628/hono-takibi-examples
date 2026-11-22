import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdSyncExpensesConfigRoute,
  postCompaniesCompanyIdSyncExpensesConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(getCompaniesCompanyIdSyncExpensesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdSyncExpensesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
