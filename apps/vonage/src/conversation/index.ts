import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdEventsEventIdRoute,
  deleteConversationsConversationIdMembersMemberIdRoute,
  deleteConversationsConversationIdRoute,
  deleteLegsLegIdRoute,
  deleteUsersUserIdRoute,
  getConversationsConversationIdEventsEventIdRoute,
  getConversationsConversationIdEventsRoute,
  getConversationsConversationIdMembersMemberIdRoute,
  getConversationsConversationIdMembersRoute,
  getConversationsConversationIdRoute,
  getConversationsRoute,
  getLegsRoute,
  getUsersRoute,
  getUsersUserIdConversationsRoute,
  getUsersUserIdRoute,
  postConversationsConversationIdEventsRoute,
  postConversationsConversationIdMembersRoute,
  postConversationsRoute,
  postUsersRoute,
  putConversationsConversationIdMembersMemberIdRoute,
  putConversationsConversationIdRecordRoute,
  putConversationsConversationIdRoute,
  putUsersUserIdRoute,
} from './routes'
import {
  deleteConversationsConversationIdEventsEventIdRouteHandler,
  deleteConversationsConversationIdMembersMemberIdRouteHandler,
  deleteConversationsConversationIdRouteHandler,
  deleteLegsLegIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  getConversationsConversationIdEventsEventIdRouteHandler,
  getConversationsConversationIdEventsRouteHandler,
  getConversationsConversationIdMembersMemberIdRouteHandler,
  getConversationsConversationIdMembersRouteHandler,
  getConversationsConversationIdRouteHandler,
  getConversationsRouteHandler,
  getLegsRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdConversationsRouteHandler,
  getUsersUserIdRouteHandler,
  postConversationsConversationIdEventsRouteHandler,
  postConversationsConversationIdMembersRouteHandler,
  postConversationsRouteHandler,
  postUsersRouteHandler,
  putConversationsConversationIdMembersMemberIdRouteHandler,
  putConversationsConversationIdRecordRouteHandler,
  putConversationsConversationIdRouteHandler,
  putUsersUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConversationsRoute, getConversationsRouteHandler)
  .openapi(postConversationsRoute, postConversationsRouteHandler)
  .openapi(deleteConversationsConversationIdRoute, deleteConversationsConversationIdRouteHandler)
  .openapi(getConversationsConversationIdRoute, getConversationsConversationIdRouteHandler)
  .openapi(putConversationsConversationIdRoute, putConversationsConversationIdRouteHandler)
  .openapi(
    getConversationsConversationIdEventsRoute,
    getConversationsConversationIdEventsRouteHandler,
  )
  .openapi(
    postConversationsConversationIdEventsRoute,
    postConversationsConversationIdEventsRouteHandler,
  )
  .openapi(
    deleteConversationsConversationIdEventsEventIdRoute,
    deleteConversationsConversationIdEventsEventIdRouteHandler,
  )
  .openapi(
    getConversationsConversationIdEventsEventIdRoute,
    getConversationsConversationIdEventsEventIdRouteHandler,
  )
  .openapi(
    getConversationsConversationIdMembersRoute,
    getConversationsConversationIdMembersRouteHandler,
  )
  .openapi(
    postConversationsConversationIdMembersRoute,
    postConversationsConversationIdMembersRouteHandler,
  )
  .openapi(
    deleteConversationsConversationIdMembersMemberIdRoute,
    deleteConversationsConversationIdMembersMemberIdRouteHandler,
  )
  .openapi(
    getConversationsConversationIdMembersMemberIdRoute,
    getConversationsConversationIdMembersMemberIdRouteHandler,
  )
  .openapi(
    putConversationsConversationIdMembersMemberIdRoute,
    putConversationsConversationIdMembersMemberIdRouteHandler,
  )
  .openapi(
    putConversationsConversationIdRecordRoute,
    putConversationsConversationIdRecordRouteHandler,
  )
  .openapi(getLegsRoute, getLegsRouteHandler)
  .openapi(deleteLegsLegIdRoute, deleteLegsLegIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(putUsersUserIdRoute, putUsersUserIdRouteHandler)
  .openapi(getUsersUserIdConversationsRoute, getUsersUserIdConversationsRouteHandler)

export default app
