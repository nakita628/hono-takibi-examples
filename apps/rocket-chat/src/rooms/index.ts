import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abacHandler,
  channelsHandler,
  directoryHandler,
  groupsHandler,
  roomInvitesHandler,
  roomsHandler,
  subscriptionsHandler,
  teamsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', channelsHandler)
  .route('/', roomsHandler)
  .route('/', teamsHandler)
  .route('/', groupsHandler)
  .route('/', directoryHandler)
  .route('/', roomInvitesHandler)
  .route('/', abacHandler)
  .route('/', subscriptionsHandler)

export default app
