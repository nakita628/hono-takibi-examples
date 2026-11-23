import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute,
  deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  deleteSharesSharedDriveItemIdListContentTypesContentTypeIdRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdFieldsRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute,
  deleteSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute,
  deleteSharesSharedDriveItemIdListRoute,
  deleteSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute,
  deleteSharesSharedDriveItemIdPermissionRoute,
  deleteSharesSharedDriveItemIdRoute,
  getSharesCountRoute,
  getSharesRoute,
  getSharesSharedDriveItemIdDriveItemContentRoute,
  getSharesSharedDriveItemIdDriveItemRoute,
  getSharesSharedDriveItemIdItemsCountRoute,
  getSharesSharedDriveItemIdItemsDriveItemIdContentRoute,
  getSharesSharedDriveItemIdItemsDriveItemIdRoute,
  getSharesSharedDriveItemIdItemsRoute,
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
  getSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdRoute,
  getSharesSharedDriveItemIdListContentTypesCountRoute,
  getSharesSharedDriveItemIdListContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute,
  getSharesSharedDriveItemIdListContentTypesRoute,
  getSharesSharedDriveItemIdListDriveRoute,
  getSharesSharedDriveItemIdListItemRoute,
  getSharesSharedDriveItemIdListItemsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdAnalyticsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDriveItemContentRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDriveItemRoute,
  getSharesSharedDriveItemIdListItemsListItemIdFieldsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute,
  getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getSharesSharedDriveItemIdListItemsListItemIdRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsRoute,
  getSharesSharedDriveItemIdListItemsRoute,
  getSharesSharedDriveItemIdListOperationsCountRoute,
  getSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute,
  getSharesSharedDriveItemIdListOperationsRoute,
  getSharesSharedDriveItemIdListRoute,
  getSharesSharedDriveItemIdListSubscriptionsCountRoute,
  getSharesSharedDriveItemIdListSubscriptionsRoute,
  getSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute,
  getSharesSharedDriveItemIdPermissionRoute,
  getSharesSharedDriveItemIdRootContentRoute,
  getSharesSharedDriveItemIdRootRoute,
  getSharesSharedDriveItemIdRoute,
  getSharesSharedDriveItemIdSiteRoute,
  patchSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute,
  patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute,
  patchSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute,
  patchSharesSharedDriveItemIdListContentTypesContentTypeIdRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdFieldsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute,
  patchSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute,
  patchSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute,
  patchSharesSharedDriveItemIdListRoute,
  patchSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute,
  patchSharesSharedDriveItemIdPermissionRoute,
  patchSharesSharedDriveItemIdRoute,
  postSharesRoute,
  postSharesSharedDriveItemIdListColumnsRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphPublishRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
  postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
  postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyRoute,
  postSharesSharedDriveItemIdListContentTypesRoute,
  postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute,
  postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsRoute,
  postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute,
  postSharesSharedDriveItemIdListItemsListItemIdVersionsRoute,
  postSharesSharedDriveItemIdListItemsRoute,
  postSharesSharedDriveItemIdListOperationsRoute,
  postSharesSharedDriveItemIdListSubscriptionsRoute,
  postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
  postSharesSharedDriveItemIdPermissionMicrosoftGraphGrantRoute,
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

export const getSharesCountRouteHandler: RouteHandler<typeof getSharesCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdRoute
> = async (c) => {
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

export const getSharesSharedDriveItemIdItemsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdItemsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdItemsCountRoute
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

export const deleteSharesSharedDriveItemIdListRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListRoute
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

export const getSharesSharedDriveItemIdListColumnsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListColumnsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListColumnsColumnDefinitionIdRoute
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

export const getSharesSharedDriveItemIdListColumnsColumnDefinitionIdSourceColumnRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListColumnsColumnDefinitionIdSourceColumnRoute
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

export const getSharesSharedDriveItemIdListContentTypesCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyFromContentTypeHubRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesMicrosoftGraphGetCompatibleHubContentTypesRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListContentTypesContentTypeIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListContentTypesContentTypeIdRoute
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

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesContentTypeId1RouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesContentTypeId1Route
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

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksColumnLinkIdRoute
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

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsColumnDefinitionIdRoute
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

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdRoute
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

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsColumnDefinitionIdSourceColumnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphIsPublishedRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphPublishRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphUnpublishRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphUnpublishRoute
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

export const getSharesSharedDriveItemIdListItemsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdRoute
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

export const getSharesSharedDriveItemIdListItemsListItemIdAnalyticsRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdAnalyticsRoute
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

export const getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdRoute
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

export const postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute
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

export const deleteSharesSharedDriveItemIdListItemsListItemIdFieldsRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdFieldsRoute
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

export const getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute
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

export const getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdRoute
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

export const deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdFieldsRoute
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

export const postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute
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

export const getSharesSharedDriveItemIdListOperationsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListOperationsRichLongRunningOperationIdRoute
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

export const getSharesSharedDriveItemIdListSubscriptionsCountRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListSubscriptionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdListSubscriptionsSubscriptionIdRoute
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

export const postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSharesSharedDriveItemIdListItemRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdListItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSharesSharedDriveItemIdPermissionRouteHandler: RouteHandler<
  typeof deleteSharesSharedDriveItemIdPermissionRoute
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

export const postSharesSharedDriveItemIdPermissionMicrosoftGraphGrantRouteHandler: RouteHandler<
  typeof postSharesSharedDriveItemIdPermissionMicrosoftGraphGrantRoute
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

export const getSharesSharedDriveItemIdSiteRouteHandler: RouteHandler<
  typeof getSharesSharedDriveItemIdSiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
