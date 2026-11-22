import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumerV1CustomersIdRoute,
  getConsumerV1CustomersBookingfieldsRoute,
  getConsumerV1CustomersCountriesRoute,
  getConsumerV1CustomersCustomfieldsRoute,
  getConsumerV1CustomersIdRoute,
  getConsumerV1CustomersRoute,
  getConsumerV1CustomersStatesRoute,
  postConsumerV1CustomersRoute,
  putConsumerV1CustomersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getConsumerV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumerV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersBookingfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumerV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
