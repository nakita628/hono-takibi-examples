import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppendChatMessageRoute,
  getAppendTextRoute,
  getCheckTokenRoute,
  getCopyPadRoute,
  getCopyPadWithoutHistoryRoute,
  getCreateAuthorIfNotExistsForRoute,
  getCreateAuthorRoute,
  getCreateDiffHTMLRoute,
  getCreateGroupIfNotExistsForRoute,
  getCreateGroupPadRoute,
  getCreateGroupRoute,
  getCreatePadRoute,
  getCreateSessionRoute,
  getDeleteGroupRoute,
  getDeletePadRoute,
  getDeleteSessionRoute,
  getGetAttributePoolRoute,
  getGetAuthorNameRoute,
  getGetChatHeadRoute,
  getGetChatHistoryRoute,
  getGetHTMLRoute,
  getGetLastEditedRoute,
  getGetPadIDRoute,
  getGetPublicStatusRoute,
  getGetReadOnlyIDRoute,
  getGetRevisionChangesetRoute,
  getGetRevisionsCountRoute,
  getGetSavedRevisionsCountRoute,
  getGetSessionInfoRoute,
  getGetStatsRoute,
  getGetTextRoute,
  getListAllGroupsRoute,
  getListAllPadsRoute,
  getListAuthorsOfPadRoute,
  getListPadsOfAuthorRoute,
  getListPadsRoute,
  getListSavedRevisionsRoute,
  getListSessionsOfAuthorRoute,
  getListSessionsOfGroupRoute,
  getMovePadRoute,
  getPadUsersCountRoute,
  getPadUsersRoute,
  getRestoreRevisionRoute,
  getSaveRevisionRoute,
  getSendClientsMessageRoute,
  getSetHTMLRoute,
  getSetPublicStatusRoute,
  getSetTextRoute,
  postAppendChatMessageRoute,
  postAppendTextRoute,
  postCheckTokenRoute,
  postCopyPadRoute,
  postCopyPadWithoutHistoryRoute,
  postCreateAuthorIfNotExistsForRoute,
  postCreateAuthorRoute,
  postCreateDiffHTMLRoute,
  postCreateGroupIfNotExistsForRoute,
  postCreateGroupPadRoute,
  postCreateGroupRoute,
  postCreatePadRoute,
  postCreateSessionRoute,
  postDeleteGroupRoute,
  postDeletePadRoute,
  postDeleteSessionRoute,
  postGetAttributePoolRoute,
  postGetAuthorNameRoute,
  postGetChatHeadRoute,
  postGetChatHistoryRoute,
  postGetHTMLRoute,
  postGetLastEditedRoute,
  postGetPadIDRoute,
  postGetPublicStatusRoute,
  postGetReadOnlyIDRoute,
  postGetRevisionChangesetRoute,
  postGetRevisionsCountRoute,
  postGetSavedRevisionsCountRoute,
  postGetSessionInfoRoute,
  postGetStatsRoute,
  postGetTextRoute,
  postListAllGroupsRoute,
  postListAllPadsRoute,
  postListAuthorsOfPadRoute,
  postListPadsOfAuthorRoute,
  postListPadsRoute,
  postListSavedRevisionsRoute,
  postListSessionsOfAuthorRoute,
  postListSessionsOfGroupRoute,
  postMovePadRoute,
  postPadUsersCountRoute,
  postPadUsersRoute,
  postRestoreRevisionRoute,
  postSaveRevisionRoute,
  postSendClientsMessageRoute,
  postSetHTMLRoute,
  postSetPublicStatusRoute,
  postSetTextRoute,
} from './routes'
import {
  getAppendChatMessageRouteHandler,
  getAppendTextRouteHandler,
  getCheckTokenRouteHandler,
  getCopyPadRouteHandler,
  getCopyPadWithoutHistoryRouteHandler,
  getCreateAuthorIfNotExistsForRouteHandler,
  getCreateAuthorRouteHandler,
  getCreateDiffHTMLRouteHandler,
  getCreateGroupIfNotExistsForRouteHandler,
  getCreateGroupPadRouteHandler,
  getCreateGroupRouteHandler,
  getCreatePadRouteHandler,
  getCreateSessionRouteHandler,
  getDeleteGroupRouteHandler,
  getDeletePadRouteHandler,
  getDeleteSessionRouteHandler,
  getGetAttributePoolRouteHandler,
  getGetAuthorNameRouteHandler,
  getGetChatHeadRouteHandler,
  getGetChatHistoryRouteHandler,
  getGetHTMLRouteHandler,
  getGetLastEditedRouteHandler,
  getGetPadIDRouteHandler,
  getGetPublicStatusRouteHandler,
  getGetReadOnlyIDRouteHandler,
  getGetRevisionChangesetRouteHandler,
  getGetRevisionsCountRouteHandler,
  getGetSavedRevisionsCountRouteHandler,
  getGetSessionInfoRouteHandler,
  getGetStatsRouteHandler,
  getGetTextRouteHandler,
  getListAllGroupsRouteHandler,
  getListAllPadsRouteHandler,
  getListAuthorsOfPadRouteHandler,
  getListPadsOfAuthorRouteHandler,
  getListPadsRouteHandler,
  getListSavedRevisionsRouteHandler,
  getListSessionsOfAuthorRouteHandler,
  getListSessionsOfGroupRouteHandler,
  getMovePadRouteHandler,
  getPadUsersCountRouteHandler,
  getPadUsersRouteHandler,
  getRestoreRevisionRouteHandler,
  getSaveRevisionRouteHandler,
  getSendClientsMessageRouteHandler,
  getSetHTMLRouteHandler,
  getSetPublicStatusRouteHandler,
  getSetTextRouteHandler,
  postAppendChatMessageRouteHandler,
  postAppendTextRouteHandler,
  postCheckTokenRouteHandler,
  postCopyPadRouteHandler,
  postCopyPadWithoutHistoryRouteHandler,
  postCreateAuthorIfNotExistsForRouteHandler,
  postCreateAuthorRouteHandler,
  postCreateDiffHTMLRouteHandler,
  postCreateGroupIfNotExistsForRouteHandler,
  postCreateGroupPadRouteHandler,
  postCreateGroupRouteHandler,
  postCreatePadRouteHandler,
  postCreateSessionRouteHandler,
  postDeleteGroupRouteHandler,
  postDeletePadRouteHandler,
  postDeleteSessionRouteHandler,
  postGetAttributePoolRouteHandler,
  postGetAuthorNameRouteHandler,
  postGetChatHeadRouteHandler,
  postGetChatHistoryRouteHandler,
  postGetHTMLRouteHandler,
  postGetLastEditedRouteHandler,
  postGetPadIDRouteHandler,
  postGetPublicStatusRouteHandler,
  postGetReadOnlyIDRouteHandler,
  postGetRevisionChangesetRouteHandler,
  postGetRevisionsCountRouteHandler,
  postGetSavedRevisionsCountRouteHandler,
  postGetSessionInfoRouteHandler,
  postGetStatsRouteHandler,
  postGetTextRouteHandler,
  postListAllGroupsRouteHandler,
  postListAllPadsRouteHandler,
  postListAuthorsOfPadRouteHandler,
  postListPadsOfAuthorRouteHandler,
  postListPadsRouteHandler,
  postListSavedRevisionsRouteHandler,
  postListSessionsOfAuthorRouteHandler,
  postListSessionsOfGroupRouteHandler,
  postMovePadRouteHandler,
  postPadUsersCountRouteHandler,
  postPadUsersRouteHandler,
  postRestoreRevisionRouteHandler,
  postSaveRevisionRouteHandler,
  postSendClientsMessageRouteHandler,
  postSetHTMLRouteHandler,
  postSetPublicStatusRouteHandler,
  postSetTextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppendChatMessageRoute, getAppendChatMessageRouteHandler)
  .openapi(postAppendChatMessageRoute, postAppendChatMessageRouteHandler)
  .openapi(getAppendTextRoute, getAppendTextRouteHandler)
  .openapi(postAppendTextRoute, postAppendTextRouteHandler)
  .openapi(getCheckTokenRoute, getCheckTokenRouteHandler)
  .openapi(postCheckTokenRoute, postCheckTokenRouteHandler)
  .openapi(getCopyPadRoute, getCopyPadRouteHandler)
  .openapi(postCopyPadRoute, postCopyPadRouteHandler)
  .openapi(getCopyPadWithoutHistoryRoute, getCopyPadWithoutHistoryRouteHandler)
  .openapi(postCopyPadWithoutHistoryRoute, postCopyPadWithoutHistoryRouteHandler)
  .openapi(getCreateAuthorRoute, getCreateAuthorRouteHandler)
  .openapi(postCreateAuthorRoute, postCreateAuthorRouteHandler)
  .openapi(getCreateAuthorIfNotExistsForRoute, getCreateAuthorIfNotExistsForRouteHandler)
  .openapi(postCreateAuthorIfNotExistsForRoute, postCreateAuthorIfNotExistsForRouteHandler)
  .openapi(getCreateDiffHTMLRoute, getCreateDiffHTMLRouteHandler)
  .openapi(postCreateDiffHTMLRoute, postCreateDiffHTMLRouteHandler)
  .openapi(getCreateGroupRoute, getCreateGroupRouteHandler)
  .openapi(postCreateGroupRoute, postCreateGroupRouteHandler)
  .openapi(getCreateGroupIfNotExistsForRoute, getCreateGroupIfNotExistsForRouteHandler)
  .openapi(postCreateGroupIfNotExistsForRoute, postCreateGroupIfNotExistsForRouteHandler)
  .openapi(getCreateGroupPadRoute, getCreateGroupPadRouteHandler)
  .openapi(postCreateGroupPadRoute, postCreateGroupPadRouteHandler)
  .openapi(getCreatePadRoute, getCreatePadRouteHandler)
  .openapi(postCreatePadRoute, postCreatePadRouteHandler)
  .openapi(getCreateSessionRoute, getCreateSessionRouteHandler)
  .openapi(postCreateSessionRoute, postCreateSessionRouteHandler)
  .openapi(getDeleteGroupRoute, getDeleteGroupRouteHandler)
  .openapi(postDeleteGroupRoute, postDeleteGroupRouteHandler)
  .openapi(getDeletePadRoute, getDeletePadRouteHandler)
  .openapi(postDeletePadRoute, postDeletePadRouteHandler)
  .openapi(getDeleteSessionRoute, getDeleteSessionRouteHandler)
  .openapi(postDeleteSessionRoute, postDeleteSessionRouteHandler)
  .openapi(getGetAttributePoolRoute, getGetAttributePoolRouteHandler)
  .openapi(postGetAttributePoolRoute, postGetAttributePoolRouteHandler)
  .openapi(getGetAuthorNameRoute, getGetAuthorNameRouteHandler)
  .openapi(postGetAuthorNameRoute, postGetAuthorNameRouteHandler)
  .openapi(getGetChatHeadRoute, getGetChatHeadRouteHandler)
  .openapi(postGetChatHeadRoute, postGetChatHeadRouteHandler)
  .openapi(getGetChatHistoryRoute, getGetChatHistoryRouteHandler)
  .openapi(postGetChatHistoryRoute, postGetChatHistoryRouteHandler)
  .openapi(getGetHTMLRoute, getGetHTMLRouteHandler)
  .openapi(postGetHTMLRoute, postGetHTMLRouteHandler)
  .openapi(getGetLastEditedRoute, getGetLastEditedRouteHandler)
  .openapi(postGetLastEditedRoute, postGetLastEditedRouteHandler)
  .openapi(getGetPadIDRoute, getGetPadIDRouteHandler)
  .openapi(postGetPadIDRoute, postGetPadIDRouteHandler)
  .openapi(getGetPublicStatusRoute, getGetPublicStatusRouteHandler)
  .openapi(postGetPublicStatusRoute, postGetPublicStatusRouteHandler)
  .openapi(getGetReadOnlyIDRoute, getGetReadOnlyIDRouteHandler)
  .openapi(postGetReadOnlyIDRoute, postGetReadOnlyIDRouteHandler)
  .openapi(getGetRevisionChangesetRoute, getGetRevisionChangesetRouteHandler)
  .openapi(postGetRevisionChangesetRoute, postGetRevisionChangesetRouteHandler)
  .openapi(getGetRevisionsCountRoute, getGetRevisionsCountRouteHandler)
  .openapi(postGetRevisionsCountRoute, postGetRevisionsCountRouteHandler)
  .openapi(getGetSavedRevisionsCountRoute, getGetSavedRevisionsCountRouteHandler)
  .openapi(postGetSavedRevisionsCountRoute, postGetSavedRevisionsCountRouteHandler)
  .openapi(getGetSessionInfoRoute, getGetSessionInfoRouteHandler)
  .openapi(postGetSessionInfoRoute, postGetSessionInfoRouteHandler)
  .openapi(getGetStatsRoute, getGetStatsRouteHandler)
  .openapi(postGetStatsRoute, postGetStatsRouteHandler)
  .openapi(getGetTextRoute, getGetTextRouteHandler)
  .openapi(postGetTextRoute, postGetTextRouteHandler)
  .openapi(getListAllGroupsRoute, getListAllGroupsRouteHandler)
  .openapi(postListAllGroupsRoute, postListAllGroupsRouteHandler)
  .openapi(getListAllPadsRoute, getListAllPadsRouteHandler)
  .openapi(postListAllPadsRoute, postListAllPadsRouteHandler)
  .openapi(getListAuthorsOfPadRoute, getListAuthorsOfPadRouteHandler)
  .openapi(postListAuthorsOfPadRoute, postListAuthorsOfPadRouteHandler)
  .openapi(getListPadsRoute, getListPadsRouteHandler)
  .openapi(postListPadsRoute, postListPadsRouteHandler)
  .openapi(getListPadsOfAuthorRoute, getListPadsOfAuthorRouteHandler)
  .openapi(postListPadsOfAuthorRoute, postListPadsOfAuthorRouteHandler)
  .openapi(getListSavedRevisionsRoute, getListSavedRevisionsRouteHandler)
  .openapi(postListSavedRevisionsRoute, postListSavedRevisionsRouteHandler)
  .openapi(getListSessionsOfAuthorRoute, getListSessionsOfAuthorRouteHandler)
  .openapi(postListSessionsOfAuthorRoute, postListSessionsOfAuthorRouteHandler)
  .openapi(getListSessionsOfGroupRoute, getListSessionsOfGroupRouteHandler)
  .openapi(postListSessionsOfGroupRoute, postListSessionsOfGroupRouteHandler)
  .openapi(getMovePadRoute, getMovePadRouteHandler)
  .openapi(postMovePadRoute, postMovePadRouteHandler)
  .openapi(getPadUsersRoute, getPadUsersRouteHandler)
  .openapi(postPadUsersRoute, postPadUsersRouteHandler)
  .openapi(getPadUsersCountRoute, getPadUsersCountRouteHandler)
  .openapi(postPadUsersCountRoute, postPadUsersCountRouteHandler)
  .openapi(getRestoreRevisionRoute, getRestoreRevisionRouteHandler)
  .openapi(postRestoreRevisionRoute, postRestoreRevisionRouteHandler)
  .openapi(getSaveRevisionRoute, getSaveRevisionRouteHandler)
  .openapi(postSaveRevisionRoute, postSaveRevisionRouteHandler)
  .openapi(getSendClientsMessageRoute, getSendClientsMessageRouteHandler)
  .openapi(postSendClientsMessageRoute, postSendClientsMessageRouteHandler)
  .openapi(getSetHTMLRoute, getSetHTMLRouteHandler)
  .openapi(postSetHTMLRoute, postSetHTMLRouteHandler)
  .openapi(getSetPublicStatusRoute, getSetPublicStatusRouteHandler)
  .openapi(postSetPublicStatusRoute, postSetPublicStatusRouteHandler)
  .openapi(getSetTextRoute, getSetTextRouteHandler)
  .openapi(postSetTextRoute, postSetTextRouteHandler)

export default app
