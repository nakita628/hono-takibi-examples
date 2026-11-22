import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountActivityHandler,
  accountHandler,
  activityHandler,
  articlesHandler,
  botsHandler,
  broadcastsHandler,
  callsHandler,
  chatHandler,
  communitiesHandler,
  communityNotesHandler,
  complianceHandler,
  connectionsHandler,
  directMessagesHandler,
  generalHandler,
  listsHandler,
  mediaHandler,
  newsHandler,
  postsHandler,
  spacesHandler,
  streamHandler,
  trendsHandler,
  usageHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', accountActivityHandler)
  .route('/', streamHandler)
  .route('/', activityHandler)
  .route('/', articlesHandler)
  .route('/', botsHandler)
  .route('/', broadcastsHandler)
  .route('/', callsHandler)
  .route('/', chatHandler)
  .route('/', communitiesHandler)
  .route('/', complianceHandler)
  .route('/', connectionsHandler)
  .route('/', directMessagesHandler)
  .route('/', listsHandler)
  .route('/', mediaHandler)
  .route('/', newsHandler)
  .route('/', communityNotesHandler)
  .route('/', generalHandler)
  .route('/', postsHandler)
  .route('/', spacesHandler)
  .route('/', trendsHandler)
  .route('/', webhooksHandler)
  .route('/', usageHandler)
  .route('/', usersHandler)

export default app
