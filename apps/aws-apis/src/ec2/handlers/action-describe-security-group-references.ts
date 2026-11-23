import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSecurityGroupReferencesRoute,
  postActionDescribeSecurityGroupReferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSecurityGroupReferencesHandler = app
  .openapi(getActionDescribeSecurityGroupReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSecurityGroupReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
