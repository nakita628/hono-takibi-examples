import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdBillingEntitiesRoute,
  getCompaniesCompanyIdShippingLocationsRoute,
  getCompaniesCompanyIdTerminalModelsRoute,
  getCompaniesCompanyIdTerminalOrdersOrderIdRoute,
  getCompaniesCompanyIdTerminalOrdersRoute,
  getCompaniesCompanyIdTerminalProductsRoute,
  patchCompaniesCompanyIdTerminalOrdersOrderIdRoute,
  postCompaniesCompanyIdShippingLocationsRoute,
  postCompaniesCompanyIdTerminalOrdersOrderIdCancelRoute,
  postCompaniesCompanyIdTerminalOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalOrders__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdBillingEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
