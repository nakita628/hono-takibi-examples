import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CustomersIdRoute,
  getV1CustomersIdRoute,
  getV1CustomersItemIdAccountTransRoute,
  getV1CustomersItemIdOpeningBalanceListRoute,
  getV1CustomersItemIdOpeningBalanceRoute,
  getV1CustomersItemIdQuotesRoute,
  getV1CustomersRoute,
  postV1CustomersRoute,
  putV1CustomersBatchRoute,
  putV1CustomersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdAccountTransRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdOpeningBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdOpeningBalanceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersItemIdQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
