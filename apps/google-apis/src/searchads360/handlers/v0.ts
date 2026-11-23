import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV0CustomersCustomerIdCustomColumnsRoute,
  getV0ResourceNameRoute,
  postV0CustomersCustomerIdSearchAds360SearchRoute,
  postV0CustomersCustomerIdSearchAds360SearchStreamRoute,
  postV0SearchAds360FieldsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v0Handler = app
  .openapi(getV0CustomersCustomerIdCustomColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0CustomersCustomerIdSearchAds360SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0CustomersCustomerIdSearchAds360SearchStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0SearchAds360FieldsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
