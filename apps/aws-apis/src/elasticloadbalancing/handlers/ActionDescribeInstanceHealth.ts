import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceHealthRoute,
  postActionDescribeInstanceHealthRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeInstanceHealthHandler = app
  .openapi(getActionDescribeInstanceHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
