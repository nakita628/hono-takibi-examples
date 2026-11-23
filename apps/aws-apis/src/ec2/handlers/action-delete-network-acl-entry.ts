import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkAclEntryRoute,
  postActionDeleteNetworkAclEntryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteNetworkAclEntryHandler = app
  .openapi(getActionDeleteNetworkAclEntryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkAclEntryRoute, (c) => {
    throw new Error('Not implemented')
  })
