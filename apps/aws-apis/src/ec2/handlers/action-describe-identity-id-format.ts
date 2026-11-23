import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeIdentityIdFormatRoute,
  postActionDescribeIdentityIdFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeIdentityIdFormatHandler = app
  .openapi(getActionDescribeIdentityIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIdentityIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
