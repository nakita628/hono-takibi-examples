import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsConversations202609ActorsActorIdRoute,
  postConversationsConversations202609ActorsBatchReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorsHandler = app
  .openapi(postConversationsConversations202609ActorsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
