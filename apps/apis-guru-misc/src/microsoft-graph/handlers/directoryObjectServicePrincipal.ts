import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphServicePrincipalRoute,
  getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphServicePrincipalRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphServicePrincipalRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdMembersMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdOwnersMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphServicePrincipalRoute,
  getMeCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getMeCreatedObjectsMicrosoftGraphServicePrincipalRoute,
  getMeMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getMeMemberOfMicrosoftGraphServicePrincipalRoute,
  getMeOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getMeOwnedObjectsMicrosoftGraphServicePrincipalRoute,
  getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getMeTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdCreatedObjectsMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdMemberOfMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdOwnedObjectsMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectServicePrincipalHandler = app
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdRegisteredUsersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeCreatedObjectsMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdCreatedObjectsMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdCreatedObjectsMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdCreatedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedObjectsDirectoryObjectIdMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
