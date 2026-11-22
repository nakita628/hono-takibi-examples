import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharesCountRoute,
  getSharesSharedDriveItemIdItemsCountRoute,
  getSharesSharedDriveItemIdListColumnsCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRoute,
  getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRoute,
  getSharesSharedDriveItemIdListContentTypesCountRoute,
  getSharesSharedDriveItemIdListItemsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRoute,
  getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRoute,
  getSharesSharedDriveItemIdListOperationsCountRoute,
  getSharesSharedDriveItemIdListSubscriptionsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesHandler = app
  .openapi(getSharesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnPositionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSharesSharedDriveItemIdListContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdDocumentSetVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListItemsListItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdListSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
