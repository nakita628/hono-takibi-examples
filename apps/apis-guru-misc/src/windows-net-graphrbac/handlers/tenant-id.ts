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
} from '../routes'

const app = new OpenAPIHono()

export const tenantIdHandler = app
  .openapi(getTenantIDApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDApplicationsApplicationObjectIdLinksOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDApplicationsApplicationObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDApplicationsApplicationObjectIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDApplicationsApplicationObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDDeletedApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDDeletedApplicationsApplicationObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDDeletedApplicationsObjectIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGetObjectsByObjectIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGroupsGroupObjectIdLinksMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDGroupsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDGroupsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGroupsObjectIdLinksOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGroupsObjectIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDGroupsObjectIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDGroupsObjectIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDIsMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDMeOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDOauth2PermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDOauth2PermissionGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDOauth2PermissionGrantsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDServicePrincipalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDServicePrincipalsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDServicePrincipalsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDServicePrincipalsObjectIdLinksOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDServicePrincipalsObjectIdKeyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDServicePrincipalsObjectIdPasswordCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDServicePrincipalsByAppIdApplicationIDObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDUsersObjectIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDUsersUpnOrObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDUsersUpnOrObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDUsersUpnOrObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
