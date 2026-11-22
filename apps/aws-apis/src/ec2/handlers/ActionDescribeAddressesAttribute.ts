import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAddressesAttributeRoute,
  postActionDescribeAddressesAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAddressesAttributeHandler = app
  .openapi(getActionDescribeAddressesAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAddressesAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
