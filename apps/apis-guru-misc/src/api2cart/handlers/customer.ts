import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomerAttributeListJsonRoute,
  getCustomerCountJsonRoute,
  getCustomerFindJsonRoute,
  getCustomerGroupListJsonRoute,
  getCustomerInfoJsonRoute,
  getCustomerListJsonRoute,
  postCustomerAddJsonRoute,
  postCustomerGroupAddJsonRoute,
  putCustomerUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerHandler = app
  .openapi(postCustomerAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerAttributeListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerFindJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomerGroupAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerGroupListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomerUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
