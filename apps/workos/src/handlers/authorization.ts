import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdRoute,
  deleteAuthorizationGroupsGroupIdRoleAssignmentsRoute,
  deleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdRoute,
  deleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
  deleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoute,
  deleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugRoute,
  deleteAuthorizationOrganizationsOrganizationIdRolesSlugRoute,
  deleteAuthorizationPermissionsSlugRoute,
  deleteAuthorizationResourcesResourceIdRoute,
  getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdRoute,
  getAuthorizationGroupsGroupIdRoleAssignmentsRoute,
  getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsRoute,
  getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsRoute,
  getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesRoute,
  getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
  getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsRoute,
  getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsRoute,
  getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoute,
  getAuthorizationOrganizationsOrganizationIdRolesRoute,
  getAuthorizationOrganizationsOrganizationIdRolesSlugRoute,
  getAuthorizationPermissionsRoute,
  getAuthorizationPermissionsSlugRoute,
  getAuthorizationResourcesResourceIdOrganizationMembershipsRoute,
  getAuthorizationResourcesResourceIdRoleAssignmentsRoute,
  getAuthorizationResourcesResourceIdRoute,
  getAuthorizationResourcesRoute,
  getAuthorizationRolesRoute,
  getAuthorizationRolesSlugRoute,
  patchAuthorizationGroupsGroupIdRoleAssignmentsRoute,
  patchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
  patchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoute,
  patchAuthorizationOrganizationsOrganizationIdRolesSlugRoute,
  patchAuthorizationPermissionsSlugRoute,
  patchAuthorizationResourcesResourceIdRoute,
  patchAuthorizationRolesSlugRoute,
  postAuthorizationGroupsGroupIdRoleAssignmentsRoute,
  postAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckRoute,
  postAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
  postAuthorizationOrganizationsOrganizationIdRolesRoute,
  postAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsRoute,
  postAuthorizationPermissionsRoute,
  postAuthorizationResourcesRoute,
  postAuthorizationRolesRoute,
  postAuthorizationRolesSlugPermissionsRoute,
  putAuthorizationGroupsGroupIdRoleAssignmentsRoute,
  putAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsRoute,
  putAuthorizationRolesSlugPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationHandler = app
  .openapi(getAuthorizationGroupsGroupIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationGroupsGroupIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthorizationGroupsGroupIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthorizationGroupsGroupIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizationGroupsGroupIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizationGroupsGroupIdRoleAssignmentsRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationOrganizationMembershipsOrganizationMembershipIdCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAuthorizationOrganizationMembershipsOrganizationMembershipIdResourcesResourceTypeSlugExternalIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAuthorizationOrganizationMembershipsOrganizationMembershipIdRoleAssignmentsRoleAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAuthorizationOrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationOrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationOrganizationsOrganizationIdRolesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthorizationOrganizationsOrganizationIdRolesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizationOrganizationsOrganizationIdRolesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAuthorizationOrganizationsOrganizationIdRolesSlugPermissionsPermissionSlugRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdOrganizationMembershipsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAuthorizationOrganizationsOrganizationIdResourcesResourceTypeSlugExternalIdRoleAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAuthorizationPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationPermissionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthorizationPermissionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizationPermissionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthorizationResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizationResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationResourcesResourceIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationResourcesResourceIdRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationRolesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthorizationRolesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthorizationRolesSlugPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationRolesSlugPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
