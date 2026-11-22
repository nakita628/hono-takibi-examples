import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateNetworkAclRoute, postActionCreateNetworkAclRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateNetworkAclHandler = app
  .openapi(getActionCreateNetworkAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateNetworkAclRoute, (c) => {
    throw new Error('Not implemented')
  })
