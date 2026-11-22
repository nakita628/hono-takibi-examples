import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute,
  deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  deleteSharesSharedDriveItemIdListContentTypesContentTypeIdRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdFieldsRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute,
  deleteSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute,
  deleteSharesSharedDriveItemIdListPermissionsPermissionIdRoute,
  deleteSharesSharedDriveItemIdListRoute,
  deleteSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute,
  getSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute,
  getSharesSharedDriveItemIdListColumnsColumnDefinitionIdSourceColumnRoute,
  getSharesSharedDriveItemIdListColumnsCountRoute,
  getSharesSharedDriveItemIdListColumnsRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesContentTypeId1Route,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdIsPublishedRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdRoute,
  getSharesSharedDriveItemIdListContentTypesCountRoute,
  getSharesSharedDriveItemIdListContentTypesGetCompatibleHubContentTypesRoute,
  getSharesSharedDriveItemIdListContentTypesRoute,
  getSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdListCreatedByUserRoute,
  getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsRoute,
  getSharesSharedDriveItemIdListDriveRoute,
  getSharesSharedDriveItemIdListItemsDeltaRoute,
  getSharesSharedDriveItemIdListItemsDeltaTokenTokenRoute,
  getSharesSharedDriveItemIdListItemsListItemIdAnalyticsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserRoute,
  getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDriveItemRoute,
  getSharesSharedDriveItemIdListItemsListItemIdFieldsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalRoute,
  getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserRoute,
  getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdPermissionsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute,
  getSharesSharedDriveItemIdListItemsListItemIdPermissionsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsRoute,
  getSharesSharedDriveItemIdListItemsRoute,
  getSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdListLastModifiedByUserRoute,
  getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsRoute,
  getSharesSharedDriveItemIdListOperationsCountRoute,
  getSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute,
  getSharesSharedDriveItemIdListOperationsRoute,
  getSharesSharedDriveItemIdListPermissionsCountRoute,
  getSharesSharedDriveItemIdListPermissionsPermissionIdRoute,
  getSharesSharedDriveItemIdListPermissionsRoute,
  getSharesSharedDriveItemIdListRoute,
  getSharesSharedDriveItemIdListSubscriptionsCountRoute,
  getSharesSharedDriveItemIdListSubscriptionsGetVapidPublicKeyRoute,
  getSharesSharedDriveItemIdListSubscriptionsRoute,
  getSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute,
  patchSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute,
  patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  patchSharesSharedDriveItemIdListContentTypesContentTypeIdRoute,
  patchSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdFieldsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute,
  patchSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRoute,
  patchSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute,
  patchSharesSharedDriveItemIdListPermissionsPermissionIdRoute,
  patchSharesSharedDriveItemIdListRoute,
  patchSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute,
  postSharesSharedDriveItemIdListColumnsRoute,
  postSharesSharedDriveItemIdListContentTypesAddCopyFromContentTypeHubRoute,
  postSharesSharedDriveItemIdListContentTypesAddCopyRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdAssociateWithHubSitesRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdCopyToDefaultContentLocationRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdPublishRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdUnpublishRoute,
  postSharesSharedDriveItemIdListContentTypesRoute,
  postSharesSharedDriveItemIdListItemsListItemIdCreateLinkRoute,
  postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRoute,
  postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute,
  postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdGrantRoute,
  postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRevokeGrantsRoute,
  postSharesSharedDriveItemIdListItemsListItemIdPermissionsRoute,
  postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRestoreVersionRoute,
  postSharesSharedDriveItemIdListItemsListItemIdVersionsRoute,
  postSharesSharedDriveItemIdListItemsRoute,
  postSharesSharedDriveItemIdListOperationsRoute,
  postSharesSharedDriveItemIdListPermissionsPermissionIdGrantRoute,
  postSharesSharedDriveItemIdListPermissionsPermissionIdRevokeGrantsRoute,
  postSharesSharedDriveItemIdListPermissionsRoute,
  postSharesSharedDriveItemIdListSubscriptionsRoute,
  postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdReauthorizeRoute,
  putSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesListHandler = app
  .openapi(getSharesSharedDriveItemIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListColumnsColumnDefinitionIdSourceColumnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesContentTypeId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSharesSharedDriveItemIdListContentTypesContentTypeIdAssociateWithHubSitesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListContentTypesContentTypeIdCopyToDefaultContentLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdIsPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListContentTypesContentTypeIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListContentTypesContentTypeIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListContentTypesAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListContentTypesAddCopyFromContentTypeHubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesGetCompatibleHubContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdDriveItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSharesSharedDriveItemIdListItemsListItemIdCreateLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListItemsListItemIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRevokeGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListItemsListItemIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRestoreVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsDeltaTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListPermissionsPermissionIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListPermissionsPermissionIdRevokeGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdReauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListSubscriptionsGetVapidPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
