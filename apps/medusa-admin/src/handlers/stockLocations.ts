import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminStockLocationsIdRoute,
  getAdminStockLocationsIdRoute,
  getAdminStockLocationsRoute,
  postAdminStockLocationsIdFulfillmentProvidersRoute,
  postAdminStockLocationsIdFulfillmentSetsRoute,
  postAdminStockLocationsIdRoute,
  postAdminStockLocationsIdSalesChannelsRoute,
  postAdminStockLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stockLocationsHandler = app
  .openapi(getAdminStockLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStockLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminStockLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdFulfillmentProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdFulfillmentSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
