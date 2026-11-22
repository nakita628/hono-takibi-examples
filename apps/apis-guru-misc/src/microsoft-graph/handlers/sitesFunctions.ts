import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute,
  getSitesSiteIdContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute,
  getSitesSiteIdListsListIdContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute,
  getSitesSiteIdListsListIdItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute,
  getSitesSiteIdListsListIdItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getSitesSiteIdMicrosoftGraphGetActivitiesByIntervalRoute,
  getSitesSiteIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
  getSitesSiteIdMicrosoftGraphGetApplicableContentTypesForListListIdListIdRoute,
  getSitesSiteIdMicrosoftGraphGetByPathPathPathRoute,
  getSitesSiteIdOnenoteNotebooksMicrosoftGraphGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesFunctionsHandler = app
  .openapi(getSitesSiteIdContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdListsListIdContentTypesMicrosoftGraphGetCompatibleHubContentTypesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphIsPublishedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdMicrosoftGraphGetActivitiesByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdListsListIdItemsListItemIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdMicrosoftGraphGetActivitiesByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdMicrosoftGraphGetActivitiesByIntervalStartDateTimeStartDateTimeEndDateTimeEndDateTimeIntervalIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdMicrosoftGraphGetApplicableContentTypesForListListIdListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdMicrosoftGraphGetByPathPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteNotebooksMicrosoftGraphGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
