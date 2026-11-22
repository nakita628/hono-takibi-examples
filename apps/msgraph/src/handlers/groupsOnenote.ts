import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdRoute,
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  deleteGroupsGroupIdOnenoteOperationsOnenoteOperationIdRoute,
  deleteGroupsGroupIdOnenotePagesOnenotePageIdContentRoute,
  deleteGroupsGroupIdOnenotePagesOnenotePageIdRoute,
  deleteGroupsGroupIdOnenoteResourcesOnenoteResourceIdContentRoute,
  deleteGroupsGroupIdOnenoteResourcesOnenoteResourceIdRoute,
  deleteGroupsGroupIdOnenoteRoute,
  deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdRoute,
  deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  deleteGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteGroupsGroupIdOnenoteSectionsOnenoteSectionIdRoute,
  getGroupsGroupIdOnenoteNotebooksCountRoute,
  getGroupsGroupIdOnenoteNotebooksGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsRoute,
  getGroupsGroupIdOnenoteNotebooksRoute,
  getGroupsGroupIdOnenoteOperationsCountRoute,
  getGroupsGroupIdOnenoteOperationsOnenoteOperationIdRoute,
  getGroupsGroupIdOnenoteOperationsRoute,
  getGroupsGroupIdOnenotePagesCountRoute,
  getGroupsGroupIdOnenotePagesOnenotePageIdContentRoute,
  getGroupsGroupIdOnenotePagesOnenotePageIdParentNotebookRoute,
  getGroupsGroupIdOnenotePagesOnenotePageIdParentSectionRoute,
  getGroupsGroupIdOnenotePagesOnenotePageIdPreviewRoute,
  getGroupsGroupIdOnenotePagesOnenotePageIdRoute,
  getGroupsGroupIdOnenotePagesRoute,
  getGroupsGroupIdOnenoteResourcesCountRoute,
  getGroupsGroupIdOnenoteResourcesOnenoteResourceIdContentRoute,
  getGroupsGroupIdOnenoteResourcesOnenoteResourceIdRoute,
  getGroupsGroupIdOnenoteResourcesRoute,
  getGroupsGroupIdOnenoteRoute,
  getGroupsGroupIdOnenoteSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdParentNotebookRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  getGroupsGroupIdOnenoteSectionsCountRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdParentNotebookRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute,
  getGroupsGroupIdOnenoteSectionsOnenoteSectionIdRoute,
  getGroupsGroupIdOnenoteSectionsRoute,
  patchGroupsGroupIdOnenoteNotebooksNotebookIdRoute,
  patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  patchGroupsGroupIdOnenoteOperationsOnenoteOperationIdRoute,
  patchGroupsGroupIdOnenotePagesOnenotePageIdRoute,
  patchGroupsGroupIdOnenoteResourcesOnenoteResourceIdRoute,
  patchGroupsGroupIdOnenoteRoute,
  patchGroupsGroupIdOnenoteSectionGroupsSectionGroupIdRoute,
  patchGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchGroupsGroupIdOnenoteSectionsOnenoteSectionIdRoute,
  postGroupsGroupIdOnenoteNotebooksGetNotebookFromWebUrlRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdCopyNotebookRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsRoute,
  postGroupsGroupIdOnenoteNotebooksRoute,
  postGroupsGroupIdOnenoteOperationsRoute,
  postGroupsGroupIdOnenotePagesOnenotePageIdCopyToSectionRoute,
  postGroupsGroupIdOnenotePagesOnenotePageIdOnenotePatchContentRoute,
  postGroupsGroupIdOnenotePagesRoute,
  postGroupsGroupIdOnenoteResourcesRoute,
  postGroupsGroupIdOnenoteSectionGroupsRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdCopyToNotebookRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdCopyToSectionGroupRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
  postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesRoute,
  postGroupsGroupIdOnenoteSectionsRoute,
  putGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putGroupsGroupIdOnenotePagesOnenotePageIdContentRoute,
  putGroupsGroupIdOnenoteResourcesOnenoteResourceIdContentRoute,
  putGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsOnenoteHandler = app
  .openapi(getGroupsGroupIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksNotebookIdCopyNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteNotebooksGetNotebookFromWebUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteNotebooksGetRecentNotebooksIncludePersonalNotebooksIncludePersonalNotebooksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenotePagesOnenotePageIdCopyToSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenotePagesOnenotePageIdOnenotePatchContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesOnenotePageIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesOnenotePageIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesOnenotePageIdParentSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdCopyToSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteSectionsOnenoteSectionIdCopyToNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteSectionsOnenoteSectionIdCopyToSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdCopyToSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdOnenotePatchContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
