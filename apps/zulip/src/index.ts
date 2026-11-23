import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentsHandler,
  botsHandler,
  botStorageHandler,
  callsHandler,
  channelFoldersHandler,
  channelsHandler,
  defaultStreamsHandler,
  devFetchApiKeyHandler,
  devListUsersHandler,
  draftsHandler,
  eventsHandler,
  exportHandler,
  fetchApiKeyHandler,
  getStreamIdHandler,
  invitesHandler,
  jwtHandler,
  markAllAsReadHandler,
  markStreamAsReadHandler,
  markTopicAsReadHandler,
  messagesHandler,
  mobilePushHandler,
  navigationViewsHandler,
  realmHandler,
  realTimeHandler,
  registerClientDeviceHandler,
  registerHandler,
  remindersHandler,
  remotesHandler,
  removeClientDeviceHandler,
  restErrorHandlingHandler,
  savedSnippetsHandler,
  scheduledMessagesHandler,
  serverSettingsHandler,
  settingsHandler,
  streamsHandler,
  thumbnailHandler,
  typingHandler,
  userGroupsHandler,
  usersHandler,
  userTopicsHandler,
  userUploadsHandler,
  zulipOutgoingWebhookHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fetchApiKeyHandler)
  .route('/', jwtHandler)
  .route('/', devFetchApiKeyHandler)
  .route('/', devListUsersHandler)
  .route('/', eventsHandler)
  .route('/', getStreamIdHandler)
  .route('/', markAllAsReadHandler)
  .route('/', markStreamAsReadHandler)
  .route('/', markTopicAsReadHandler)
  .route('/', attachmentsHandler)
  .route('/', botStorageHandler)
  .route('/', draftsHandler)
  .route('/', navigationViewsHandler)
  .route('/', savedSnippetsHandler)
  .route('/', remindersHandler)
  .route('/', scheduledMessagesHandler)
  .route('/', defaultStreamsHandler)
  .route('/', messagesHandler)
  .route('/', userUploadsHandler)
  .route('/', thumbnailHandler)
  .route('/', usersHandler)
  .route('/', mobilePushHandler)
  .route('/', remotesHandler)
  .route('/', registerClientDeviceHandler)
  .route('/', removeClientDeviceHandler)
  .route('/', userTopicsHandler)
  .route('/', realmHandler)
  .route('/', exportHandler)
  .route('/', invitesHandler)
  .route('/', registerHandler)
  .route('/', serverSettingsHandler)
  .route('/', settingsHandler)
  .route('/', streamsHandler)
  .route('/', typingHandler)
  .route('/', channelsHandler)
  .route('/', userGroupsHandler)
  .route('/', channelFoldersHandler)
  .route('/', botsHandler)
  .route('/', realTimeHandler)
  .route('/', restErrorHandlingHandler)
  .route('/', zulipOutgoingWebhookHandler)
  .route('/', callsHandler)

export default app
