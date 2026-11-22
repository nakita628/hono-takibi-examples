import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsOrgContactIdDirectReportsDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getContactsOrgContactIdDirectReportsMicrosoftGraphOrgContactRoute,
  getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphOrgContactRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphOrgContactRoute,
  getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdMemberOfMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdMembersMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdOwnersMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getGroupsGroupIdTransitiveMembersMicrosoftGraphOrgContactRoute,
  getMeDirectReportsDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getMeDirectReportsMicrosoftGraphOrgContactRoute,
  getMeMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getMeMemberOfMicrosoftGraphOrgContactRoute,
  getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getMeTransitiveMemberOfMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
  getUsersUserIdDirectReportsDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getUsersUserIdDirectReportsMicrosoftGraphOrgContactRoute,
  getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getUsersUserIdMemberOfMicrosoftGraphOrgContactRoute,
  getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
  getUsersUserIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectOrgContactHandler = app
  .openapi(getContactsOrgContactIdDirectReportsMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdDirectReportsDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDevicesDeviceIdMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryAdministrativeUnitsAdministrativeUnitIdMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryRolesDirectoryRoleIdMembersMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryRolesDirectoryRoleIdMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOwnersMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdTransitiveMembersMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDirectReportsDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicePrincipalsServicePrincipalIdMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getServicePrincipalsServicePrincipalIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdDirectReportsMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDirectReportsDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTransitiveMemberOfDirectoryObjectIdMicrosoftGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
