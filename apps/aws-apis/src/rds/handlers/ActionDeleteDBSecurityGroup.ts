import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBSecurityGroupRoute,
  postActionDeleteDBSecurityGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDBSecurityGroupHandler = app
  .openapi(getActionDeleteDBSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
