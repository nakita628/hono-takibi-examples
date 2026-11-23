import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionIdCollectedMetadataCgmIdRoute,
  deleteCollectionsCollectionIdIndexRoute,
  deleteCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
  deleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
  deleteCommentsCommentIdIndexRoute,
  deleteDraftRegistrationsDraftIdIndexRoute,
  deleteNodesNodeIdContributorsUserIdIndexRoute,
  deleteNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
  deleteNodesNodeIdIndexRoute,
  deleteSchemaResponsesSchemaResponseIdRoute,
  getActionsIndexRoute,
  getAddonsIndexRoute,
  getCitationsStylesIndexRoute,
  getCitationsStylesStyleIdIndexRoute,
  getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute,
  getCollectionsCollectionIdCollectedMetadataCgmIdRoute,
  getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexRoute,
  getCollectionsCollectionIdCollectedMetadataIndexRoute,
  getCollectionsCollectionIdIndexRoute,
  getCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
  getCollectionsCollectionIdLinkedNodesRoute,
  getCollectionsCollectionIdLinkedPreprintsIndexRoute,
  getCollectionsCollectionIdLinkedRegistrationsIndexRoute,
  getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
  getCollectionsIndexRoute,
  getCommentsCommentIdIndexRoute,
  getDraftRegistrationsDraftIdContributorsIndexRoute,
  getDraftRegistrationsDraftIdContributorsUserIdIndexRoute,
  getDraftRegistrationsDraftIdIndexRoute,
  getDraftRegistrationsDraftIdInstitutionsIndexRoute,
  getDraftRegistrationsDraftIdSubjectsIndexRoute,
  getDraftRegistrationsIndexRoute,
  getFilesFileIdIndexRoute,
  getFilesFileIdVersionsIndexRoute,
  getFilesFileIdVersionsVersionIdIndexRoute,
  getInstitutionsIndexRoute,
  getInstitutionsInstitutionIdIndexRoute,
  getInstitutionsInstitutionIdNodesIndexRoute,
  getInstitutionsInstitutionIdRegistrationsIndexRoute,
  getInstitutionsInstitutionIdUsersIndexRoute,
  getLicenseLicenseIdIndexRoute,
  getLicensesIndexRoute,
  getLogsLogIdIndexRoute,
  getNodesIndexRoute,
  getNodesNodeIdAddonsIndexRoute,
  getNodesNodeIdAddonsProviderFoldersIndexRoute,
  getNodesNodeIdAddonsProviderIndexRoute,
  getNodesNodeIdChildrenIndexRoute,
  getNodesNodeIdCitationIndexRoute,
  getNodesNodeIdCitationStyleIdIndexRoute,
  getNodesNodeIdCommentsIndexRoute,
  getNodesNodeIdContributorsIndexRoute,
  getNodesNodeIdContributorsUserIdIndexRoute,
  getNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
  getNodesNodeIdDraftRegistrationsIndexRoute,
  getNodesNodeIdFilesIndexRoute,
  getNodesNodeIdFilesProviderIndexRoute,
  getNodesNodeIdFilesProviderPathIndexRoute,
  getNodesNodeIdFilesProvidersProviderIndexRoute,
  getNodesNodeIdForksIndexRoute,
  getNodesNodeIdIdentifiersIndexRoute,
  getNodesNodeIdIndexRoute,
  getNodesNodeIdInstitutionsIndexRoute,
  getNodesNodeIdLinkedNodesIndexRoute,
  getNodesNodeIdLogsIndexRoute,
  getNodesNodeIdPreprintsIndexRoute,
  getNodesNodeIdRegistrationsIndexRoute,
  getNodesNodeIdViewOnlyLinksIndexRoute,
  getNodesNodeIdViewOnlyLinksLinkIdIndexRoute,
  getNodesNodeIdWikisIndexRoute,
  getPreprintProvidersIndexRoute,
  getPreprintProvidersPreprintProviderIdIndexRoute,
  getPreprintProvidersPreprintProviderIdLicensesIndexRoute,
  getPreprintProvidersPreprintProviderIdPreprintsIndexRoute,
  getPreprintProvidersPreprintProviderIdTaxonomiesIndexRoute,
  getPreprintsIndexRoute,
  getPreprintsPreprintIdBibliographicContributorsIndexRoute,
  getPreprintsPreprintIdCitationIndexRoute,
  getPreprintsPreprintIdCitationStyleIdIndexRoute,
  getPreprintsPreprintIdContributorsIndexRoute,
  getPreprintsPreprintIdContributorsUserIdIndexRoute,
  getPreprintsPreprintIdIndexRoute,
  getRegistrationsIndexRoute,
  getRegistrationsRegistrationIdChildrenIndexRoute,
  getRegistrationsRegistrationIdCitationsCitationIdIndexRoute,
  getRegistrationsRegistrationIdCitationsIndexRoute,
  getRegistrationsRegistrationIdCommentsIndexRoute,
  getRegistrationsRegistrationIdContributorsIndexRoute,
  getRegistrationsRegistrationIdContributorsUserIdIndexRoute,
  getRegistrationsRegistrationIdFilesIndexRoute,
  getRegistrationsRegistrationIdFilesProviderIndexRoute,
  getRegistrationsRegistrationIdFilesProviderPathIndexRoute,
  getRegistrationsRegistrationIdForksIndexRoute,
  getRegistrationsRegistrationIdIdentifiersIndexRoute,
  getRegistrationsRegistrationIdIndexRoute,
  getRegistrationsRegistrationIdInstitutionsIndexRoute,
  getRegistrationsRegistrationIdLinkedNodesIndexRoute,
  getRegistrationsRegistrationIdLogsIndexRoute,
  getRegistrationsRegistrationIdViewOnlyLinksIndexRoute,
  getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexRoute,
  getRegistrationsRegistrationIdWikisIndexRoute,
  getRoute,
  getSchemaResponsesIndexRoute,
  getSchemaResponsesSchemaResponseIdActionsIndexRoute,
  getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRoute,
  getSchemaResponsesSchemaResponseIdRoute,
  getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRoute,
  getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRoute,
  getSchemasRegistrationsIndexRoute,
  getSchemasRegistrationsRegistrationSchemaIdRoute,
  getTaxonomiesIndexRoute,
  getTaxonomiesTaxonomyIdIndexRoute,
  getUsersIndexRoute,
  getUsersUserIdAddonsIndexRoute,
  getUsersUserIdAddonsProviderAccountsAccountIdIndexRoute,
  getUsersUserIdAddonsProviderAccountsIndexRoute,
  getUsersUserIdAddonsProviderIndexRoute,
  getUsersUserIdIndexRoute,
  getUsersUserIdInstitutionsIndexRoute,
  getUsersUserIdNodesIndexRoute,
  getUsersUserIdPreprintsIndexRoute,
  getUsersUserIdRegistrationsIndexRoute,
  getViewOnlyLinksLinkIdIndexRoute,
  getViewOnlyLinksLinkIdNodesIndexRoute,
  getWikisWikiIdContentIndexRoute,
  getWikisWikiIdIndexRoute,
  patchDraftRegistrationsDraftIdIndexRoute,
  patchFilesFileIdIndexRoute,
  patchNodesNodeIdAddonsProviderIndexRoute,
  patchNodesNodeIdContributorsUserIdIndexRoute,
  patchNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
  patchNodesNodeIdIndexRoute,
  patchPreprintsPreprintIdIndexRoute,
  patchRegistrationsRegistrationIdIndexRoute,
  patchSchemaResponsesSchemaResponseIdRoute,
  patchUsersUserIdIndexRoute,
  postCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute,
  postCollectionsCollectionIdCollectedMetadataCgmIdRoute,
  postCollectionsCollectionIdCollectedMetadataIndexRoute,
  postCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
  postCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
  postCollectionsIndexRoute,
  postDraftRegistrationsDraftIdContributorsIndexRoute,
  postDraftRegistrationsIndexRoute,
  postNodesIndexRoute,
  postNodesNodeIdChildrenIndexRoute,
  postNodesNodeIdCommentsIndexRoute,
  postNodesNodeIdContributorsIndexRoute,
  postNodesNodeIdDraftRegistrationsIndexRoute,
  postNodesNodeIdForksIndexRoute,
  postPreprintsIndexRoute,
  postPreprintsPreprintIdContributorsIndexRoute,
  postRegistrationsRegistrationIdForksIndexRoute,
  postSchemaResponsesIndexRoute,
  postSchemaResponsesSchemaResponseIdActionsIndexRoute,
  putCommentsCommentIdIndexRoute,
} from './routes'
import {
  deleteCollectionsCollectionIdCollectedMetadataCgmIdRouteHandler,
  deleteCollectionsCollectionIdIndexRouteHandler,
  deleteCollectionsCollectionIdLinkedNodesRelationshipsIndexRouteHandler,
  deleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRouteHandler,
  deleteCommentsCommentIdIndexRouteHandler,
  deleteDraftRegistrationsDraftIdIndexRouteHandler,
  deleteNodesNodeIdContributorsUserIdIndexRouteHandler,
  deleteNodesNodeIdDraftRegistrationsDraftIdIndexRouteHandler,
  deleteNodesNodeIdIndexRouteHandler,
  deleteSchemaResponsesSchemaResponseIdRouteHandler,
  getActionsIndexRouteHandler,
  getAddonsIndexRouteHandler,
  getCitationsStylesIndexRouteHandler,
  getCitationsStylesStyleIdIndexRouteHandler,
  getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRouteHandler,
  getCollectionsCollectionIdCollectedMetadataCgmIdRouteHandler,
  getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexRouteHandler,
  getCollectionsCollectionIdCollectedMetadataIndexRouteHandler,
  getCollectionsCollectionIdIndexRouteHandler,
  getCollectionsCollectionIdLinkedNodesRelationshipsIndexRouteHandler,
  getCollectionsCollectionIdLinkedNodesRouteHandler,
  getCollectionsCollectionIdLinkedPreprintsIndexRouteHandler,
  getCollectionsCollectionIdLinkedRegistrationsIndexRouteHandler,
  getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRouteHandler,
  getCollectionsIndexRouteHandler,
  getCommentsCommentIdIndexRouteHandler,
  getDraftRegistrationsDraftIdContributorsIndexRouteHandler,
  getDraftRegistrationsDraftIdContributorsUserIdIndexRouteHandler,
  getDraftRegistrationsDraftIdIndexRouteHandler,
  getDraftRegistrationsDraftIdInstitutionsIndexRouteHandler,
  getDraftRegistrationsDraftIdSubjectsIndexRouteHandler,
  getDraftRegistrationsIndexRouteHandler,
  getFilesFileIdIndexRouteHandler,
  getFilesFileIdVersionsIndexRouteHandler,
  getFilesFileIdVersionsVersionIdIndexRouteHandler,
  getInstitutionsIndexRouteHandler,
  getInstitutionsInstitutionIdIndexRouteHandler,
  getInstitutionsInstitutionIdNodesIndexRouteHandler,
  getInstitutionsInstitutionIdRegistrationsIndexRouteHandler,
  getInstitutionsInstitutionIdUsersIndexRouteHandler,
  getLicenseLicenseIdIndexRouteHandler,
  getLicensesIndexRouteHandler,
  getLogsLogIdIndexRouteHandler,
  getNodesIndexRouteHandler,
  getNodesNodeIdAddonsIndexRouteHandler,
  getNodesNodeIdAddonsProviderFoldersIndexRouteHandler,
  getNodesNodeIdAddonsProviderIndexRouteHandler,
  getNodesNodeIdChildrenIndexRouteHandler,
  getNodesNodeIdCitationIndexRouteHandler,
  getNodesNodeIdCitationStyleIdIndexRouteHandler,
  getNodesNodeIdCommentsIndexRouteHandler,
  getNodesNodeIdContributorsIndexRouteHandler,
  getNodesNodeIdContributorsUserIdIndexRouteHandler,
  getNodesNodeIdDraftRegistrationsDraftIdIndexRouteHandler,
  getNodesNodeIdDraftRegistrationsIndexRouteHandler,
  getNodesNodeIdFilesIndexRouteHandler,
  getNodesNodeIdFilesProviderIndexRouteHandler,
  getNodesNodeIdFilesProviderPathIndexRouteHandler,
  getNodesNodeIdFilesProvidersProviderIndexRouteHandler,
  getNodesNodeIdForksIndexRouteHandler,
  getNodesNodeIdIdentifiersIndexRouteHandler,
  getNodesNodeIdIndexRouteHandler,
  getNodesNodeIdInstitutionsIndexRouteHandler,
  getNodesNodeIdLinkedNodesIndexRouteHandler,
  getNodesNodeIdLogsIndexRouteHandler,
  getNodesNodeIdPreprintsIndexRouteHandler,
  getNodesNodeIdRegistrationsIndexRouteHandler,
  getNodesNodeIdViewOnlyLinksIndexRouteHandler,
  getNodesNodeIdViewOnlyLinksLinkIdIndexRouteHandler,
  getNodesNodeIdWikisIndexRouteHandler,
  getPreprintProvidersIndexRouteHandler,
  getPreprintProvidersPreprintProviderIdIndexRouteHandler,
  getPreprintProvidersPreprintProviderIdLicensesIndexRouteHandler,
  getPreprintProvidersPreprintProviderIdPreprintsIndexRouteHandler,
  getPreprintProvidersPreprintProviderIdTaxonomiesIndexRouteHandler,
  getPreprintsIndexRouteHandler,
  getPreprintsPreprintIdBibliographicContributorsIndexRouteHandler,
  getPreprintsPreprintIdCitationIndexRouteHandler,
  getPreprintsPreprintIdCitationStyleIdIndexRouteHandler,
  getPreprintsPreprintIdContributorsIndexRouteHandler,
  getPreprintsPreprintIdContributorsUserIdIndexRouteHandler,
  getPreprintsPreprintIdIndexRouteHandler,
  getRegistrationsIndexRouteHandler,
  getRegistrationsRegistrationIdChildrenIndexRouteHandler,
  getRegistrationsRegistrationIdCitationsCitationIdIndexRouteHandler,
  getRegistrationsRegistrationIdCitationsIndexRouteHandler,
  getRegistrationsRegistrationIdCommentsIndexRouteHandler,
  getRegistrationsRegistrationIdContributorsIndexRouteHandler,
  getRegistrationsRegistrationIdContributorsUserIdIndexRouteHandler,
  getRegistrationsRegistrationIdFilesIndexRouteHandler,
  getRegistrationsRegistrationIdFilesProviderIndexRouteHandler,
  getRegistrationsRegistrationIdFilesProviderPathIndexRouteHandler,
  getRegistrationsRegistrationIdForksIndexRouteHandler,
  getRegistrationsRegistrationIdIdentifiersIndexRouteHandler,
  getRegistrationsRegistrationIdIndexRouteHandler,
  getRegistrationsRegistrationIdInstitutionsIndexRouteHandler,
  getRegistrationsRegistrationIdLinkedNodesIndexRouteHandler,
  getRegistrationsRegistrationIdLogsIndexRouteHandler,
  getRegistrationsRegistrationIdViewOnlyLinksIndexRouteHandler,
  getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexRouteHandler,
  getRegistrationsRegistrationIdWikisIndexRouteHandler,
  getRouteHandler,
  getSchemaResponsesIndexRouteHandler,
  getSchemaResponsesSchemaResponseIdActionsIndexRouteHandler,
  getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRouteHandler,
  getSchemaResponsesSchemaResponseIdRouteHandler,
  getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRouteHandler,
  getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRouteHandler,
  getSchemasRegistrationsIndexRouteHandler,
  getSchemasRegistrationsRegistrationSchemaIdRouteHandler,
  getTaxonomiesIndexRouteHandler,
  getTaxonomiesTaxonomyIdIndexRouteHandler,
  getUsersIndexRouteHandler,
  getUsersUserIdAddonsIndexRouteHandler,
  getUsersUserIdAddonsProviderAccountsAccountIdIndexRouteHandler,
  getUsersUserIdAddonsProviderAccountsIndexRouteHandler,
  getUsersUserIdAddonsProviderIndexRouteHandler,
  getUsersUserIdIndexRouteHandler,
  getUsersUserIdInstitutionsIndexRouteHandler,
  getUsersUserIdNodesIndexRouteHandler,
  getUsersUserIdPreprintsIndexRouteHandler,
  getUsersUserIdRegistrationsIndexRouteHandler,
  getViewOnlyLinksLinkIdIndexRouteHandler,
  getViewOnlyLinksLinkIdNodesIndexRouteHandler,
  getWikisWikiIdContentIndexRouteHandler,
  getWikisWikiIdIndexRouteHandler,
  patchDraftRegistrationsDraftIdIndexRouteHandler,
  patchFilesFileIdIndexRouteHandler,
  patchNodesNodeIdAddonsProviderIndexRouteHandler,
  patchNodesNodeIdContributorsUserIdIndexRouteHandler,
  patchNodesNodeIdDraftRegistrationsDraftIdIndexRouteHandler,
  patchNodesNodeIdIndexRouteHandler,
  patchPreprintsPreprintIdIndexRouteHandler,
  patchRegistrationsRegistrationIdIndexRouteHandler,
  patchSchemaResponsesSchemaResponseIdRouteHandler,
  patchUsersUserIdIndexRouteHandler,
  postCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRouteHandler,
  postCollectionsCollectionIdCollectedMetadataCgmIdRouteHandler,
  postCollectionsCollectionIdCollectedMetadataIndexRouteHandler,
  postCollectionsCollectionIdLinkedNodesRelationshipsIndexRouteHandler,
  postCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRouteHandler,
  postCollectionsIndexRouteHandler,
  postDraftRegistrationsDraftIdContributorsIndexRouteHandler,
  postDraftRegistrationsIndexRouteHandler,
  postNodesIndexRouteHandler,
  postNodesNodeIdChildrenIndexRouteHandler,
  postNodesNodeIdCommentsIndexRouteHandler,
  postNodesNodeIdContributorsIndexRouteHandler,
  postNodesNodeIdDraftRegistrationsIndexRouteHandler,
  postNodesNodeIdForksIndexRouteHandler,
  postPreprintsIndexRouteHandler,
  postPreprintsPreprintIdContributorsIndexRouteHandler,
  postRegistrationsRegistrationIdForksIndexRouteHandler,
  postSchemaResponsesIndexRouteHandler,
  postSchemaResponsesSchemaResponseIdActionsIndexRouteHandler,
  putCommentsCommentIdIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getActionsIndexRoute, getActionsIndexRouteHandler)
  .openapi(getAddonsIndexRoute, getAddonsIndexRouteHandler)
  .openapi(getCitationsStylesIndexRoute, getCitationsStylesIndexRouteHandler)
  .openapi(getCitationsStylesStyleIdIndexRoute, getCitationsStylesStyleIdIndexRouteHandler)
  .openapi(getCollectionsIndexRoute, getCollectionsIndexRouteHandler)
  .openapi(postCollectionsIndexRoute, postCollectionsIndexRouteHandler)
  .openapi(deleteCollectionsCollectionIdIndexRoute, deleteCollectionsCollectionIdIndexRouteHandler)
  .openapi(getCollectionsCollectionIdIndexRoute, getCollectionsCollectionIdIndexRouteHandler)
  .openapi(
    getCollectionsCollectionIdCollectedMetadataIndexRoute,
    getCollectionsCollectionIdCollectedMetadataIndexRouteHandler,
  )
  .openapi(
    postCollectionsCollectionIdCollectedMetadataIndexRoute,
    postCollectionsCollectionIdCollectedMetadataIndexRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionIdCollectedMetadataCgmIdRoute,
    deleteCollectionsCollectionIdCollectedMetadataCgmIdRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdCollectedMetadataCgmIdRoute,
    getCollectionsCollectionIdCollectedMetadataCgmIdRouteHandler,
  )
  .openapi(
    postCollectionsCollectionIdCollectedMetadataCgmIdRoute,
    postCollectionsCollectionIdCollectedMetadataCgmIdRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute,
    getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRouteHandler,
  )
  .openapi(
    postCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute,
    postCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexRoute,
    getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdLinkedNodesRoute,
    getCollectionsCollectionIdLinkedNodesRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
    deleteCollectionsCollectionIdLinkedNodesRelationshipsIndexRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
    getCollectionsCollectionIdLinkedNodesRelationshipsIndexRouteHandler,
  )
  .openapi(
    postCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
    postCollectionsCollectionIdLinkedNodesRelationshipsIndexRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdLinkedPreprintsIndexRoute,
    getCollectionsCollectionIdLinkedPreprintsIndexRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdLinkedRegistrationsIndexRoute,
    getCollectionsCollectionIdLinkedRegistrationsIndexRouteHandler,
  )
  .openapi(
    deleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
    deleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRouteHandler,
  )
  .openapi(
    getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
    getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRouteHandler,
  )
  .openapi(
    postCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
    postCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRouteHandler,
  )
  .openapi(deleteCommentsCommentIdIndexRoute, deleteCommentsCommentIdIndexRouteHandler)
  .openapi(getCommentsCommentIdIndexRoute, getCommentsCommentIdIndexRouteHandler)
  .openapi(putCommentsCommentIdIndexRoute, putCommentsCommentIdIndexRouteHandler)
  .openapi(getDraftRegistrationsIndexRoute, getDraftRegistrationsIndexRouteHandler)
  .openapi(postDraftRegistrationsIndexRoute, postDraftRegistrationsIndexRouteHandler)
  .openapi(
    deleteDraftRegistrationsDraftIdIndexRoute,
    deleteDraftRegistrationsDraftIdIndexRouteHandler,
  )
  .openapi(getDraftRegistrationsDraftIdIndexRoute, getDraftRegistrationsDraftIdIndexRouteHandler)
  .openapi(
    patchDraftRegistrationsDraftIdIndexRoute,
    patchDraftRegistrationsDraftIdIndexRouteHandler,
  )
  .openapi(
    getDraftRegistrationsDraftIdContributorsIndexRoute,
    getDraftRegistrationsDraftIdContributorsIndexRouteHandler,
  )
  .openapi(
    postDraftRegistrationsDraftIdContributorsIndexRoute,
    postDraftRegistrationsDraftIdContributorsIndexRouteHandler,
  )
  .openapi(
    getDraftRegistrationsDraftIdContributorsUserIdIndexRoute,
    getDraftRegistrationsDraftIdContributorsUserIdIndexRouteHandler,
  )
  .openapi(
    getDraftRegistrationsDraftIdInstitutionsIndexRoute,
    getDraftRegistrationsDraftIdInstitutionsIndexRouteHandler,
  )
  .openapi(
    getDraftRegistrationsDraftIdSubjectsIndexRoute,
    getDraftRegistrationsDraftIdSubjectsIndexRouteHandler,
  )
  .openapi(getFilesFileIdIndexRoute, getFilesFileIdIndexRouteHandler)
  .openapi(patchFilesFileIdIndexRoute, patchFilesFileIdIndexRouteHandler)
  .openapi(getFilesFileIdVersionsIndexRoute, getFilesFileIdVersionsIndexRouteHandler)
  .openapi(
    getFilesFileIdVersionsVersionIdIndexRoute,
    getFilesFileIdVersionsVersionIdIndexRouteHandler,
  )
  .openapi(getInstitutionsIndexRoute, getInstitutionsIndexRouteHandler)
  .openapi(getInstitutionsInstitutionIdIndexRoute, getInstitutionsInstitutionIdIndexRouteHandler)
  .openapi(
    getInstitutionsInstitutionIdNodesIndexRoute,
    getInstitutionsInstitutionIdNodesIndexRouteHandler,
  )
  .openapi(
    getInstitutionsInstitutionIdRegistrationsIndexRoute,
    getInstitutionsInstitutionIdRegistrationsIndexRouteHandler,
  )
  .openapi(
    getInstitutionsInstitutionIdUsersIndexRoute,
    getInstitutionsInstitutionIdUsersIndexRouteHandler,
  )
  .openapi(getLicenseLicenseIdIndexRoute, getLicenseLicenseIdIndexRouteHandler)
  .openapi(getLicensesIndexRoute, getLicensesIndexRouteHandler)
  .openapi(getLogsLogIdIndexRoute, getLogsLogIdIndexRouteHandler)
  .openapi(getNodesIndexRoute, getNodesIndexRouteHandler)
  .openapi(postNodesIndexRoute, postNodesIndexRouteHandler)
  .openapi(deleteNodesNodeIdIndexRoute, deleteNodesNodeIdIndexRouteHandler)
  .openapi(getNodesNodeIdIndexRoute, getNodesNodeIdIndexRouteHandler)
  .openapi(patchNodesNodeIdIndexRoute, patchNodesNodeIdIndexRouteHandler)
  .openapi(getNodesNodeIdAddonsIndexRoute, getNodesNodeIdAddonsIndexRouteHandler)
  .openapi(getNodesNodeIdAddonsProviderIndexRoute, getNodesNodeIdAddonsProviderIndexRouteHandler)
  .openapi(
    patchNodesNodeIdAddonsProviderIndexRoute,
    patchNodesNodeIdAddonsProviderIndexRouteHandler,
  )
  .openapi(
    getNodesNodeIdAddonsProviderFoldersIndexRoute,
    getNodesNodeIdAddonsProviderFoldersIndexRouteHandler,
  )
  .openapi(getNodesNodeIdChildrenIndexRoute, getNodesNodeIdChildrenIndexRouteHandler)
  .openapi(postNodesNodeIdChildrenIndexRoute, postNodesNodeIdChildrenIndexRouteHandler)
  .openapi(getNodesNodeIdCitationIndexRoute, getNodesNodeIdCitationIndexRouteHandler)
  .openapi(getNodesNodeIdCitationStyleIdIndexRoute, getNodesNodeIdCitationStyleIdIndexRouteHandler)
  .openapi(getNodesNodeIdCommentsIndexRoute, getNodesNodeIdCommentsIndexRouteHandler)
  .openapi(postNodesNodeIdCommentsIndexRoute, postNodesNodeIdCommentsIndexRouteHandler)
  .openapi(getNodesNodeIdContributorsIndexRoute, getNodesNodeIdContributorsIndexRouteHandler)
  .openapi(postNodesNodeIdContributorsIndexRoute, postNodesNodeIdContributorsIndexRouteHandler)
  .openapi(
    deleteNodesNodeIdContributorsUserIdIndexRoute,
    deleteNodesNodeIdContributorsUserIdIndexRouteHandler,
  )
  .openapi(
    getNodesNodeIdContributorsUserIdIndexRoute,
    getNodesNodeIdContributorsUserIdIndexRouteHandler,
  )
  .openapi(
    patchNodesNodeIdContributorsUserIdIndexRoute,
    patchNodesNodeIdContributorsUserIdIndexRouteHandler,
  )
  .openapi(
    getNodesNodeIdDraftRegistrationsIndexRoute,
    getNodesNodeIdDraftRegistrationsIndexRouteHandler,
  )
  .openapi(
    postNodesNodeIdDraftRegistrationsIndexRoute,
    postNodesNodeIdDraftRegistrationsIndexRouteHandler,
  )
  .openapi(
    deleteNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
    deleteNodesNodeIdDraftRegistrationsDraftIdIndexRouteHandler,
  )
  .openapi(
    getNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
    getNodesNodeIdDraftRegistrationsDraftIdIndexRouteHandler,
  )
  .openapi(
    patchNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
    patchNodesNodeIdDraftRegistrationsDraftIdIndexRouteHandler,
  )
  .openapi(getNodesNodeIdFilesIndexRoute, getNodesNodeIdFilesIndexRouteHandler)
  .openapi(
    getNodesNodeIdFilesProvidersProviderIndexRoute,
    getNodesNodeIdFilesProvidersProviderIndexRouteHandler,
  )
  .openapi(getNodesNodeIdFilesProviderIndexRoute, getNodesNodeIdFilesProviderIndexRouteHandler)
  .openapi(
    getNodesNodeIdFilesProviderPathIndexRoute,
    getNodesNodeIdFilesProviderPathIndexRouteHandler,
  )
  .openapi(getNodesNodeIdForksIndexRoute, getNodesNodeIdForksIndexRouteHandler)
  .openapi(postNodesNodeIdForksIndexRoute, postNodesNodeIdForksIndexRouteHandler)
  .openapi(getNodesNodeIdIdentifiersIndexRoute, getNodesNodeIdIdentifiersIndexRouteHandler)
  .openapi(getNodesNodeIdInstitutionsIndexRoute, getNodesNodeIdInstitutionsIndexRouteHandler)
  .openapi(getNodesNodeIdLinkedNodesIndexRoute, getNodesNodeIdLinkedNodesIndexRouteHandler)
  .openapi(getNodesNodeIdLogsIndexRoute, getNodesNodeIdLogsIndexRouteHandler)
  .openapi(getNodesNodeIdPreprintsIndexRoute, getNodesNodeIdPreprintsIndexRouteHandler)
  .openapi(getNodesNodeIdRegistrationsIndexRoute, getNodesNodeIdRegistrationsIndexRouteHandler)
  .openapi(getNodesNodeIdViewOnlyLinksIndexRoute, getNodesNodeIdViewOnlyLinksIndexRouteHandler)
  .openapi(
    getNodesNodeIdViewOnlyLinksLinkIdIndexRoute,
    getNodesNodeIdViewOnlyLinksLinkIdIndexRouteHandler,
  )
  .openapi(getNodesNodeIdWikisIndexRoute, getNodesNodeIdWikisIndexRouteHandler)
  .openapi(getPreprintProvidersIndexRoute, getPreprintProvidersIndexRouteHandler)
  .openapi(
    getPreprintProvidersPreprintProviderIdIndexRoute,
    getPreprintProvidersPreprintProviderIdIndexRouteHandler,
  )
  .openapi(
    getPreprintProvidersPreprintProviderIdLicensesIndexRoute,
    getPreprintProvidersPreprintProviderIdLicensesIndexRouteHandler,
  )
  .openapi(
    getPreprintProvidersPreprintProviderIdPreprintsIndexRoute,
    getPreprintProvidersPreprintProviderIdPreprintsIndexRouteHandler,
  )
  .openapi(
    getPreprintProvidersPreprintProviderIdTaxonomiesIndexRoute,
    getPreprintProvidersPreprintProviderIdTaxonomiesIndexRouteHandler,
  )
  .openapi(getPreprintsIndexRoute, getPreprintsIndexRouteHandler)
  .openapi(postPreprintsIndexRoute, postPreprintsIndexRouteHandler)
  .openapi(getPreprintsPreprintIdIndexRoute, getPreprintsPreprintIdIndexRouteHandler)
  .openapi(patchPreprintsPreprintIdIndexRoute, patchPreprintsPreprintIdIndexRouteHandler)
  .openapi(
    getPreprintsPreprintIdBibliographicContributorsIndexRoute,
    getPreprintsPreprintIdBibliographicContributorsIndexRouteHandler,
  )
  .openapi(
    getPreprintsPreprintIdCitationIndexRoute,
    getPreprintsPreprintIdCitationIndexRouteHandler,
  )
  .openapi(
    getPreprintsPreprintIdCitationStyleIdIndexRoute,
    getPreprintsPreprintIdCitationStyleIdIndexRouteHandler,
  )
  .openapi(
    getPreprintsPreprintIdContributorsIndexRoute,
    getPreprintsPreprintIdContributorsIndexRouteHandler,
  )
  .openapi(
    postPreprintsPreprintIdContributorsIndexRoute,
    postPreprintsPreprintIdContributorsIndexRouteHandler,
  )
  .openapi(
    getPreprintsPreprintIdContributorsUserIdIndexRoute,
    getPreprintsPreprintIdContributorsUserIdIndexRouteHandler,
  )
  .openapi(getRegistrationsIndexRoute, getRegistrationsIndexRouteHandler)
  .openapi(
    getRegistrationsRegistrationIdIndexRoute,
    getRegistrationsRegistrationIdIndexRouteHandler,
  )
  .openapi(
    patchRegistrationsRegistrationIdIndexRoute,
    patchRegistrationsRegistrationIdIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdChildrenIndexRoute,
    getRegistrationsRegistrationIdChildrenIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdCitationsIndexRoute,
    getRegistrationsRegistrationIdCitationsIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdCitationsCitationIdIndexRoute,
    getRegistrationsRegistrationIdCitationsCitationIdIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdCommentsIndexRoute,
    getRegistrationsRegistrationIdCommentsIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdContributorsIndexRoute,
    getRegistrationsRegistrationIdContributorsIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdContributorsUserIdIndexRoute,
    getRegistrationsRegistrationIdContributorsUserIdIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdFilesIndexRoute,
    getRegistrationsRegistrationIdFilesIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdFilesProviderIndexRoute,
    getRegistrationsRegistrationIdFilesProviderIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdFilesProviderPathIndexRoute,
    getRegistrationsRegistrationIdFilesProviderPathIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdForksIndexRoute,
    getRegistrationsRegistrationIdForksIndexRouteHandler,
  )
  .openapi(
    postRegistrationsRegistrationIdForksIndexRoute,
    postRegistrationsRegistrationIdForksIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdIdentifiersIndexRoute,
    getRegistrationsRegistrationIdIdentifiersIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdInstitutionsIndexRoute,
    getRegistrationsRegistrationIdInstitutionsIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdLinkedNodesIndexRoute,
    getRegistrationsRegistrationIdLinkedNodesIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdLogsIndexRoute,
    getRegistrationsRegistrationIdLogsIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdViewOnlyLinksIndexRoute,
    getRegistrationsRegistrationIdViewOnlyLinksIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexRoute,
    getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexRouteHandler,
  )
  .openapi(
    getRegistrationsRegistrationIdWikisIndexRoute,
    getRegistrationsRegistrationIdWikisIndexRouteHandler,
  )
  .openapi(getSchemaResponsesIndexRoute, getSchemaResponsesIndexRouteHandler)
  .openapi(postSchemaResponsesIndexRoute, postSchemaResponsesIndexRouteHandler)
  .openapi(
    deleteSchemaResponsesSchemaResponseIdRoute,
    deleteSchemaResponsesSchemaResponseIdRouteHandler,
  )
  .openapi(getSchemaResponsesSchemaResponseIdRoute, getSchemaResponsesSchemaResponseIdRouteHandler)
  .openapi(
    patchSchemaResponsesSchemaResponseIdRoute,
    patchSchemaResponsesSchemaResponseIdRouteHandler,
  )
  .openapi(
    getSchemaResponsesSchemaResponseIdActionsIndexRoute,
    getSchemaResponsesSchemaResponseIdActionsIndexRouteHandler,
  )
  .openapi(
    postSchemaResponsesSchemaResponseIdActionsIndexRoute,
    postSchemaResponsesSchemaResponseIdActionsIndexRouteHandler,
  )
  .openapi(
    getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRoute,
    getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRouteHandler,
  )
  .openapi(
    getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRoute,
    getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRouteHandler,
  )
  .openapi(
    getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRoute,
    getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRouteHandler,
  )
  .openapi(getSchemasRegistrationsIndexRoute, getSchemasRegistrationsIndexRouteHandler)
  .openapi(
    getSchemasRegistrationsRegistrationSchemaIdRoute,
    getSchemasRegistrationsRegistrationSchemaIdRouteHandler,
  )
  .openapi(getTaxonomiesIndexRoute, getTaxonomiesIndexRouteHandler)
  .openapi(getTaxonomiesTaxonomyIdIndexRoute, getTaxonomiesTaxonomyIdIndexRouteHandler)
  .openapi(getUsersIndexRoute, getUsersIndexRouteHandler)
  .openapi(getUsersUserIdIndexRoute, getUsersUserIdIndexRouteHandler)
  .openapi(patchUsersUserIdIndexRoute, patchUsersUserIdIndexRouteHandler)
  .openapi(getUsersUserIdAddonsIndexRoute, getUsersUserIdAddonsIndexRouteHandler)
  .openapi(getUsersUserIdAddonsProviderIndexRoute, getUsersUserIdAddonsProviderIndexRouteHandler)
  .openapi(
    getUsersUserIdAddonsProviderAccountsIndexRoute,
    getUsersUserIdAddonsProviderAccountsIndexRouteHandler,
  )
  .openapi(
    getUsersUserIdAddonsProviderAccountsAccountIdIndexRoute,
    getUsersUserIdAddonsProviderAccountsAccountIdIndexRouteHandler,
  )
  .openapi(getUsersUserIdInstitutionsIndexRoute, getUsersUserIdInstitutionsIndexRouteHandler)
  .openapi(getUsersUserIdNodesIndexRoute, getUsersUserIdNodesIndexRouteHandler)
  .openapi(getUsersUserIdPreprintsIndexRoute, getUsersUserIdPreprintsIndexRouteHandler)
  .openapi(getUsersUserIdRegistrationsIndexRoute, getUsersUserIdRegistrationsIndexRouteHandler)
  .openapi(getViewOnlyLinksLinkIdIndexRoute, getViewOnlyLinksLinkIdIndexRouteHandler)
  .openapi(getViewOnlyLinksLinkIdNodesIndexRoute, getViewOnlyLinksLinkIdNodesIndexRouteHandler)
  .openapi(getWikisWikiIdIndexRoute, getWikisWikiIdIndexRouteHandler)
  .openapi(getWikisWikiIdContentIndexRoute, getWikisWikiIdContentIndexRouteHandler)

export default app
