import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversations202609ThreadsThreadIdAssigneeRoute,
  deleteConversationsConversations202609ThreadsThreadIdRoute,
  getConversationsConversations202609ThreadsRoute,
  getConversationsConversations202609ThreadsThreadIdRoute,
  patchConversationsConversations202609ThreadsThreadIdRoute,
  putConversationsConversations202609ThreadsThreadIdAssigneeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const threadsHandler = app
  .openapi(getConversationsConversations202609ThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversations202609ThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConversationsConversations202609ThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversations202609ThreadsThreadIdAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversations202609ThreadsThreadIdAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
