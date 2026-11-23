import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteSecurityGroupRoute, postActionDeleteSecurityGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteSecurityGroupHandler = app
  .openapi(getActionDeleteSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
