import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphApplicationRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphApplicationRoute,
  getDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getDirectoryDeletedItemsMicrosoftGraphApplicationRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphApplicationRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphApplicationRoute,
  getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getGroupsGroupIdMembersMicrosoftGraphApplicationRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphApplicationRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getGroupsGroupIdOwnersMicrosoftGraphApplicationRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphApplicationRoute,
  getMeMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getMeMemberOfMicrosoftGraphApplicationRoute,
  getMeOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getMeOwnedObjectsMicrosoftGraphApplicationRoute,
  getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getMeTransitiveMemberOfMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
  getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getUsersUserIdMemberOfMicrosoftGraphApplicationRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getUsersUserIdOwnedObjectsMicrosoftGraphApplicationRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectApplicationHandler = app
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryDeletedItemsMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
