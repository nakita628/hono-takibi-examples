import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsRoute,
  deleteUsersRoute,
  getEventsRoute,
  getPropertiesAccountsRoute,
  getPropertiesUsersRoute,
  getSegmentsAccountsRoute,
  getSegmentsUsersRoute,
  getTrackingSnippetRoute,
  getValidateRoute,
  postAccountsUpsertRoute,
  postAccountsUsersAddRoute,
  postAccountsUsersRemoveRoute,
  postEventsRoute,
  postLinkRoute,
  postTrackRoute,
  postUsersUpsertRoute,
} from './routes'
import {
  deleteAccountsRouteHandler,
  deleteUsersRouteHandler,
  getEventsRouteHandler,
  getPropertiesAccountsRouteHandler,
  getPropertiesUsersRouteHandler,
  getSegmentsAccountsRouteHandler,
  getSegmentsUsersRouteHandler,
  getTrackingSnippetRouteHandler,
  getValidateRouteHandler,
  postAccountsUpsertRouteHandler,
  postAccountsUsersAddRouteHandler,
  postAccountsUsersRemoveRouteHandler,
  postEventsRouteHandler,
  postLinkRouteHandler,
  postTrackRouteHandler,
  postUsersUpsertRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteAccountsRoute, deleteAccountsRouteHandler)
  .openapi(postAccountsUpsertRoute, postAccountsUpsertRouteHandler)
  .openapi(postAccountsUsersAddRoute, postAccountsUsersAddRouteHandler)
  .openapi(postAccountsUsersRemoveRoute, postAccountsUsersRemoveRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(postEventsRoute, postEventsRouteHandler)
  .openapi(postLinkRoute, postLinkRouteHandler)
  .openapi(getPropertiesAccountsRoute, getPropertiesAccountsRouteHandler)
  .openapi(getPropertiesUsersRoute, getPropertiesUsersRouteHandler)
  .openapi(getSegmentsAccountsRoute, getSegmentsAccountsRouteHandler)
  .openapi(getSegmentsUsersRoute, getSegmentsUsersRouteHandler)
  .openapi(postTrackRoute, postTrackRouteHandler)
  .openapi(getTrackingSnippetRoute, getTrackingSnippetRouteHandler)
  .openapi(deleteUsersRoute, deleteUsersRouteHandler)
  .openapi(postUsersUpsertRoute, postUsersUpsertRouteHandler)
  .openapi(getValidateRoute, getValidateRouteHandler)

export default app
