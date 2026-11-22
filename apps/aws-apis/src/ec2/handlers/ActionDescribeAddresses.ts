import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeAddressesRoute, postActionDescribeAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAddressesHandler = app
  .openapi(getActionDescribeAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
