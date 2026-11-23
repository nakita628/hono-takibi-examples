import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateClusterSecurityGroupRoute,
  postActionCreateClusterSecurityGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateClusterSecurityGroupHandler = app
  .openapi(getActionCreateClusterSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClusterSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
