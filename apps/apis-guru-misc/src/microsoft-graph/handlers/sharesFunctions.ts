import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute,
  getSharesSharedDriveItemIdListContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute,
  getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute,
  getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesFunctionsHandler = app
  .openapi(
    getSharesSharedDriveItemIdListContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSharesSharedDriveItemIdListItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
