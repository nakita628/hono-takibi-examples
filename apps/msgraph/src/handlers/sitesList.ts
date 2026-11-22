import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdListsListIdColumnsColumnDefinitionIdRoute,
  deleteSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  deleteSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  deleteSitesSiteIdListsListIdContentTypesContentTypeIdRoute,
  deleteSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  deleteSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  deleteSitesSiteIdListsListIdItemsListItemIdFieldsRoute,
  deleteSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRoute,
  deleteSitesSiteIdListsListIdItemsListItemIdRoute,
  deleteSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  deleteSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRoute,
  deleteSitesSiteIdListsListIdOperationsRichLongRunningOperationIdRoute,
  deleteSitesSiteIdListsListIdPermissionsPermissionIdRoute,
  deleteSitesSiteIdListsListIdRoute,
  deleteSitesSiteIdListsListIdSubscriptionsSubscriptionIdRoute,
  getSitesSiteIdGetByPathPathPathListsRoute,
  getSitesSiteIdListsCountRoute,
  getSitesSiteIdListsListIdColumnsColumnDefinitionIdRoute,
  getSitesSiteIdListsListIdColumnsColumnDefinitionIdSourceColumnRoute,
  getSitesSiteIdListsListIdColumnsCountRoute,
  getSitesSiteIdListsListIdColumnsRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdBaseRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesContentTypeId1Route,
  getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdIsPublishedRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdRoute,
  getSitesSiteIdListsListIdContentTypesCountRoute,
  getSitesSiteIdListsListIdContentTypesGetCompatibleHubContentTypesRoute,
  getSitesSiteIdListsListIdContentTypesRoute,
  getSitesSiteIdListsListIdCreatedByUserMailboxSettingsRoute,
  getSitesSiteIdListsListIdCreatedByUserRoute,
  getSitesSiteIdListsListIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getSitesSiteIdListsListIdCreatedByUserServiceProvisioningErrorsRoute,
  getSitesSiteIdListsListIdDriveRoute,
  getSitesSiteIdListsListIdItemsDeltaRoute,
  getSitesSiteIdListsListIdItemsDeltaTokenTokenRoute,
  getSitesSiteIdListsListIdItemsListItemIdAnalyticsRoute,
  getSitesSiteIdListsListIdItemsListItemIdCreatedByUserMailboxSettingsRoute,
  getSitesSiteIdListsListIdItemsListItemIdCreatedByUserRoute,
  getSitesSiteIdListsListIdItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getSitesSiteIdListsListIdItemsListItemIdCreatedByUserServiceProvisioningErrorsRoute,
  getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsCountRoute,
  getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsRoute,
  getSitesSiteIdListsListIdItemsListItemIdDriveItemContentRoute,
  getSitesSiteIdListsListIdItemsListItemIdDriveItemRoute,
  getSitesSiteIdListsListIdItemsListItemIdFieldsRoute,
  getSitesSiteIdListsListIdItemsListItemIdGetActivitiesByIntervalRoute,
  getSitesSiteIdListsListIdItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
  getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserRoute,
  getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
  getSitesSiteIdListsListIdItemsListItemIdPermissionsCountRoute,
  getSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRoute,
  getSitesSiteIdListsListIdItemsListItemIdPermissionsRoute,
  getSitesSiteIdListsListIdItemsListItemIdRoute,
  getSitesSiteIdListsListIdItemsListItemIdVersionsCountRoute,
  getSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  getSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRoute,
  getSitesSiteIdListsListIdItemsListItemIdVersionsRoute,
  getSitesSiteIdListsListIdItemsRoute,
  getSitesSiteIdListsListIdLastModifiedByUserMailboxSettingsRoute,
  getSitesSiteIdListsListIdLastModifiedByUserRoute,
  getSitesSiteIdListsListIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getSitesSiteIdListsListIdLastModifiedByUserServiceProvisioningErrorsRoute,
  getSitesSiteIdListsListIdOperationsCountRoute,
  getSitesSiteIdListsListIdOperationsRichLongRunningOperationIdRoute,
  getSitesSiteIdListsListIdOperationsRoute,
  getSitesSiteIdListsListIdPermissionsCountRoute,
  getSitesSiteIdListsListIdPermissionsPermissionIdRoute,
  getSitesSiteIdListsListIdPermissionsRoute,
  getSitesSiteIdListsListIdRoute,
  getSitesSiteIdListsListIdSubscriptionsCountRoute,
  getSitesSiteIdListsListIdSubscriptionsGetVapidPublicKeyRoute,
  getSitesSiteIdListsListIdSubscriptionsRoute,
  getSitesSiteIdListsListIdSubscriptionsSubscriptionIdRoute,
  getSitesSiteIdListsRoute,
  patchSitesSiteIdListsListIdColumnsColumnDefinitionIdRoute,
  patchSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  patchSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  patchSitesSiteIdListsListIdContentTypesContentTypeIdRoute,
  patchSitesSiteIdListsListIdCreatedByUserMailboxSettingsRoute,
  patchSitesSiteIdListsListIdItemsListItemIdCreatedByUserMailboxSettingsRoute,
  patchSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
  patchSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  patchSitesSiteIdListsListIdItemsListItemIdFieldsRoute,
  patchSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
  patchSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRoute,
  patchSitesSiteIdListsListIdItemsListItemIdRoute,
  patchSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  patchSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRoute,
  patchSitesSiteIdListsListIdLastModifiedByUserMailboxSettingsRoute,
  patchSitesSiteIdListsListIdOperationsRichLongRunningOperationIdRoute,
  patchSitesSiteIdListsListIdPermissionsPermissionIdRoute,
  patchSitesSiteIdListsListIdRoute,
  patchSitesSiteIdListsListIdSubscriptionsSubscriptionIdRoute,
  postSitesSiteIdGetByPathPathPathListsRoute,
  postSitesSiteIdListsListIdColumnsRoute,
  postSitesSiteIdListsListIdContentTypesAddCopyFromContentTypeHubRoute,
  postSitesSiteIdListsListIdContentTypesAddCopyRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdAssociateWithHubSitesRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdColumnsRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdCopyToDefaultContentLocationRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdPublishRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdUnpublishRoute,
  postSitesSiteIdListsListIdContentTypesRoute,
  postSitesSiteIdListsListIdItemsListItemIdCreateLinkRoute,
  postSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRoute,
  postSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsRoute,
  postSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdGrantRoute,
  postSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRevokeGrantsRoute,
  postSitesSiteIdListsListIdItemsListItemIdPermissionsRoute,
  postSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRestoreVersionRoute,
  postSitesSiteIdListsListIdItemsListItemIdVersionsRoute,
  postSitesSiteIdListsListIdItemsRoute,
  postSitesSiteIdListsListIdOperationsRoute,
  postSitesSiteIdListsListIdPermissionsPermissionIdGrantRoute,
  postSitesSiteIdListsListIdPermissionsPermissionIdRevokeGrantsRoute,
  postSitesSiteIdListsListIdPermissionsRoute,
  postSitesSiteIdListsListIdSubscriptionsRoute,
  postSitesSiteIdListsListIdSubscriptionsSubscriptionIdReauthorizeRoute,
  postSitesSiteIdListsRoute,
  putSitesSiteIdListsListIdItemsListItemIdDriveItemContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesListHandler = app
  .openapi(getSitesSiteIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdColumnsColumnDefinitionIdSourceColumnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdContentTypesContentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesContentTypeId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksColumnLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesContentTypeIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesContentTypeIdAssociateWithHubSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdListsListIdContentTypesContentTypeIdCopyToDefaultContentLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdIsPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesContentTypeIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesContentTypeIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesAddCopyFromContentTypeHubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesGetCompatibleHubContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdCreatedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdCreatedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdItemsListItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdCreatedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdItemsListItemIdCreatedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdCreatedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdDriveItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdListsListIdItemsListItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdItemsListItemIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSitesSiteIdListsListIdItemsListItemIdCreateLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdItemsListItemIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdItemsListItemIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdListsListIdItemsListItemIdPermissionsPermissionIdRevokeGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdItemsListItemIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdItemsListItemIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdRestoreVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdListsListIdItemsListItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsDeltaTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdLastModifiedByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdLastModifiedByUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdLastModifiedByUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdLastModifiedByUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdPermissionsPermissionIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdPermissionsPermissionIdRevokeGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdListsListIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdListsListIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdSubscriptionsSubscriptionIdReauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdSubscriptionsGetVapidPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGetByPathPathPathListsRoute, (c) => {
    throw new Error('Not implemented')
  })
