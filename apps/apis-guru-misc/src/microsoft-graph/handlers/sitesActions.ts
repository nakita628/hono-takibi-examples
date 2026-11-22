import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSitesMicrosoftGraphAddRoute,
  postSitesMicrosoftGraphRemoveRoute,
  postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
  postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
  postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphPublishRoute,
  postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
  postSitesSiteIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
  postSitesSiteIdContentTypesMicrosoftGraphAddCopyRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphPublishRoute,
  postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute,
  postSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
  postSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyRoute,
  postSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute,
  postSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute,
  postSitesSiteIdListsListIdSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
  postSitesSiteIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
  postSitesSiteIdPermissionsPermissionIdMicrosoftGraphGrantRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesActionsHandler = app
  .openapi(postSitesMicrosoftGraphAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesMicrosoftGraphRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdContentTypesMicrosoftGraphAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdListsListIdContentTypesMicrosoftGraphAddCopyFromContentTypeHubRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphAssociateWithHubSitesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphCopyToDefaultContentLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdListsListIdContentTypesContentTypeIdMicrosoftGraphUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsDocumentSetVersionIdMicrosoftGraphRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdListsListIdItemsListItemIdVersionsListItemVersionIdMicrosoftGraphRestoreVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdListsListIdSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSitesSiteIdOnenoteNotebooksMicrosoftGraphGetNotebookFromWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteNotebooksNotebookIdMicrosoftGraphCopyNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenotePagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdOnenoteSectionsOnenoteSectionIdMicrosoftGraphCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdMicrosoftGraphOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSitesSiteIdPermissionsPermissionIdMicrosoftGraphGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
