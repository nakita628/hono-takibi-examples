import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateDBSecurityGroupRoute,
  postActionCreateDBSecurityGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDBSecurityGroupHandler = app
  .openapi(getActionCreateDBSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
