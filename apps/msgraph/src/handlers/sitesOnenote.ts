import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdGetByPathPathPathOnenoteRoute,
  deleteSitesSiteIdOnenoteNotebooksNotebookIdRoute,
  deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  deleteSitesSiteIdOnenoteOperationsOnenoteOperationIdRoute,
  deleteSitesSiteIdOnenotePagesOnenotePageIdRoute,
  deleteSitesSiteIdOnenoteResourcesOnenoteResourceIdRoute,
  deleteSitesSiteIdOnenoteRoute,
  deleteSitesSiteIdOnenoteSectionGroupsSectionGroupIdRoute,
  deleteSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteSitesSiteIdOnenoteSectionsOnenoteSectionIdRoute,
  getSitesSiteIdGetByPathPathPathOnenoteRoute,
  getSitesSiteIdOnenoteNotebooksCountRoute,
  getSitesSiteIdOnenoteNotebooksGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsRoute,
  getSitesSiteIdOnenoteNotebooksRoute,
  getSitesSiteIdOnenoteOperationsCountRoute,
  getSitesSiteIdOnenoteOperationsOnenoteOperationIdRoute,
  getSitesSiteIdOnenoteOperationsRoute,
  getSitesSiteIdOnenotePagesCountRoute,
  getSitesSiteIdOnenotePagesOnenotePageIdContentRoute,
  getSitesSiteIdOnenotePagesOnenotePageIdParentNotebookRoute,
  getSitesSiteIdOnenotePagesOnenotePageIdParentSectionRoute,
  getSitesSiteIdOnenotePagesOnenotePageIdPreviewRoute,
  getSitesSiteIdOnenotePagesOnenotePageIdRoute,
  getSitesSiteIdOnenotePagesRoute,
  getSitesSiteIdOnenoteResourcesCountRoute,
  getSitesSiteIdOnenoteResourcesOnenoteResourceIdContentRoute,
  getSitesSiteIdOnenoteResourcesOnenoteResourceIdRoute,
  getSitesSiteIdOnenoteResourcesRoute,
  getSitesSiteIdOnenoteRoute,
  getSitesSiteIdOnenoteSectionGroupsCountRoute,
  getSitesSiteIdOnenoteSectionGroupsRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdParentNotebookRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  getSitesSiteIdOnenoteSectionsCountRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdParentNotebookRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdRoute,
  getSitesSiteIdOnenoteSectionsRoute,
  patchSitesSiteIdGetByPathPathPathOnenoteRoute,
  patchSitesSiteIdOnenoteNotebooksNotebookIdRoute,
  patchSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  patchSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  patchSitesSiteIdOnenoteOperationsOnenoteOperationIdRoute,
  patchSitesSiteIdOnenotePagesOnenotePageIdRoute,
  patchSitesSiteIdOnenoteResourcesOnenoteResourceIdRoute,
  patchSitesSiteIdOnenoteRoute,
  patchSitesSiteIdOnenoteSectionGroupsSectionGroupIdRoute,
  patchSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchSitesSiteIdOnenoteSectionsOnenoteSectionIdRoute,
  postSitesSiteIdOnenoteNotebooksGetNotebookFromWebUrlRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdCopyNotebookRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  postSitesSiteIdOnenoteNotebooksNotebookIdSectionsRoute,
  postSitesSiteIdOnenoteNotebooksRoute,
  postSitesSiteIdOnenoteOperationsRoute,
  postSitesSiteIdOnenotePagesOnenotePageIdCopyToSectionRoute,
  postSitesSiteIdOnenotePagesOnenotePageIdOnenotePatchContentRoute,
  postSitesSiteIdOnenotePagesRoute,
  postSitesSiteIdOnenoteResourcesRoute,
  postSitesSiteIdOnenoteSectionGroupsRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdCopyToNotebookRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesRoute,
  postSitesSiteIdOnenoteSectionsRoute,
  putSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putSitesSiteIdOnenotePagesOnenotePageIdContentRoute,
  putSitesSiteIdOnenoteResourcesOnenoteResourceIdContentRoute,
  putSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesOnenoteHandler = app
  .openapi(getSitesSiteIdGetByPathPathPathOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdGetByPathPathPathOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdGetByPathPathPathOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteNotebooksNotebookIdCopyNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteNotebooksGetNotebookFromWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteNotebooksGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenotePagesOnenotePageIdCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenotePagesOnenotePageIdOnenotePatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesOnenotePageIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesOnenotePageIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesOnenotePageIdParentSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteSectionsOnenoteSectionIdCopyToNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteSectionsOnenoteSectionIdCopyToSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
