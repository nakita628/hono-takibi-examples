import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersRoute,
  getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRoute,
  getCompaniesCompanyIdDataPurchaseOrdersRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseOrdersHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdDataPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
