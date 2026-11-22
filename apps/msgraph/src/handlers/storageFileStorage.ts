import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdRecycleBinRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
  deleteStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
  deleteStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsFileStorageContainerTypeAppPermissionGrantAppIdRoute,
  deleteStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdRoute,
  deleteStorageFileStorageContainerTypesFileStorageContainerTypeIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
  deleteStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
  deleteStorageFileStorageRoute,
  getStorageFileStorageContainersCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
  getStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdSourceColumnRoute,
  getStorageFileStorageContainersFileStorageContainerIdColumnsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdColumnsRoute,
  getStorageFileStorageContainersFileStorageContainerIdDriveRoute,
  getStorageFileStorageContainersFileStorageContainerIdMigrationJobsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdMigrationJobsRoute,
  getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
  getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
  getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
  getStorageFileStorageContainersFileStorageContainerIdPermissionsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRoute,
  getStorageFileStorageContainersFileStorageContainerIdPermissionsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageContainersFileStorageContainerIdRecycleBinRoute,
  getStorageFileStorageContainersFileStorageContainerIdRoute,
  getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsRoute,
  getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersCountRoute,
  getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
  getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
  getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
  getStorageFileStorageContainersRoute,
  getStorageFileStorageContainerTypeRegistrationsCountRoute,
  getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsCountRoute,
  getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsFileStorageContainerTypeAppPermissionGrantAppIdRoute,
  getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsRoute,
  getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdRoute,
  getStorageFileStorageContainerTypeRegistrationsRoute,
  getStorageFileStorageContainerTypesCountRoute,
  getStorageFileStorageContainerTypesFileStorageContainerTypeIdRoute,
  getStorageFileStorageContainerTypesRoute,
  getStorageFileStorageDeletedContainersCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdSourceColumnRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdDriveRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersCountRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
  getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
  getStorageFileStorageDeletedContainersRoute,
  getStorageFileStorageRoute,
  patchStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
  patchStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
  patchStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
  patchStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRoute,
  patchStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
  patchStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
  patchStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
  patchStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
  patchStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
  patchStorageFileStorageContainersFileStorageContainerIdRecycleBinRoute,
  patchStorageFileStorageContainersFileStorageContainerIdRoute,
  patchStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
  patchStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
  patchStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsFileStorageContainerTypeAppPermissionGrantAppIdRoute,
  patchStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdRoute,
  patchStorageFileStorageContainerTypesFileStorageContainerTypeIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
  patchStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
  patchStorageFileStorageRoute,
  postStorageFileStorageContainersFileStorageContainerIdActivateRoute,
  postStorageFileStorageContainersFileStorageContainerIdColumnsRoute,
  postStorageFileStorageContainersFileStorageContainerIdLockRoute,
  postStorageFileStorageContainersFileStorageContainerIdMigrationJobsRoute,
  postStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
  postStorageFileStorageContainersFileStorageContainerIdPermanentDeleteRoute,
  postStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdGrantRoute,
  postStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRevokeGrantsRoute,
  postStorageFileStorageContainersFileStorageContainerIdPermissionsRoute,
  postStorageFileStorageContainersFileStorageContainerIdProvisionMigrationContainersRoute,
  postStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRoute,
  postStorageFileStorageContainersFileStorageContainerIdRestoreRoute,
  postStorageFileStorageContainersFileStorageContainerIdSharePointGroupsRoute,
  postStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
  postStorageFileStorageContainersFileStorageContainerIdUnlockRoute,
  postStorageFileStorageContainersRoute,
  postStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsRoute,
  postStorageFileStorageContainerTypeRegistrationsRoute,
  postStorageFileStorageContainerTypesRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdActivateRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdColumnsRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdLockRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdPermanentDeleteRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdGrantRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRevokeGrantsRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdProvisionMigrationContainersRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdRestoreRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
  postStorageFileStorageDeletedContainersFileStorageContainerIdUnlockRoute,
  postStorageFileStorageDeletedContainersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageFileStorageHandler = app
  .openapi(getStorageFileStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageFileStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageFileStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersFileStorageContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageFileStorageContainersFileStorageContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageFileStorageContainersFileStorageContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersFileStorageContainerIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdColumnsColumnDefinitionIdSourceColumnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainersFileStorageContainerIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersFileStorageContainerIdDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdPermanentDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postStorageFileStorageContainersFileStorageContainerIdProvisionMigrationContainersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postStorageFileStorageContainersFileStorageContainerIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersFileStorageContainerIdMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainersFileStorageContainerIdMigrationJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersFileStorageContainerIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdGrantRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageContainersFileStorageContainerIdPermissionsPermissionIdRevokeGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainersFileStorageContainerIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersFileStorageContainerIdRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageFileStorageContainersFileStorageContainerIdRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageFileStorageContainersFileStorageContainerIdRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainersFileStorageContainerIdRecycleBinItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainersFileStorageContainerIdSharePointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainersFileStorageContainerIdSharePointGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainerTypeRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainerTypeRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsFileStorageContainerTypeAppPermissionGrantAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsFileStorageContainerTypeAppPermissionGrantAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsFileStorageContainerTypeAppPermissionGrantAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageContainerTypeRegistrationsFileStorageContainerTypeRegistrationIdApplicationPermissionGrantsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageContainerTypeRegistrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageContainerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainerTypesFileStorageContainerTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageFileStorageContainerTypesFileStorageContainerTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageFileStorageContainerTypesFileStorageContainerTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageContainerTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageDeletedContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageDeletedContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageDeletedContainersFileStorageContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageFileStorageDeletedContainersFileStorageContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageFileStorageDeletedContainersFileStorageContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageDeletedContainersFileStorageContainerIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsColumnDefinitionIdSourceColumnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageDeletedContainersFileStorageContainerIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageDeletedContainersFileStorageContainerIdDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageDeletedContainersFileStorageContainerIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageDeletedContainersFileStorageContainerIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdPermanentDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdProvisionMigrationContainersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postStorageFileStorageDeletedContainersFileStorageContainerIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageDeletedContainersFileStorageContainerIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsSharePointMigrationEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsSharePointMigrationJobIdProgressEventsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdMigrationJobsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdGrantRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsPermissionIdRevokeGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdPermissionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinCreatedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsRecycleBinItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinItemsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdRecycleBinLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersSharePointGroupMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsSharePointGroupIdMembersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getStorageFileStorageDeletedContainersFileStorageContainerIdSharePointGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getStorageFileStorageDeletedContainersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
