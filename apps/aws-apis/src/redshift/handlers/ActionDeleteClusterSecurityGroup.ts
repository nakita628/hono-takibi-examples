import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteClusterSecurityGroupRoute,
  postActionDeleteClusterSecurityGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteClusterSecurityGroupHandler = app
  .openapi(getActionDeleteClusterSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteClusterSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
