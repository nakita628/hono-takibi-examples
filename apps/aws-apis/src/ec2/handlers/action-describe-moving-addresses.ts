import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeMovingAddressesRoute,
  postActionDescribeMovingAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeMovingAddressesHandler = app
  .openapi(getActionDescribeMovingAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeMovingAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
