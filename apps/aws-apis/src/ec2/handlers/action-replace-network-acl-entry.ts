import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionReplaceNetworkAclEntryRoute,
  postActionReplaceNetworkAclEntryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionReplaceNetworkAclEntryHandler = app
  .openapi(getActionReplaceNetworkAclEntryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReplaceNetworkAclEntryRoute, (c) => {
    throw new Error('Not implemented')
  })
