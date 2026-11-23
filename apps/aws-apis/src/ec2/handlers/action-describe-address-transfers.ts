import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAddressTransfersRoute,
  postActionDescribeAddressTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAddressTransfersHandler = app
  .openapi(getActionDescribeAddressTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAddressTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
