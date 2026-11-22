import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CompanyGatewaysIdRoute,
  getApiV1CompanyGatewaysCreateRoute,
  getApiV1CompanyGatewaysIdEditRoute,
  getApiV1CompanyGatewaysIdRoute,
  getApiV1CompanyGatewaysRoute,
  postApiV1CompanyGatewaysBulkRoute,
  postApiV1CompanyGatewaysRoute,
  putApiV1CompanyGatewaysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyGatewaysHandler = app
  .openapi(getApiV1CompanyGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyGatewaysCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CompanyGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CompanyGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyGatewaysIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyGatewaysBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
