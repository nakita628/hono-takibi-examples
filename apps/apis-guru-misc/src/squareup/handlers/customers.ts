import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersCustomerIdCardsCardIdRoute,
  deleteV2CustomersCustomerIdGroupsGroupIdRoute,
  deleteV2CustomersCustomerIdRoute,
  getV2CustomersCustomerIdRoute,
  getV2CustomersRoute,
  postV2CustomersCustomerIdCardsRoute,
  postV2CustomersRoute,
  postV2CustomersSearchRoute,
  putV2CustomersCustomerIdGroupsGroupIdRoute,
  putV2CustomersCustomerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersCustomerIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
