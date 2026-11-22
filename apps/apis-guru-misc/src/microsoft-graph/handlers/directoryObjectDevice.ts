import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphDeviceRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphDeviceRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphDeviceRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphDeviceRoute,
  getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getGroupsGroupIdMembersMicrosoftGraphDeviceRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphDeviceRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getGroupsGroupIdOwnersMicrosoftGraphDeviceRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphDeviceRoute,
  getMeMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getMeMemberOfMicrosoftGraphDeviceRoute,
  getMeOwnedDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getMeOwnedDevicesMicrosoftGraphDeviceRoute,
  getMeRegisteredDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getMeRegisteredDevicesMicrosoftGraphDeviceRoute,
  getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getMeTransitiveMemberOfMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
  getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getUsersUserIdMemberOfMicrosoftGraphDeviceRoute,
  getUsersUserIdOwnedDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getUsersUserIdOwnedDevicesMicrosoftGraphDeviceRoute,
  getUsersUserIdRegisteredDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getUsersUserIdRegisteredDevicesMicrosoftGraphDeviceRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectDeviceHandler = app
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOwnedDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRegisteredDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOwnedDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRegisteredDevicesDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
