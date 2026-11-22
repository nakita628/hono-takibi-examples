import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeOnenoteNotebooksNotebookIdRoute,
  deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  deleteMeOnenoteOperationsOnenoteOperationIdRoute,
  deleteMeOnenotePagesOnenotePageIdContentRoute,
  deleteMeOnenotePagesOnenotePageIdRoute,
  deleteMeOnenoteResourcesOnenoteResourceIdContentRoute,
  deleteMeOnenoteResourcesOnenoteResourceIdRoute,
  deleteMeOnenoteRoute,
  deleteMeOnenoteSectionGroupsSectionGroupIdRoute,
  deleteMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteMeOnenoteSectionsOnenoteSectionIdRoute,
  getMeOnenoteNotebooksCountRoute,
  getMeOnenoteNotebooksGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
  getMeOnenoteNotebooksNotebookIdRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  getMeOnenoteNotebooksNotebookIdSectionsCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  getMeOnenoteNotebooksNotebookIdSectionsRoute,
  getMeOnenoteNotebooksRoute,
  getMeOnenoteOperationsCountRoute,
  getMeOnenoteOperationsOnenoteOperationIdRoute,
  getMeOnenoteOperationsRoute,
  getMeOnenotePagesCountRoute,
  getMeOnenotePagesOnenotePageIdContentRoute,
  getMeOnenotePagesOnenotePageIdParentNotebookRoute,
  getMeOnenotePagesOnenotePageIdParentSectionRoute,
  getMeOnenotePagesOnenotePageIdPreviewRoute,
  getMeOnenotePagesOnenotePageIdRoute,
  getMeOnenotePagesRoute,
  getMeOnenoteResourcesCountRoute,
  getMeOnenoteResourcesOnenoteResourceIdContentRoute,
  getMeOnenoteResourcesOnenoteResourceIdRoute,
  getMeOnenoteResourcesRoute,
  getMeOnenoteRoute,
  getMeOnenoteSectionGroupsCountRoute,
  getMeOnenoteSectionGroupsRoute,
  getMeOnenoteSectionGroupsSectionGroupIdParentNotebookRoute,
  getMeOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getMeOnenoteSectionGroupsSectionGroupIdRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getMeOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  getMeOnenoteSectionsCountRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getMeOnenoteSectionsOnenoteSectionIdPagesRoute,
  getMeOnenoteSectionsOnenoteSectionIdParentNotebookRoute,
  getMeOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute,
  getMeOnenoteSectionsOnenoteSectionIdRoute,
  getMeOnenoteSectionsRoute,
  patchMeOnenoteNotebooksNotebookIdRoute,
  patchMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  patchMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  patchMeOnenoteOperationsOnenoteOperationIdRoute,
  patchMeOnenotePagesOnenotePageIdRoute,
  patchMeOnenoteResourcesOnenoteResourceIdRoute,
  patchMeOnenoteRoute,
  patchMeOnenoteSectionGroupsSectionGroupIdRoute,
  patchMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchMeOnenoteSectionsOnenoteSectionIdRoute,
  postMeOnenoteNotebooksGetNotebookFromWebUrlRoute,
  postMeOnenoteNotebooksNotebookIdCopyNotebookRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  postMeOnenoteNotebooksNotebookIdSectionsRoute,
  postMeOnenoteNotebooksRoute,
  postMeOnenoteOperationsRoute,
  postMeOnenotePagesOnenotePageIdCopyToSectionRoute,
  postMeOnenotePagesOnenotePageIdOnenotePatchContentRoute,
  postMeOnenotePagesRoute,
  postMeOnenoteResourcesRoute,
  postMeOnenoteSectionGroupsRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postMeOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  postMeOnenoteSectionsOnenoteSectionIdCopyToNotebookRoute,
  postMeOnenoteSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postMeOnenoteSectionsOnenoteSectionIdPagesRoute,
  postMeOnenoteSectionsRoute,
  putMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putMeOnenotePagesOnenotePageIdContentRoute,
  putMeOnenoteResourcesOnenoteResourceIdContentRoute,
  putMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meOnenoteHandler = app
  .openapi(getMeOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdCopyNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteNotebooksGetNotebookFromWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteNotebooksGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenotePagesOnenotePageIdCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenotePagesOnenotePageIdOnenotePatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesOnenotePageIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesOnenotePageIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesOnenotePageIdParentSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionsOnenoteSectionIdCopyToNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionsOnenoteSectionIdCopyToSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
