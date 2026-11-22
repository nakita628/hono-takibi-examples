import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdOnenoteNotebooksNotebookIdRoute,
  deleteUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  deleteUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  deleteUsersUserIdOnenoteOperationsOnenoteOperationIdRoute,
  deleteUsersUserIdOnenotePagesOnenotePageIdRoute,
  deleteUsersUserIdOnenoteResourcesOnenoteResourceIdRoute,
  deleteUsersUserIdOnenoteRoute,
  deleteUsersUserIdOnenoteSectionGroupsSectionGroupIdRoute,
  deleteUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  deleteUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  deleteUsersUserIdOnenoteSectionsOnenoteSectionIdRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  getUsersUserIdOnenoteNotebooksNotebookIdSectionsRoute,
  getUsersUserIdOnenoteNotebooksRoute,
  getUsersUserIdOnenoteOperationsOnenoteOperationIdRoute,
  getUsersUserIdOnenoteOperationsRoute,
  getUsersUserIdOnenotePagesOnenotePageIdContentRoute,
  getUsersUserIdOnenotePagesOnenotePageIdParentNotebookRoute,
  getUsersUserIdOnenotePagesOnenotePageIdParentSectionRoute,
  getUsersUserIdOnenotePagesOnenotePageIdRoute,
  getUsersUserIdOnenotePagesRoute,
  getUsersUserIdOnenoteResourcesOnenoteResourceIdContentRoute,
  getUsersUserIdOnenoteResourcesOnenoteResourceIdRoute,
  getUsersUserIdOnenoteResourcesRoute,
  getUsersUserIdOnenoteRoute,
  getUsersUserIdOnenoteSectionGroupsRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdParentNotebookRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdParentNotebookRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute,
  getUsersUserIdOnenoteSectionsOnenoteSectionIdRoute,
  getUsersUserIdOnenoteSectionsRoute,
  patchUsersUserIdOnenoteNotebooksNotebookIdRoute,
  patchUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute,
  patchUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute,
  patchUsersUserIdOnenoteOperationsOnenoteOperationIdRoute,
  patchUsersUserIdOnenotePagesOnenotePageIdRoute,
  patchUsersUserIdOnenoteResourcesOnenoteResourceIdRoute,
  patchUsersUserIdOnenoteRoute,
  patchUsersUserIdOnenoteSectionGroupsSectionGroupIdRoute,
  patchUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
  patchUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
  patchUsersUserIdOnenoteSectionsOnenoteSectionIdRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute,
  postUsersUserIdOnenoteNotebooksNotebookIdSectionsRoute,
  postUsersUserIdOnenoteNotebooksRoute,
  postUsersUserIdOnenoteOperationsRoute,
  postUsersUserIdOnenotePagesRoute,
  postUsersUserIdOnenoteResourcesRoute,
  postUsersUserIdOnenoteSectionGroupsRoute,
  postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
  postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsRoute,
  postUsersUserIdOnenoteSectionsOnenoteSectionIdPagesRoute,
  postUsersUserIdOnenoteSectionsRoute,
  putUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putUsersUserIdOnenotePagesOnenotePageIdContentRoute,
  putUsersUserIdOnenoteResourcesOnenoteResourceIdContentRoute,
  putUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
  putUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersOnenoteHandler = app
  .openapi(deleteUsersUserIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteNotebooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteNotebooksNotebookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteNotebooksNotebookIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteOperationsOnenoteOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenotePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenotePagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdOnenotePagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenotePagesOnenotePageIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenotePagesOnenotePageIdParentSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteResourcesOnenoteResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdOnenoteResourcesOnenoteResourceIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteSectionGroupsSectionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionGroupsSectionGroupId1Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdParentSectionGroupRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteSectionsOnenoteSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOnenoteSectionsOnenoteSectionIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentNotebookRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdOnenoteSectionsOnenoteSectionIdPagesOnenotePageIdParentSectionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdOnenoteSectionsOnenoteSectionIdParentNotebookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOnenoteSectionsOnenoteSectionIdParentSectionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
