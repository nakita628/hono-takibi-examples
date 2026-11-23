import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
  deleteWorkspaceSlugMembersMemberSlugIdentitiesRoute,
  deleteWorkspaceSlugMembersMemberSlugRoute,
  deleteWorkspaceSlugWebhooksIdRoute,
  getUserRoute,
  getWorkspaceSlugActivitiesIdRoute,
  getWorkspaceSlugActivitiesRoute,
  getWorkspaceSlugActivityTypesRoute,
  getWorkspaceSlugMembersFindRoute,
  getWorkspaceSlugMembersMemberSlugActivitiesRoute,
  getWorkspaceSlugMembersMemberSlugNotesRoute,
  getWorkspaceSlugMembersMemberSlugRoute,
  getWorkspaceSlugMembersRoute,
  getWorkspaceSlugOrganizationsOrganizationIdActivitiesRoute,
  getWorkspaceSlugOrganizationsOrganizationIdMembersRoute,
  getWorkspaceSlugOrganizationsOrganizationIdRoute,
  getWorkspaceSlugOrganizationsRoute,
  getWorkspaceSlugReportsRoute,
  getWorkspaceSlugWebhooksIdRoute,
  getWorkspaceSlugWebhooksRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceSlugRoute,
  postWorkspaceSlugActivitiesRoute,
  postWorkspaceSlugMembersMemberSlugActivitiesRoute,
  postWorkspaceSlugMembersMemberSlugIdentitiesRoute,
  postWorkspaceSlugMembersMemberSlugNotesRoute,
  postWorkspaceSlugMembersRoute,
  postWorkspaceSlugWebhooksRoute,
  putWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
  putWorkspaceSlugMembersMemberSlugNotesIdRoute,
  putWorkspaceSlugMembersMemberSlugRoute,
  putWorkspaceSlugOrganizationsOrganizationIdRoute,
  putWorkspaceSlugWebhooksIdRoute,
} from './routes'
import {
  deleteWorkspaceSlugMembersMemberSlugActivitiesIdRouteHandler,
  deleteWorkspaceSlugMembersMemberSlugIdentitiesRouteHandler,
  deleteWorkspaceSlugMembersMemberSlugRouteHandler,
  deleteWorkspaceSlugWebhooksIdRouteHandler,
  getUserRouteHandler,
  getWorkspaceSlugActivitiesIdRouteHandler,
  getWorkspaceSlugActivitiesRouteHandler,
  getWorkspaceSlugActivityTypesRouteHandler,
  getWorkspaceSlugMembersFindRouteHandler,
  getWorkspaceSlugMembersMemberSlugActivitiesRouteHandler,
  getWorkspaceSlugMembersMemberSlugNotesRouteHandler,
  getWorkspaceSlugMembersMemberSlugRouteHandler,
  getWorkspaceSlugMembersRouteHandler,
  getWorkspaceSlugOrganizationsOrganizationIdActivitiesRouteHandler,
  getWorkspaceSlugOrganizationsOrganizationIdMembersRouteHandler,
  getWorkspaceSlugOrganizationsOrganizationIdRouteHandler,
  getWorkspaceSlugOrganizationsRouteHandler,
  getWorkspaceSlugReportsRouteHandler,
  getWorkspaceSlugWebhooksIdRouteHandler,
  getWorkspaceSlugWebhooksRouteHandler,
  getWorkspacesRouteHandler,
  getWorkspacesWorkspaceSlugRouteHandler,
  postWorkspaceSlugActivitiesRouteHandler,
  postWorkspaceSlugMembersMemberSlugActivitiesRouteHandler,
  postWorkspaceSlugMembersMemberSlugIdentitiesRouteHandler,
  postWorkspaceSlugMembersMemberSlugNotesRouteHandler,
  postWorkspaceSlugMembersRouteHandler,
  postWorkspaceSlugWebhooksRouteHandler,
  putWorkspaceSlugMembersMemberSlugActivitiesIdRouteHandler,
  putWorkspaceSlugMembersMemberSlugNotesIdRouteHandler,
  putWorkspaceSlugMembersMemberSlugRouteHandler,
  putWorkspaceSlugOrganizationsOrganizationIdRouteHandler,
  putWorkspaceSlugWebhooksIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(getWorkspacesRoute, getWorkspacesRouteHandler)
  .openapi(getWorkspacesWorkspaceSlugRoute, getWorkspacesWorkspaceSlugRouteHandler)
  .openapi(getWorkspaceSlugActivitiesRoute, getWorkspaceSlugActivitiesRouteHandler)
  .openapi(postWorkspaceSlugActivitiesRoute, postWorkspaceSlugActivitiesRouteHandler)
  .openapi(getWorkspaceSlugActivitiesIdRoute, getWorkspaceSlugActivitiesIdRouteHandler)
  .openapi(getWorkspaceSlugActivityTypesRoute, getWorkspaceSlugActivityTypesRouteHandler)
  .openapi(getWorkspaceSlugMembersRoute, getWorkspaceSlugMembersRouteHandler)
  .openapi(postWorkspaceSlugMembersRoute, postWorkspaceSlugMembersRouteHandler)
  .openapi(getWorkspaceSlugMembersFindRoute, getWorkspaceSlugMembersFindRouteHandler)
  .openapi(
    deleteWorkspaceSlugMembersMemberSlugRoute,
    deleteWorkspaceSlugMembersMemberSlugRouteHandler,
  )
  .openapi(getWorkspaceSlugMembersMemberSlugRoute, getWorkspaceSlugMembersMemberSlugRouteHandler)
  .openapi(putWorkspaceSlugMembersMemberSlugRoute, putWorkspaceSlugMembersMemberSlugRouteHandler)
  .openapi(
    getWorkspaceSlugMembersMemberSlugActivitiesRoute,
    getWorkspaceSlugMembersMemberSlugActivitiesRouteHandler,
  )
  .openapi(
    postWorkspaceSlugMembersMemberSlugActivitiesRoute,
    postWorkspaceSlugMembersMemberSlugActivitiesRouteHandler,
  )
  .openapi(
    deleteWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
    deleteWorkspaceSlugMembersMemberSlugActivitiesIdRouteHandler,
  )
  .openapi(
    putWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
    putWorkspaceSlugMembersMemberSlugActivitiesIdRouteHandler,
  )
  .openapi(
    deleteWorkspaceSlugMembersMemberSlugIdentitiesRoute,
    deleteWorkspaceSlugMembersMemberSlugIdentitiesRouteHandler,
  )
  .openapi(
    postWorkspaceSlugMembersMemberSlugIdentitiesRoute,
    postWorkspaceSlugMembersMemberSlugIdentitiesRouteHandler,
  )
  .openapi(
    getWorkspaceSlugMembersMemberSlugNotesRoute,
    getWorkspaceSlugMembersMemberSlugNotesRouteHandler,
  )
  .openapi(
    postWorkspaceSlugMembersMemberSlugNotesRoute,
    postWorkspaceSlugMembersMemberSlugNotesRouteHandler,
  )
  .openapi(
    putWorkspaceSlugMembersMemberSlugNotesIdRoute,
    putWorkspaceSlugMembersMemberSlugNotesIdRouteHandler,
  )
  .openapi(getWorkspaceSlugOrganizationsRoute, getWorkspaceSlugOrganizationsRouteHandler)
  .openapi(
    getWorkspaceSlugOrganizationsOrganizationIdRoute,
    getWorkspaceSlugOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    putWorkspaceSlugOrganizationsOrganizationIdRoute,
    putWorkspaceSlugOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    getWorkspaceSlugOrganizationsOrganizationIdActivitiesRoute,
    getWorkspaceSlugOrganizationsOrganizationIdActivitiesRouteHandler,
  )
  .openapi(
    getWorkspaceSlugOrganizationsOrganizationIdMembersRoute,
    getWorkspaceSlugOrganizationsOrganizationIdMembersRouteHandler,
  )
  .openapi(getWorkspaceSlugReportsRoute, getWorkspaceSlugReportsRouteHandler)
  .openapi(getWorkspaceSlugWebhooksRoute, getWorkspaceSlugWebhooksRouteHandler)
  .openapi(postWorkspaceSlugWebhooksRoute, postWorkspaceSlugWebhooksRouteHandler)
  .openapi(deleteWorkspaceSlugWebhooksIdRoute, deleteWorkspaceSlugWebhooksIdRouteHandler)
  .openapi(getWorkspaceSlugWebhooksIdRoute, getWorkspaceSlugWebhooksIdRouteHandler)
  .openapi(putWorkspaceSlugWebhooksIdRoute, putWorkspaceSlugWebhooksIdRouteHandler)

export default app
