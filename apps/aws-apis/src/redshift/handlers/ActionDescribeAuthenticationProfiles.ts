import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAuthenticationProfilesRoute,
  postActionDescribeAuthenticationProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAuthenticationProfilesHandler = app
  .openapi(getActionDescribeAuthenticationProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAuthenticationProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
