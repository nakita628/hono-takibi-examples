import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRoute,
  deleteTenantIDApplicationsApplicationObjectIdRoute,
  deleteTenantIDDeletedApplicationsApplicationObjectIdRoute,
  deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRoute,
  deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRoute,
  deleteTenantIDGroupsObjectIdRoute,
  deleteTenantIDOauth2PermissionGrantsObjectIdRoute,
  deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRoute,
  deleteTenantIDServicePrincipalsObjectIdRoute,
  deleteTenantIDUsersUpnOrObjectIdRoute,
  getTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute,
  getTenantIDApplicationsApplicationObjectIdOwnersRoute,
  getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute,
  getTenantIDApplicationsApplicationObjectIdRoute,
  getTenantIDApplicationsRoute,
  getTenantIDDeletedApplicationsRoute,
  getTenantIDDomainsDomainNameRoute,
  getTenantIDDomainsRoute,
  getTenantIDGroupsObjectIdMembersRoute,
  getTenantIDGroupsObjectIdOwnersRoute,
  getTenantIDGroupsObjectIdRoute,
  getTenantIDGroupsRoute,
  getTenantIDMeOwnedObjectsRoute,
  getTenantIDMeRoute,
  getTenantIDOauth2PermissionGrantsRoute,
  getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRoute,
  getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRoute,
  getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRoute,
  getTenantIDServicePrincipalsObjectIdKeyCredentialsRoute,
  getTenantIDServicePrincipalsObjectIdOwnersRoute,
  getTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute,
  getTenantIDServicePrincipalsObjectIdRoute,
  getTenantIDServicePrincipalsRoute,
  getTenantIDUsersRoute,
  getTenantIDUsersUpnOrObjectIdRoute,
  patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute,
  patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute,
  patchTenantIDApplicationsApplicationObjectIdRoute,
  patchTenantIDServicePrincipalsObjectIdKeyCredentialsRoute,
  patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute,
  patchTenantIDServicePrincipalsObjectIdRoute,
  patchTenantIDUsersUpnOrObjectIdRoute,
  postTenantIDApplicationsApplicationObjectIdLinksOwnersRoute,
  postTenantIDApplicationsRoute,
  postTenantIDDeletedApplicationsObjectIdRestoreRoute,
  postTenantIDGetObjectsByObjectIdsRoute,
  postTenantIDGroupsGroupObjectIdLinksMembersRoute,
  postTenantIDGroupsObjectIdGetMemberGroupsRoute,
  postTenantIDGroupsObjectIdLinksOwnersRoute,
  postTenantIDGroupsRoute,
  postTenantIDIsMemberOfRoute,
  postTenantIDOauth2PermissionGrantsRoute,
  postTenantIDServicePrincipalsObjectIdLinksOwnersRoute,
  postTenantIDServicePrincipalsRoute,
  postTenantIDUsersObjectIdGetMemberGroupsRoute,
  postTenantIDUsersRoute,
} from './routes'
import {
  deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRouteHandler,
  deleteTenantIDApplicationsApplicationObjectIdRouteHandler,
  deleteTenantIDDeletedApplicationsApplicationObjectIdRouteHandler,
  deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRouteHandler,
  deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRouteHandler,
  deleteTenantIDGroupsObjectIdRouteHandler,
  deleteTenantIDOauth2PermissionGrantsObjectIdRouteHandler,
  deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRouteHandler,
  deleteTenantIDServicePrincipalsObjectIdRouteHandler,
  deleteTenantIDUsersUpnOrObjectIdRouteHandler,
  getTenantIDApplicationsApplicationObjectIdKeyCredentialsRouteHandler,
  getTenantIDApplicationsApplicationObjectIdOwnersRouteHandler,
  getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRouteHandler,
  getTenantIDApplicationsApplicationObjectIdRouteHandler,
  getTenantIDApplicationsRouteHandler,
  getTenantIDDeletedApplicationsRouteHandler,
  getTenantIDDomainsDomainNameRouteHandler,
  getTenantIDDomainsRouteHandler,
  getTenantIDGroupsObjectIdMembersRouteHandler,
  getTenantIDGroupsObjectIdOwnersRouteHandler,
  getTenantIDGroupsObjectIdRouteHandler,
  getTenantIDGroupsRouteHandler,
  getTenantIDMeOwnedObjectsRouteHandler,
  getTenantIDMeRouteHandler,
  getTenantIDOauth2PermissionGrantsRouteHandler,
  getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRouteHandler,
  getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRouteHandler,
  getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRouteHandler,
  getTenantIDServicePrincipalsObjectIdKeyCredentialsRouteHandler,
  getTenantIDServicePrincipalsObjectIdOwnersRouteHandler,
  getTenantIDServicePrincipalsObjectIdPasswordCredentialsRouteHandler,
  getTenantIDServicePrincipalsObjectIdRouteHandler,
  getTenantIDServicePrincipalsRouteHandler,
  getTenantIDUsersRouteHandler,
  getTenantIDUsersUpnOrObjectIdRouteHandler,
  patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRouteHandler,
  patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRouteHandler,
  patchTenantIDApplicationsApplicationObjectIdRouteHandler,
  patchTenantIDServicePrincipalsObjectIdKeyCredentialsRouteHandler,
  patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRouteHandler,
  patchTenantIDServicePrincipalsObjectIdRouteHandler,
  patchTenantIDUsersUpnOrObjectIdRouteHandler,
  postTenantIDApplicationsApplicationObjectIdLinksOwnersRouteHandler,
  postTenantIDApplicationsRouteHandler,
  postTenantIDDeletedApplicationsObjectIdRestoreRouteHandler,
  postTenantIDGetObjectsByObjectIdsRouteHandler,
  postTenantIDGroupsGroupObjectIdLinksMembersRouteHandler,
  postTenantIDGroupsObjectIdGetMemberGroupsRouteHandler,
  postTenantIDGroupsObjectIdLinksOwnersRouteHandler,
  postTenantIDGroupsRouteHandler,
  postTenantIDIsMemberOfRouteHandler,
  postTenantIDOauth2PermissionGrantsRouteHandler,
  postTenantIDServicePrincipalsObjectIdLinksOwnersRouteHandler,
  postTenantIDServicePrincipalsRouteHandler,
  postTenantIDUsersObjectIdGetMemberGroupsRouteHandler,
  postTenantIDUsersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTenantIDApplicationsRoute, getTenantIDApplicationsRouteHandler)
  .openapi(postTenantIDApplicationsRoute, postTenantIDApplicationsRouteHandler)
  .openapi(
    deleteTenantIDApplicationsApplicationObjectIdRoute,
    deleteTenantIDApplicationsApplicationObjectIdRouteHandler,
  )
  .openapi(
    getTenantIDApplicationsApplicationObjectIdRoute,
    getTenantIDApplicationsApplicationObjectIdRouteHandler,
  )
  .openapi(
    patchTenantIDApplicationsApplicationObjectIdRoute,
    patchTenantIDApplicationsApplicationObjectIdRouteHandler,
  )
  .openapi(
    postTenantIDApplicationsApplicationObjectIdLinksOwnersRoute,
    postTenantIDApplicationsApplicationObjectIdLinksOwnersRouteHandler,
  )
  .openapi(
    deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRoute,
    deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRouteHandler,
  )
  .openapi(
    getTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute,
    getTenantIDApplicationsApplicationObjectIdKeyCredentialsRouteHandler,
  )
  .openapi(
    patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute,
    patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRouteHandler,
  )
  .openapi(
    getTenantIDApplicationsApplicationObjectIdOwnersRoute,
    getTenantIDApplicationsApplicationObjectIdOwnersRouteHandler,
  )
  .openapi(
    getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute,
    getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRouteHandler,
  )
  .openapi(
    patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute,
    patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRouteHandler,
  )
  .openapi(getTenantIDDeletedApplicationsRoute, getTenantIDDeletedApplicationsRouteHandler)
  .openapi(
    deleteTenantIDDeletedApplicationsApplicationObjectIdRoute,
    deleteTenantIDDeletedApplicationsApplicationObjectIdRouteHandler,
  )
  .openapi(
    postTenantIDDeletedApplicationsObjectIdRestoreRoute,
    postTenantIDDeletedApplicationsObjectIdRestoreRouteHandler,
  )
  .openapi(getTenantIDDomainsRoute, getTenantIDDomainsRouteHandler)
  .openapi(getTenantIDDomainsDomainNameRoute, getTenantIDDomainsDomainNameRouteHandler)
  .openapi(postTenantIDGetObjectsByObjectIdsRoute, postTenantIDGetObjectsByObjectIdsRouteHandler)
  .openapi(getTenantIDGroupsRoute, getTenantIDGroupsRouteHandler)
  .openapi(postTenantIDGroupsRoute, postTenantIDGroupsRouteHandler)
  .openapi(
    postTenantIDGroupsGroupObjectIdLinksMembersRoute,
    postTenantIDGroupsGroupObjectIdLinksMembersRouteHandler,
  )
  .openapi(
    deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRoute,
    deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRouteHandler,
  )
  .openapi(deleteTenantIDGroupsObjectIdRoute, deleteTenantIDGroupsObjectIdRouteHandler)
  .openapi(getTenantIDGroupsObjectIdRoute, getTenantIDGroupsObjectIdRouteHandler)
  .openapi(
    postTenantIDGroupsObjectIdLinksOwnersRoute,
    postTenantIDGroupsObjectIdLinksOwnersRouteHandler,
  )
  .openapi(
    deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRoute,
    deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRouteHandler,
  )
  .openapi(
    postTenantIDGroupsObjectIdGetMemberGroupsRoute,
    postTenantIDGroupsObjectIdGetMemberGroupsRouteHandler,
  )
  .openapi(getTenantIDGroupsObjectIdMembersRoute, getTenantIDGroupsObjectIdMembersRouteHandler)
  .openapi(getTenantIDGroupsObjectIdOwnersRoute, getTenantIDGroupsObjectIdOwnersRouteHandler)
  .openapi(postTenantIDIsMemberOfRoute, postTenantIDIsMemberOfRouteHandler)
  .openapi(getTenantIDMeRoute, getTenantIDMeRouteHandler)
  .openapi(getTenantIDMeOwnedObjectsRoute, getTenantIDMeOwnedObjectsRouteHandler)
  .openapi(getTenantIDOauth2PermissionGrantsRoute, getTenantIDOauth2PermissionGrantsRouteHandler)
  .openapi(postTenantIDOauth2PermissionGrantsRoute, postTenantIDOauth2PermissionGrantsRouteHandler)
  .openapi(
    deleteTenantIDOauth2PermissionGrantsObjectIdRoute,
    deleteTenantIDOauth2PermissionGrantsObjectIdRouteHandler,
  )
  .openapi(getTenantIDServicePrincipalsRoute, getTenantIDServicePrincipalsRouteHandler)
  .openapi(postTenantIDServicePrincipalsRoute, postTenantIDServicePrincipalsRouteHandler)
  .openapi(
    deleteTenantIDServicePrincipalsObjectIdRoute,
    deleteTenantIDServicePrincipalsObjectIdRouteHandler,
  )
  .openapi(
    getTenantIDServicePrincipalsObjectIdRoute,
    getTenantIDServicePrincipalsObjectIdRouteHandler,
  )
  .openapi(
    patchTenantIDServicePrincipalsObjectIdRoute,
    patchTenantIDServicePrincipalsObjectIdRouteHandler,
  )
  .openapi(
    postTenantIDServicePrincipalsObjectIdLinksOwnersRoute,
    postTenantIDServicePrincipalsObjectIdLinksOwnersRouteHandler,
  )
  .openapi(
    deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRoute,
    deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRouteHandler,
  )
  .openapi(
    getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRoute,
    getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRouteHandler,
  )
  .openapi(
    getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRoute,
    getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRouteHandler,
  )
  .openapi(
    getTenantIDServicePrincipalsObjectIdKeyCredentialsRoute,
    getTenantIDServicePrincipalsObjectIdKeyCredentialsRouteHandler,
  )
  .openapi(
    patchTenantIDServicePrincipalsObjectIdKeyCredentialsRoute,
    patchTenantIDServicePrincipalsObjectIdKeyCredentialsRouteHandler,
  )
  .openapi(
    getTenantIDServicePrincipalsObjectIdOwnersRoute,
    getTenantIDServicePrincipalsObjectIdOwnersRouteHandler,
  )
  .openapi(
    getTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute,
    getTenantIDServicePrincipalsObjectIdPasswordCredentialsRouteHandler,
  )
  .openapi(
    patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute,
    patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRouteHandler,
  )
  .openapi(
    getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRoute,
    getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRouteHandler,
  )
  .openapi(getTenantIDUsersRoute, getTenantIDUsersRouteHandler)
  .openapi(postTenantIDUsersRoute, postTenantIDUsersRouteHandler)
  .openapi(
    postTenantIDUsersObjectIdGetMemberGroupsRoute,
    postTenantIDUsersObjectIdGetMemberGroupsRouteHandler,
  )
  .openapi(deleteTenantIDUsersUpnOrObjectIdRoute, deleteTenantIDUsersUpnOrObjectIdRouteHandler)
  .openapi(getTenantIDUsersUpnOrObjectIdRoute, getTenantIDUsersUpnOrObjectIdRouteHandler)
  .openapi(patchTenantIDUsersUpnOrObjectIdRoute, patchTenantIDUsersUpnOrObjectIdRouteHandler)

export default app
