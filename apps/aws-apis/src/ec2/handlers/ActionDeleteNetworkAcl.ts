import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteNetworkAclRoute, postActionDeleteNetworkAclRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteNetworkAclHandler = app
  .openapi(getActionDeleteNetworkAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkAclRoute, (c) => {
    throw new Error('Not implemented')
  })
