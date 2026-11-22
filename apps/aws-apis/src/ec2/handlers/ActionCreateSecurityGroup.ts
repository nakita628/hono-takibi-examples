import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateSecurityGroupRoute, postActionCreateSecurityGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateSecurityGroupHandler = app
  .openapi(getActionCreateSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
