import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDrivesDriveIdListColumnsColumnDefinitionIdRoute,
  deleteDrivesDriveIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  deleteDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  deleteDrivesDriveIdListContentTypesContentTypeIdRoute,
  deleteDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  deleteDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  deleteDrivesDriveIdListItemsListItemIdDriveItemContentRoute,
  deleteDrivesDriveIdListItemsListItemIdFieldsRoute,
  deleteDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRoute,
  deleteDrivesDriveIdListItemsListItemIdRoute,
  deleteDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  deleteDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRoute,
  deleteDrivesDriveIdListOperationsRichLongRunningOperationIdRoute,
  deleteDrivesDriveIdListPermissionsPermissionIdRoute,
  deleteDrivesDriveIdListRoute,
  deleteDrivesDriveIdListSubscriptionsSubscriptionIdRoute,
  getDrivesDriveIdListColumnsColumnDefinitionIdRoute,
  getDrivesDriveIdListColumnsColumnDefinitionIdSourceColumnRoute,
  getDrivesDriveIdListColumnsCountRoute,
  getDrivesDriveIdListColumnsRoute,
  getDrivesDriveIdListContentTypesContentTypeIdBaseRoute,
  getDrivesDriveIdListContentTypesContentTypeIdBaseTypesContentTypeId1Route,
  getDrivesDriveIdListContentTypesContentTypeIdBaseTypesCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdBaseTypesRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnLinksCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnLinksRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnsCountRoute,
  getDrivesDriveIdListContentTypesContentTypeIdColumnsRoute,
  getDrivesDriveIdListContentTypesContentTypeIdIsPublishedRoute,
  getDrivesDriveIdListContentTypesContentTypeIdRoute,
  getDrivesDriveIdListContentTypesCountRoute,
  getDrivesDriveIdListContentTypesGetCompatibleHubContentTypesRoute,
  getDrivesDriveIdListContentTypesRoute,
  getDrivesDriveIdListCreatedByUserMailboxSettingsRoute,
  getDrivesDriveIdListCreatedByUserRoute,
  getDrivesDriveIdListCreatedByUserServiceProvisioningErrorsCountRoute,
  getDrivesDriveIdListCreatedByUserServiceProvisioningErrorsRoute,
  getDrivesDriveIdListDriveRoute,
  getDrivesDriveIdListItemsCountRoute,
  getDrivesDriveIdListItemsDeltaRoute,
  getDrivesDriveIdListItemsDeltaTokenTokenRoute,
  getDrivesDriveIdListItemsListItemIdAnalyticsRoute,
  getDrivesDriveIdListItemsListItemIdCreatedByUserMailboxSettingsRoute,
  getDrivesDriveIdListItemsListItemIdCreatedByUserRoute,
  getDrivesDriveIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getDrivesDriveIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsRoute,
  getDrivesDriveIdListItemsListItemIdDocumentSetVersionsCountRoute,
  getDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  getDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  getDrivesDriveIdListItemsListItemIdDocumentSetVersionsRoute,
  getDrivesDriveIdListItemsListItemIdDriveItemContentRoute,
  getDrivesDriveIdListItemsListItemIdDriveItemRoute,
  getDrivesDriveIdListItemsListItemIdFieldsRoute,
  getDrivesDriveIdListItemsListItemIdGetActivitiesByIntervalRoute,
  getDrivesDriveIdListItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getDrivesDriveIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
  getDrivesDriveIdListItemsListItemIdLastModifiedByUserRoute,
  getDrivesDriveIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getDrivesDriveIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
  getDrivesDriveIdListItemsListItemIdPermissionsCountRoute,
  getDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRoute,
  getDrivesDriveIdListItemsListItemIdPermissionsRoute,
  getDrivesDriveIdListItemsListItemIdRoute,
  getDrivesDriveIdListItemsListItemIdVersionsCountRoute,
  getDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  getDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRoute,
  getDrivesDriveIdListItemsListItemIdVersionsRoute,
  getDrivesDriveIdListItemsRoute,
  getDrivesDriveIdListLastModifiedByUserMailboxSettingsRoute,
  getDrivesDriveIdListLastModifiedByUserRoute,
  getDrivesDriveIdListLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getDrivesDriveIdListLastModifiedByUserServiceProvisioningErrorsRoute,
  getDrivesDriveIdListOperationsCountRoute,
  getDrivesDriveIdListOperationsRichLongRunningOperationIdRoute,
  getDrivesDriveIdListOperationsRoute,
  getDrivesDriveIdListPermissionsCountRoute,
  getDrivesDriveIdListPermissionsPermissionIdRoute,
  getDrivesDriveIdListPermissionsRoute,
  getDrivesDriveIdListRoute,
  getDrivesDriveIdListSubscriptionsCountRoute,
  getDrivesDriveIdListSubscriptionsGetVapidPublicKeyRoute,
  getDrivesDriveIdListSubscriptionsRoute,
  getDrivesDriveIdListSubscriptionsSubscriptionIdRoute,
  patchDrivesDriveIdListColumnsColumnDefinitionIdRoute,
  patchDrivesDriveIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  patchDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  patchDrivesDriveIdListContentTypesContentTypeIdRoute,
  patchDrivesDriveIdListCreatedByUserMailboxSettingsRoute,
  patchDrivesDriveIdListItemsListItemIdCreatedByUserMailboxSettingsRoute,
  patchDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  patchDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  patchDrivesDriveIdListItemsListItemIdFieldsRoute,
  patchDrivesDriveIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
  patchDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRoute,
  patchDrivesDriveIdListItemsListItemIdRoute,
  patchDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  patchDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRoute,
  patchDrivesDriveIdListLastModifiedByUserMailboxSettingsRoute,
  patchDrivesDriveIdListOperationsRichLongRunningOperationIdRoute,
  patchDrivesDriveIdListPermissionsPermissionIdRoute,
  patchDrivesDriveIdListRoute,
  patchDrivesDriveIdListSubscriptionsSubscriptionIdRoute,
  postDrivesDriveIdListColumnsRoute,
  postDrivesDriveIdListContentTypesAddCopyFromContentTypeHubRoute,
  postDrivesDriveIdListContentTypesAddCopyRoute,
  postDrivesDriveIdListContentTypesContentTypeIdAssociateWithHubSitesRoute,
  postDrivesDriveIdListContentTypesContentTypeIdColumnLinksRoute,
  postDrivesDriveIdListContentTypesContentTypeIdColumnsRoute,
  postDrivesDriveIdListContentTypesContentTypeIdCopyToDefaultContentLocationRoute,
  postDrivesDriveIdListContentTypesContentTypeIdPublishRoute,
  postDrivesDriveIdListContentTypesContentTypeIdUnpublishRoute,
  postDrivesDriveIdListContentTypesRoute,
  postDrivesDriveIdListItemsListItemIdCreateLinkRoute,
  postDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRoute,
  postDrivesDriveIdListItemsListItemIdDocumentSetVersionsRoute,
  postDrivesDriveIdListItemsListItemIdPermissionsPermissionIdGrantRoute,
  postDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRevokeGrantsRoute,
  postDrivesDriveIdListItemsListItemIdPermissionsRoute,
  postDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRestoreVersionRoute,
  postDrivesDriveIdListItemsListItemIdVersionsRoute,
  postDrivesDriveIdListItemsRoute,
  postDrivesDriveIdListOperationsRoute,
  postDrivesDriveIdListPermissionsPermissionIdGrantRoute,
  postDrivesDriveIdListPermissionsPermissionIdRevokeGrantsRoute,
  postDrivesDriveIdListPermissionsRoute,
  postDrivesDriveIdListSubscriptionsRoute,
  postDrivesDriveIdListSubscriptionsSubscriptionIdReauthorizeRoute,
  putDrivesDriveIdListItemsListItemIdDriveItemContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesListHandler = app
  .openapi(getDrivesDriveIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListColumnsColumnDefinitionIdSourceColumnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdBaseTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdBaseTypesContentTypeId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesContentTypeIdColumnLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnPositionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesContentTypeIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesContentTypeIdAssociateWithHubSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesContentTypeIdCopyToDefaultContentLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesContentTypeIdIsPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesContentTypeIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesContentTypeIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListContentTypesAddCopyFromContentTypeHubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListContentTypesGetCompatibleHubContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListCreatedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListCreatedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListItemsListItemIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListItemsListItemIdDocumentSetVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListItemsListItemIdDocumentSetVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDrivesDriveIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListItemsListItemIdDocumentSetVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdDriveItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDrivesDriveIdListItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDrivesDriveIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDrivesDriveIdListItemsListItemIdCreateLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDrivesDriveIdListItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListItemsListItemIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListItemsListItemIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListItemsListItemIdPermissionsPermissionIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListItemsListItemIdPermissionsPermissionIdRevokeGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListItemsListItemIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDrivesDriveIdListItemsListItemIdVersionsListItemVersionIdRestoreVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDrivesDriveIdListItemsListItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListItemsDeltaTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListLastModifiedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListLastModifiedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListPermissionsPermissionIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListPermissionsPermissionIdRevokeGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdListSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdListSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdListSubscriptionsSubscriptionIdReauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdListSubscriptionsGetVapidPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
