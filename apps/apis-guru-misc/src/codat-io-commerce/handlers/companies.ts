import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
