import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsTeams202609TeamIdMembersUserIdRoute,
  deleteSettingsTeams202609TeamIdRoute,
  getSettingsTeams202609Route,
  getSettingsTeams202609TeamIdMembersRoute,
  getSettingsTeams202609TeamIdRoute,
  patchSettingsTeams202609TeamIdRoute,
  postSettingsTeams202609Route,
  postSettingsTeams202609TeamIdMembersBatchRoute,
  postSettingsTeams202609TeamIdMembersRoute,
} from './routes'
import {
  deleteSettingsTeams202609TeamIdMembersUserIdRouteHandler,
  deleteSettingsTeams202609TeamIdRouteHandler,
  getSettingsTeams202609RouteHandler,
  getSettingsTeams202609TeamIdMembersRouteHandler,
  getSettingsTeams202609TeamIdRouteHandler,
  patchSettingsTeams202609TeamIdRouteHandler,
  postSettingsTeams202609RouteHandler,
  postSettingsTeams202609TeamIdMembersBatchRouteHandler,
  postSettingsTeams202609TeamIdMembersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSettingsTeams202609Route, getSettingsTeams202609RouteHandler)
  .openapi(postSettingsTeams202609Route, postSettingsTeams202609RouteHandler)
  .openapi(getSettingsTeams202609TeamIdRoute, getSettingsTeams202609TeamIdRouteHandler)
  .openapi(deleteSettingsTeams202609TeamIdRoute, deleteSettingsTeams202609TeamIdRouteHandler)
  .openapi(patchSettingsTeams202609TeamIdRoute, patchSettingsTeams202609TeamIdRouteHandler)
  .openapi(
    getSettingsTeams202609TeamIdMembersRoute,
    getSettingsTeams202609TeamIdMembersRouteHandler,
  )
  .openapi(
    postSettingsTeams202609TeamIdMembersRoute,
    postSettingsTeams202609TeamIdMembersRouteHandler,
  )
  .openapi(
    postSettingsTeams202609TeamIdMembersBatchRoute,
    postSettingsTeams202609TeamIdMembersBatchRouteHandler,
  )
  .openapi(
    deleteSettingsTeams202609TeamIdMembersUserIdRoute,
    deleteSettingsTeams202609TeamIdMembersUserIdRouteHandler,
  )

export default app
