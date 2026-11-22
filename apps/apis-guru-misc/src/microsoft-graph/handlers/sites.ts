import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesCountRoute,
  getSitesSiteIdColumnsCountRoute,
  getSitesSiteIdContentTypesContentTypeIdBaseTypesCountRoute,
  getSitesSiteIdContentTypesContentTypeIdColumnLinksCountRoute,
  getSitesSiteIdContentTypesContentTypeIdColumnPositionsCountRoute,
  getSitesSiteIdContentTypesContentTypeIdColumnsCountRoute,
  getSitesSiteIdContentTypesCountRoute,
  getSitesSiteIdDrivesCountRoute,
  getSitesSiteIdExternalColumnsCountRoute,
  getSitesSiteIdItemsCountRoute,
  getSitesSiteIdListsCountRoute,
  getSitesSiteIdListsListIdColumnsCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsCountRoute,
  getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsCountRoute,
  getSitesSiteIdListsListIdContentTypesCountRoute,
  getSitesSiteIdListsListIdItemsCountRoute,
  getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsCountRoute,
  getSitesSiteIdListsListIdItemsListItemIdVersionsCountRoute,
  getSitesSiteIdListsListIdOperationsCountRoute,
  getSitesSiteIdListsListIdSubscriptionsCountRoute,
  getSitesSiteIdOnenoteNotebooksCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsCountRoute,
  getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOnenoteOperationsCountRoute,
  getSitesSiteIdOnenotePagesCountRoute,
  getSitesSiteIdOnenoteResourcesCountRoute,
  getSitesSiteIdOnenoteSectionGroupsCountRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute,
  getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOnenoteSectionsCountRoute,
  getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesCountRoute,
  getSitesSiteIdOperationsCountRoute,
  getSitesSiteIdPermissionsCountRoute,
  getSitesSiteIdSitesCountRoute,
  getSitesSiteIdTermStoreGroupsCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenTermIdChildrenCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenTermIdRelationsCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdRelationsCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsTermIdChildrenCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsTermIdRelationsCountRoute,
  getSitesSiteIdTermStoresCountRoute,
  getSitesSiteIdTermStoreSetsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdChildrenCountRoute,
  getSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenCountRoute,
  getSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdChildrenTermIdRelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1RelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdRelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdTermsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenCountRoute,
  getSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoreSetsSetIdTermsTermIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenTermIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenTermIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsTermIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsTermIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1RelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdRelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdTermsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
  getSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdRelationsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdContentTypesContentTypeIdColumnPositionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdExternalColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdBaseTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnLinksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnPositionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdContentTypesContentTypeIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdDocumentSetVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdItemsListItemIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdListsListIdSubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionGroupsCountRoute,
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
  .openapi(
    getSitesSiteIdOnenoteNotebooksNotebookIdSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteNotebooksNotebookIdSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenotePagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteResourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdOnenoteSectionGroupsSectionGroupIdSectionsOnenoteSectionIdPagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdOnenoteSectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOnenoteSectionsOnenoteSectionIdPagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdChildrenTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoreGroupsGroupIdSetsSetIdTermsTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoreSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoreSetsSetIdChildrenTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdParentGroupSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1RelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoreSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoreSetsSetIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdTermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoreSetsSetIdTermsTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdGroupsGroupIdSetsSetIdTermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoresStoreIdSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdChildrenTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1ChildrenTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdParentGroupSetsSetId1TermsTermIdRelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdTermsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdChildrenTermId1RelationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSitesSiteIdTermStoresStoreIdSetsSetIdTermsTermIdRelationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
