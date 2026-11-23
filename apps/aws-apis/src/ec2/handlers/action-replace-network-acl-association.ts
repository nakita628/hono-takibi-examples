import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionReplaceNetworkAclAssociationRoute,
  postActionReplaceNetworkAclAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionReplaceNetworkAclAssociationHandler = app
  .openapi(getActionReplaceNetworkAclAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReplaceNetworkAclAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
