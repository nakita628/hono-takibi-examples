import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataAssessAccountsCategoriesRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute,
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getDataAssessAccountsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
