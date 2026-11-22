import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
