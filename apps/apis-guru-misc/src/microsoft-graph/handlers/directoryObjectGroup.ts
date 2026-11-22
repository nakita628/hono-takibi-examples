import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphGroupRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphGroupRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphGroupRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphGroupRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphGroupRoute,
  getDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphGroupRoute,
  getDirectoryDeletedItemsMicrosoftGraphGroupRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphGroupRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphGroupRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphGroupRoute,
  getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphGroupRoute,
  getGroupsGroupIdMembersMicrosoftGraphGroupRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphGroupRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphGroupRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphGroupRoute,
  getGroupsGroupIdOwnersMicrosoftGraphGroupRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphGroupRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphGroupRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphGroupRoute,
  getMeMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getMeMemberOfMicrosoftGraphGroupRoute,
  getMeOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute,
  getMeOwnedObjectsMicrosoftGraphGroupRoute,
  getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getMeTransitiveMemberOfMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupRoute,
  getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getUsersUserIdMemberOfMicrosoftGraphGroupRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute,
  getUsersUserIdOwnedObjectsMicrosoftGraphGroupRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectGroupHandler = app
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryDeletedItemsMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
