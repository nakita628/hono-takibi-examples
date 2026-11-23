import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeImageAttributeRoute,
  postActionDescribeImageAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeImageAttributeHandler = app
  .openapi(getActionDescribeImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
