import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute,
  getApplicationsApplicationIdOwnersMicrosoftGraphUserRoute,
  getContactsOrgContactIdDirectReportsDirectoryObjectIdMicrosoftGraphUserRoute,
  getContactsOrgContactIdDirectReportsMicrosoftGraphUserRoute,
  getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphUserRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphUserRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphUserRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphUserRoute,
  getDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphUserRoute,
  getDirectoryDeletedItemsMicrosoftGraphUserRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphUserRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphUserRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphUserRoute,
  getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphUserRoute,
  getGroupsGroupIdMembersMicrosoftGraphUserRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphUserRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphUserRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute,
  getGroupsGroupIdOwnersMicrosoftGraphUserRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphUserRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphUserRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphUserRoute,
  getMeDirectReportsDirectoryObjectIdMicrosoftGraphUserRoute,
  getMeDirectReportsMicrosoftGraphUserRoute,
  getMeMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getMeMemberOfMicrosoftGraphUserRoute,
  getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getMeTransitiveMemberOfMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserRoute,
  getUsersUserIdDirectReportsDirectoryObjectIdMicrosoftGraphUserRoute,
  getUsersUserIdDirectReportsMicrosoftGraphUserRoute,
  getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getUsersUserIdMemberOfMicrosoftGraphUserRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectUserHandler = app
  .openapi(getApplicationsApplicationIdOwnersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryDeletedItemsMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdOwnersMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdOwnersDirectoryObjectIdMicrosoftGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdDirectReportsMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
