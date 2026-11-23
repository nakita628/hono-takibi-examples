import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceAttributeRoute,
  postActionDescribeInstanceAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInstanceAttributeHandler = app
  .openapi(getActionDescribeInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
