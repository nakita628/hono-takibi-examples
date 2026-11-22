import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminConversationsRestrictAccessListGroupsRoute,
  postAdminConversationsRestrictAccessAddGroupRoute,
  postAdminConversationsRestrictAccessRemoveGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminConversationsRestrictAccessHandler = app
  .openapi(postAdminConversationsRestrictAccessAddGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConversationsRestrictAccessListGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConversationsRestrictAccessRemoveGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
