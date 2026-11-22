import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdMembersMemberIdRoute,
  getConversationsConversationIdMembersMemberIdRoute,
  getConversationsConversationIdMembersRoute,
  postConversationsConversationIdMembersRoute,
  putConversationsConversationIdMembersMemberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memberHandler = app
  .openapi(getConversationsConversationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
