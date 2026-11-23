import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSharesSharedDriveItemIdDriveItemContentRoute,
  deleteSharesSharedDriveItemIdItemsDriveItemIdContentRoute,
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
  deleteSharesSharedDriveItemIdPermissionRoute,
  deleteSharesSharedDriveItemIdRootContentRoute,
  deleteSharesSharedDriveItemIdRoute,
  getSharesCountRoute,
  getSharesRoute,
  getSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdCreatedByUserRoute,
  getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsRoute,
  getSharesSharedDriveItemIdDriveItemContentRoute,
  getSharesSharedDriveItemIdDriveItemRoute,
  getSharesSharedDriveItemIdItemsCountRoute,
  getSharesSharedDriveItemIdItemsDriveItemIdContentRoute,
  getSharesSharedDriveItemIdItemsDriveItemIdRoute,
  getSharesSharedDriveItemIdItemsRoute,
  getSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute,
  getSharesSharedDriveItemIdLastModifiedByUserRoute,
  getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute,
  getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsRoute,
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
  getSharesSharedDriveItemIdListItemRoute,
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
  getSharesSharedDriveItemIdPermissionRoute,
  getSharesSharedDriveItemIdRootContentRoute,
  getSharesSharedDriveItemIdRootRoute,
  getSharesSharedDriveItemIdRoute,
  getSharesSharedDriveItemIdSiteRoute,
  patchSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute,
  patchSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute,
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
  patchSharesSharedDriveItemIdPermissionRoute,
  patchSharesSharedDriveItemIdRoute,
  postSharesRoute,
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
  postSharesSharedDriveItemIdPermissionGrantRoute,
  postSharesSharedDriveItemIdPermissionRevokeGrantsRoute,
  putSharesSharedDriveItemIdDriveItemContentRoute,
  putSharesSharedDriveItemIdItemsDriveItemIdContentRoute,
  putSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute,
  putSharesSharedDriveItemIdRootContentRoute,
} from '../routes'

export const getSharesRouteHandler: RouteHandler<typeof getSharesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesRouteHandler: RouteHandler<typeof postSharesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdCreatedByUserRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdCreatedByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdCreatedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdCreatedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdCreatedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdCreatedByUserServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdDriveItemRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdDriveItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdDriveItemContentRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdDriveItemContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSharesSharedDriveItemIdDriveItemContentRouteHandler: RouteHandler<
  typeof putSharesSharedDriveItemIdDriveItemContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdDriveItemContentRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdDriveItemContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdItemsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdItemsDriveItemIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdItemsDriveItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdItemsDriveItemIdContentRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdItemsDriveItemIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSharesSharedDriveItemIdItemsDriveItemIdContentRouteHandler: RouteHandler<
  typeof putSharesSharedDriveItemIdItemsDriveItemIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdItemsDriveItemIdContentRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdItemsDriveItemIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdItemsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdItemsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdLastModifiedByUserRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdLastModifiedByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdLastModifiedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListColumnsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListColumnsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListColumnsColumnDefinitionIdSourceColumnRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListColumnsColumnDefinitionIdSourceColumnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListColumnsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListColumnsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListContentTypesContentTypeIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListContentTypesContentTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListContentTypesContentTypeIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListContentTypesContentTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesContentTypeId1RouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesContentTypeId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdAssociateWithHubSitesRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdAssociateWithHubSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdCopyToDefaultContentLocationRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdCopyToDefaultContentLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdIsPublishedRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdIsPublishedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdPublishRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdUnpublishRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdUnpublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesAddCopyRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesAddCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesAddCopyFromContentTypeHubRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesAddCopyFromContentTypeHubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesGetCompatibleHubContentTypesRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesGetCompatibleHubContentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListCreatedByUserRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListCreatedByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListCreatedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListCreatedByUserServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListDriveRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListDriveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdAnalyticsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdCreatedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdCreatedByUserServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdDriveItemRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdDriveItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRouteHandler: RouteHandler<
  typeof putSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdFieldsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdFieldsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdFieldsRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdLastModifiedByUserServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdCreateLinkRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdCreateLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdPermissionsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdPermissionsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdGrantRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRevokeGrantsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdPermissionsPermissionIdRevokeGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdPermissionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdPermissionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdVersionsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdVersionsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRestoreVersionRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRestoreVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsDeltaRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsDeltaTokenTokenRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsDeltaTokenTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListLastModifiedByUserRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListLastModifiedByUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListLastModifiedByUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListLastModifiedByUserServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListOperationsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListOperationsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListOperationsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListPermissionsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListPermissionsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListPermissionsPermissionIdGrantRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListPermissionsPermissionIdGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListPermissionsPermissionIdRevokeGrantsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListPermissionsPermissionIdRevokeGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListPermissionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListPermissionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListSubscriptionsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListSubscriptionsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdReauthorizeRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdReauthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListSubscriptionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListSubscriptionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListSubscriptionsGetVapidPublicKeyRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListSubscriptionsGetVapidPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdPermissionRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSharesSharedDriveItemIdPermissionRouteHandler: RouteHandler<
  typeof patchSharesSharedDriveItemIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdPermissionRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdPermissionGrantRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdPermissionGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdPermissionRevokeGrantsRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdPermissionRevokeGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdRootRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdRootContentRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdRootContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSharesSharedDriveItemIdRootContentRouteHandler: RouteHandler<
  typeof putSharesSharedDriveItemIdRootContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdRootContentRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdRootContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdSiteRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdSiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesCountRouteHandler: RouteHandler<typeof getSharesCountRoute> = async (c) => {
  throw new Error('Not implemented')
}
