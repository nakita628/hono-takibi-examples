import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphPublishRoute,
  postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
  postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
  postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyRoute,
  postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute,
  postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute,
  postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
  postSharesSharedDriveItemIdPermissionMicrosoftGraphGrantRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesActionsHandler = app
  .openapi(postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSharesSharedDriveItemIdListContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphPublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSharesSharedDriveItemIdListSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSharesSharedDriveItemIdPermissionMicrosoftGraphGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
