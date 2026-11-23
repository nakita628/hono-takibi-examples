import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appendChatMessageHandler,
  appendTextHandler,
  checkTokenHandler,
  copyPadHandler,
  copyPadWithoutHistoryHandler,
  createAuthorHandler,
  createAuthorIfNotExistsForHandler,
  createDiffHtmlHandler,
  createGroupHandler,
  createGroupIfNotExistsForHandler,
  createGroupPadHandler,
  createPadHandler,
  createSessionHandler,
  deleteGroupHandler,
  deletePadHandler,
  deleteSessionHandler,
  getAttributePoolHandler,
  getAuthorNameHandler,
  getChatHeadHandler,
  getChatHistoryHandler,
  getHtmlHandler,
  getLastEditedHandler,
  getPadIdHandler,
  getPublicStatusHandler,
  getReadOnlyIdHandler,
  getRevisionChangesetHandler,
  getRevisionsCountHandler,
  getSavedRevisionsCountHandler,
  getSessionInfoHandler,
  getStatsHandler,
  getTextHandler,
  listAllGroupsHandler,
  listAllPadsHandler,
  listAuthorsOfPadHandler,
  listPadsHandler,
  listPadsOfAuthorHandler,
  listSavedRevisionsHandler,
  listSessionsOfAuthorHandler,
  listSessionsOfGroupHandler,
  movePadHandler,
  padUsersCountHandler,
  padUsersHandler,
  restoreRevisionHandler,
  saveRevisionHandler,
  sendClientsMessageHandler,
  setHtmlHandler,
  setPublicStatusHandler,
  setTextHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appendChatMessageHandler)
  .route('/', appendTextHandler)
  .route('/', checkTokenHandler)
  .route('/', copyPadHandler)
  .route('/', copyPadWithoutHistoryHandler)
  .route('/', createAuthorHandler)
  .route('/', createAuthorIfNotExistsForHandler)
  .route('/', createDiffHtmlHandler)
  .route('/', createGroupHandler)
  .route('/', createGroupIfNotExistsForHandler)
  .route('/', createGroupPadHandler)
  .route('/', createPadHandler)
  .route('/', createSessionHandler)
  .route('/', deleteGroupHandler)
  .route('/', deletePadHandler)
  .route('/', deleteSessionHandler)
  .route('/', getAttributePoolHandler)
  .route('/', getAuthorNameHandler)
  .route('/', getChatHeadHandler)
  .route('/', getChatHistoryHandler)
  .route('/', getHtmlHandler)
  .route('/', getLastEditedHandler)
  .route('/', getPadIdHandler)
  .route('/', getPublicStatusHandler)
  .route('/', getReadOnlyIdHandler)
  .route('/', getRevisionChangesetHandler)
  .route('/', getRevisionsCountHandler)
  .route('/', getSavedRevisionsCountHandler)
  .route('/', getSessionInfoHandler)
  .route('/', getStatsHandler)
  .route('/', getTextHandler)
  .route('/', listAllGroupsHandler)
  .route('/', listAllPadsHandler)
  .route('/', listAuthorsOfPadHandler)
  .route('/', listPadsHandler)
  .route('/', listPadsOfAuthorHandler)
  .route('/', listSavedRevisionsHandler)
  .route('/', listSessionsOfAuthorHandler)
  .route('/', listSessionsOfGroupHandler)
  .route('/', movePadHandler)
  .route('/', padUsersHandler)
  .route('/', padUsersCountHandler)
  .route('/', restoreRevisionHandler)
  .route('/', saveRevisionHandler)
  .route('/', sendClientsMessageHandler)
  .route('/', setHtmlHandler)
  .route('/', setPublicStatusHandler)
  .route('/', setTextHandler)

export default app
