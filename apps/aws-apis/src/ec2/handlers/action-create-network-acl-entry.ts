import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateNetworkAclEntryRoute,
  postActionCreateNetworkAclEntryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateNetworkAclEntryHandler = app
  .openapi(getActionCreateNetworkAclEntryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateNetworkAclEntryRoute, (c) => {
    throw new Error('Not implemented')
  })
