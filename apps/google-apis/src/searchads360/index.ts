import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV0CustomersCustomerIdCustomColumnsRoute,
  getV0ResourceNameRoute,
  postV0CustomersCustomerIdSearchAds360SearchRoute,
  postV0CustomersCustomerIdSearchAds360SearchStreamRoute,
  postV0SearchAds360FieldsSearchRoute,
} from './routes'
import {
  getV0CustomersCustomerIdCustomColumnsRouteHandler,
  getV0ResourceNameRouteHandler,
  postV0CustomersCustomerIdSearchAds360SearchRouteHandler,
  postV0CustomersCustomerIdSearchAds360SearchStreamRouteHandler,
  postV0SearchAds360FieldsSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV0CustomersCustomerIdCustomColumnsRoute,
    getV0CustomersCustomerIdCustomColumnsRouteHandler,
  )
  .openapi(
    postV0CustomersCustomerIdSearchAds360SearchRoute,
    postV0CustomersCustomerIdSearchAds360SearchRouteHandler,
  )
  .openapi(
    postV0CustomersCustomerIdSearchAds360SearchStreamRoute,
    postV0CustomersCustomerIdSearchAds360SearchStreamRouteHandler,
  )
  .openapi(postV0SearchAds360FieldsSearchRoute, postV0SearchAds360FieldsSearchRouteHandler)
  .openapi(getV0ResourceNameRoute, getV0ResourceNameRouteHandler)

export default app
