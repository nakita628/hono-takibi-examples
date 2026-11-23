import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdCollaboratorsStoryCollaboratorUseridRoute,
  deleteIdFileOoxmlAutomationIdRoute,
  deleteIdRoute,
  deleteSessionsSessionIdRoute,
  deleteViewsViewIdRoute,
  getCacheNonceRoute,
  getEnvironmentIndexRoute,
  getIdAnalyticsRoute,
  getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRoute,
  getIdCollaboratorsRoute,
  getIdCollaboratorsStoryCollaboratorUseridRoute,
  getIdEventsRoute,
  getIdFileOoxmlAutomationIdRoute,
  getIdMessagesRoute,
  getIdOutlineRoute,
  getIdPublicIndexRoute,
  getIdRevealRoute,
  getIdRoute,
  getIdSessionsRoute,
  getIdStatusRoute,
  getNoTagsSpecRoute,
  getOutlineSchemaSchemaVersionStoryOutlineJsonRoute,
  getPermissionTypesRoute,
  getRoute,
  getSessionsSessionIdRoute,
  getSessionsSessionIdViewsRoute,
  getViewsViewIdRoute,
  postCacheRoute,
  postCollaboratorsRoute,
  postFileJsonRoute,
  postFileRoute,
  postIdCollaboratorsInactiveRoute,
  postIdCollaboratorsRoute,
  postIdEventsRoute,
  postIdFileRoute,
  postIdMessagesRoute,
  postIdOutlineRoute,
  postIdSessionsRoute,
  postRoute,
  postSessionsSessionIdViewsRoute,
  putIdCollaboratorsStoryCollaboratorUseridRoute,
  putIdRoute,
} from './routes'
import {
  deleteIdCollaboratorsStoryCollaboratorUseridRouteHandler,
  deleteIdFileOoxmlAutomationIdRouteHandler,
  deleteIdRouteHandler,
  deleteSessionsSessionIdRouteHandler,
  deleteViewsViewIdRouteHandler,
  getCacheNonceRouteHandler,
  getEnvironmentIndexRouteHandler,
  getIdAnalyticsRouteHandler,
  getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRouteHandler,
  getIdCollaboratorsRouteHandler,
  getIdCollaboratorsStoryCollaboratorUseridRouteHandler,
  getIdEventsRouteHandler,
  getIdFileOoxmlAutomationIdRouteHandler,
  getIdMessagesRouteHandler,
  getIdOutlineRouteHandler,
  getIdPublicIndexRouteHandler,
  getIdRevealRouteHandler,
  getIdRouteHandler,
  getIdSessionsRouteHandler,
  getIdStatusRouteHandler,
  getNoTagsSpecRouteHandler,
  getOutlineSchemaSchemaVersionStoryOutlineJsonRouteHandler,
  getPermissionTypesRouteHandler,
  getRouteHandler,
  getSessionsSessionIdRouteHandler,
  getSessionsSessionIdViewsRouteHandler,
  getViewsViewIdRouteHandler,
  postCacheRouteHandler,
  postCollaboratorsRouteHandler,
  postFileJsonRouteHandler,
  postFileRouteHandler,
  postIdCollaboratorsInactiveRouteHandler,
  postIdCollaboratorsRouteHandler,
  postIdEventsRouteHandler,
  postIdFileRouteHandler,
  postIdMessagesRouteHandler,
  postIdOutlineRouteHandler,
  postIdSessionsRouteHandler,
  postRouteHandler,
  postSessionsSessionIdViewsRouteHandler,
  putIdCollaboratorsStoryCollaboratorUseridRouteHandler,
  putIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postRoute, postRouteHandler)
  .openapi(postCacheRoute, postCacheRouteHandler)
  .openapi(getCacheNonceRoute, getCacheNonceRouteHandler)
  .openapi(postCollaboratorsRoute, postCollaboratorsRouteHandler)
  .openapi(getEnvironmentIndexRoute, getEnvironmentIndexRouteHandler)
  .openapi(postFileRoute, postFileRouteHandler)
  .openapi(postFileJsonRoute, postFileJsonRouteHandler)
  .openapi(getNoTagsSpecRoute, getNoTagsSpecRouteHandler)
  .openapi(
    getOutlineSchemaSchemaVersionStoryOutlineJsonRoute,
    getOutlineSchemaSchemaVersionStoryOutlineJsonRouteHandler,
  )
  .openapi(getPermissionTypesRoute, getPermissionTypesRouteHandler)
  .openapi(deleteSessionsSessionIdRoute, deleteSessionsSessionIdRouteHandler)
  .openapi(getSessionsSessionIdRoute, getSessionsSessionIdRouteHandler)
  .openapi(getSessionsSessionIdViewsRoute, getSessionsSessionIdViewsRouteHandler)
  .openapi(postSessionsSessionIdViewsRoute, postSessionsSessionIdViewsRouteHandler)
  .openapi(deleteViewsViewIdRoute, deleteViewsViewIdRouteHandler)
  .openapi(getViewsViewIdRoute, getViewsViewIdRouteHandler)
  .openapi(deleteIdRoute, deleteIdRouteHandler)
  .openapi(getIdRoute, getIdRouteHandler)
  .openapi(putIdRoute, putIdRouteHandler)
  .openapi(getIdAnalyticsRoute, getIdAnalyticsRouteHandler)
  .openapi(getIdCollaboratorsRoute, getIdCollaboratorsRouteHandler)
  .openapi(postIdCollaboratorsRoute, postIdCollaboratorsRouteHandler)
  .openapi(
    getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRoute,
    getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRouteHandler,
  )
  .openapi(postIdCollaboratorsInactiveRoute, postIdCollaboratorsInactiveRouteHandler)
  .openapi(
    deleteIdCollaboratorsStoryCollaboratorUseridRoute,
    deleteIdCollaboratorsStoryCollaboratorUseridRouteHandler,
  )
  .openapi(
    getIdCollaboratorsStoryCollaboratorUseridRoute,
    getIdCollaboratorsStoryCollaboratorUseridRouteHandler,
  )
  .openapi(
    putIdCollaboratorsStoryCollaboratorUseridRoute,
    putIdCollaboratorsStoryCollaboratorUseridRouteHandler,
  )
  .openapi(getIdEventsRoute, getIdEventsRouteHandler)
  .openapi(postIdEventsRoute, postIdEventsRouteHandler)
  .openapi(postIdFileRoute, postIdFileRouteHandler)
  .openapi(deleteIdFileOoxmlAutomationIdRoute, deleteIdFileOoxmlAutomationIdRouteHandler)
  .openapi(getIdFileOoxmlAutomationIdRoute, getIdFileOoxmlAutomationIdRouteHandler)
  .openapi(getIdMessagesRoute, getIdMessagesRouteHandler)
  .openapi(postIdMessagesRoute, postIdMessagesRouteHandler)
  .openapi(getIdOutlineRoute, getIdOutlineRouteHandler)
  .openapi(postIdOutlineRoute, postIdOutlineRouteHandler)
  .openapi(getIdPublicIndexRoute, getIdPublicIndexRouteHandler)
  .openapi(getIdRevealRoute, getIdRevealRouteHandler)
  .openapi(getIdSessionsRoute, getIdSessionsRouteHandler)
  .openapi(postIdSessionsRoute, postIdSessionsRouteHandler)
  .openapi(getIdStatusRoute, getIdStatusRouteHandler)

export default app
