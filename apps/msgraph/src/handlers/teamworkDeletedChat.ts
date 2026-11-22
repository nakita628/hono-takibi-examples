import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamworkDeletedChatsDeletedChatIdRoute,
  getTeamworkDeletedChatsCountRoute,
  getTeamworkDeletedChatsDeletedChatIdRoute,
  getTeamworkDeletedChatsRoute,
  patchTeamworkDeletedChatsDeletedChatIdRoute,
  postTeamworkDeletedChatsDeletedChatIdUndoDeleteRoute,
  postTeamworkDeletedChatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamworkDeletedChatHandler = app
  .openapi(getTeamworkDeletedChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedChatsDeletedChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamworkDeletedChatsDeletedChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamworkDeletedChatsDeletedChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamworkDeletedChatsDeletedChatIdUndoDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamworkDeletedChatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
