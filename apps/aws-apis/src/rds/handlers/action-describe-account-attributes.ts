import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAccountAttributesRoute,
  postActionDescribeAccountAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAccountAttributesHandler = app
  .openapi(getActionDescribeAccountAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAccountAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
