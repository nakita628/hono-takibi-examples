import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceTypesRoute,
  postActionDescribeInstanceTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInstanceTypesHandler = app
  .openapi(getActionDescribeInstanceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
