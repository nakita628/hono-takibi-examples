import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeOrganizationsAccessRoute,
  postActionDescribeOrganizationsAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeOrganizationsAccessHandler = app
  .openapi(getActionDescribeOrganizationsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeOrganizationsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
