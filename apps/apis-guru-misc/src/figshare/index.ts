import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountArticlesArticleIdAuthorsAuthorIdRoute,
  deleteAccountArticlesArticleIdCategoriesCategoryIdRoute,
  deleteAccountArticlesArticleIdConfidentialityRoute,
  deleteAccountArticlesArticleIdEmbargoRoute,
  deleteAccountArticlesArticleIdFilesFileIdRoute,
  deleteAccountArticlesArticleIdPrivateLinksLinkIdRoute,
  deleteAccountArticlesArticleIdRoute,
  deleteAccountCollectionsCollectionIdArticlesArticleIdRoute,
  deleteAccountCollectionsCollectionIdAuthorsAuthorIdRoute,
  deleteAccountCollectionsCollectionIdCategoriesCategoryIdRoute,
  deleteAccountCollectionsCollectionIdPrivateLinksLinkIdRoute,
  deleteAccountCollectionsCollectionIdRoute,
  deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRoute,
  deleteAccountProjectsProjectIdArticlesArticleIdRoute,
  deleteAccountProjectsProjectIdCollaboratorsUserIdRoute,
  deleteAccountProjectsProjectIdNotesNoteIdRoute,
  deleteAccountProjectsProjectIdRoute,
  getAccountArticlesArticleIdAuthorsRoute,
  getAccountArticlesArticleIdCategoriesRoute,
  getAccountArticlesArticleIdConfidentialityRoute,
  getAccountArticlesArticleIdEmbargoRoute,
  getAccountArticlesArticleIdFilesFileIdRoute,
  getAccountArticlesArticleIdFilesRoute,
  getAccountArticlesArticleIdPrivateLinksRoute,
  getAccountArticlesArticleIdRoute,
  getAccountArticlesExportRoute,
  getAccountArticlesRoute,
  getAccountAuthorsAuthorIdRoute,
  getAccountCategoriesRoute,
  getAccountCollectionsCollectionIdArticlesRoute,
  getAccountCollectionsCollectionIdAuthorsRoute,
  getAccountCollectionsCollectionIdCategoriesRoute,
  getAccountCollectionsCollectionIdPrivateLinksRoute,
  getAccountCollectionsCollectionIdRoute,
  getAccountCollectionsRoute,
  getAccountInstitutionAccountsRoute,
  getAccountInstitutionArticlesRoute,
  getAccountInstitutionCustomFieldsRoute,
  getAccountInstitutionEmbargoOptionsRoute,
  getAccountInstitutionGroupsGroupIdEmbargoOptionsRoute,
  getAccountInstitutionGroupsRoute,
  getAccountInstitutionReviewCurationIdCommentsRoute,
  getAccountInstitutionReviewCurationIdRoute,
  getAccountInstitutionReviewsRoute,
  getAccountInstitutionRolesAccountIdRoute,
  getAccountInstitutionRolesRoute,
  getAccountInstitutionRoute,
  getAccountInstitutionUsersAccountIdRoute,
  getAccountLicensesRoute,
  getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRoute,
  getAccountProjectsProjectIdArticlesArticleIdFilesRoute,
  getAccountProjectsProjectIdArticlesArticleIdRoute,
  getAccountProjectsProjectIdArticlesRoute,
  getAccountProjectsProjectIdCollaboratorsRoute,
  getAccountProjectsProjectIdNotesNoteIdRoute,
  getAccountProjectsProjectIdNotesRoute,
  getAccountProjectsProjectIdRoute,
  getAccountProjectsRoute,
  getAccountRoute,
  getArticlesArticleIdFilesFileIdRoute,
  getArticlesArticleIdFilesRoute,
  getArticlesArticleIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesArticleIdVersionsVNumberConfidentialityRoute,
  getArticlesArticleIdVersionsVNumberEmbargoRoute,
  getArticlesArticleIdVersionsVNumberRoute,
  getArticlesRoute,
  getCategoriesRoute,
  getCollectionsCollectionIdArticlesRoute,
  getCollectionsCollectionIdRoute,
  getCollectionsCollectionIdVersionsRoute,
  getCollectionsCollectionIdVersionsVersionIdRoute,
  getCollectionsRoute,
  getFileDownloadFileIdRoute,
  getInstitutionsInstitutionStringIdArticlesFilterByRoute,
  getItemTypesRoute,
  getLicensesRoute,
  getProjectsProjectIdArticlesRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  postAccountArticlesArticleIdAuthorsRoute,
  postAccountArticlesArticleIdCategoriesRoute,
  postAccountArticlesArticleIdFilesFileIdRoute,
  postAccountArticlesArticleIdFilesRoute,
  postAccountArticlesArticleIdPrivateLinksRoute,
  postAccountArticlesArticleIdPublishRoute,
  postAccountArticlesArticleIdReserveDoiRoute,
  postAccountArticlesArticleIdReserveHandleRoute,
  postAccountArticlesArticleIdResourceRoute,
  postAccountArticlesExportRoute,
  postAccountArticlesRoute,
  postAccountArticlesSearchRoute,
  postAccountAuthorsSearchRoute,
  postAccountCollectionsCollectionIdArticlesRoute,
  postAccountCollectionsCollectionIdAuthorsRoute,
  postAccountCollectionsCollectionIdCategoriesRoute,
  postAccountCollectionsCollectionIdPrivateLinksRoute,
  postAccountCollectionsCollectionIdPublishRoute,
  postAccountCollectionsCollectionIdReserveDoiRoute,
  postAccountCollectionsCollectionIdReserveHandleRoute,
  postAccountCollectionsCollectionIdResourceRoute,
  postAccountCollectionsRoute,
  postAccountCollectionsSearchRoute,
  postAccountFundingSearchRoute,
  postAccountInstitutionAccountsRoute,
  postAccountInstitutionAccountsSearchRoute,
  postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRoute,
  postAccountInstitutionReviewCurationIdCommentsRoute,
  postAccountInstitutionRolesAccountIdRoute,
  postAccountProjectsProjectIdArticlesRoute,
  postAccountProjectsProjectIdCollaboratorsRoute,
  postAccountProjectsProjectIdLeaveRoute,
  postAccountProjectsProjectIdNotesRoute,
  postAccountProjectsProjectIdPublishRoute,
  postAccountProjectsRoute,
  postAccountProjectsSearchRoute,
  postArticlesSearchRoute,
  postCollectionsSearchRoute,
  postInstitutionHrfeedUploadRoute,
  postProjectsSearchRoute,
  putAccountArticlesArticleIdAuthorsRoute,
  putAccountArticlesArticleIdCategoriesRoute,
  putAccountArticlesArticleIdConfidentialityRoute,
  putAccountArticlesArticleIdEmbargoRoute,
  putAccountArticlesArticleIdPrivateLinksLinkIdRoute,
  putAccountArticlesArticleIdRoute,
  putAccountArticlesArticleIdVersionsVersionIdIndexRoute,
  putAccountArticlesArticleIdVersionsVersionIdUpdateThumbRoute,
  putAccountCollectionsCollectionIdArticlesRoute,
  putAccountCollectionsCollectionIdAuthorsRoute,
  putAccountCollectionsCollectionIdCategoriesRoute,
  putAccountCollectionsCollectionIdPrivateLinksLinkIdRoute,
  putAccountCollectionsCollectionIdRoute,
  putAccountInstitutionAccountsAccountIdRoute,
  putAccountProjectsProjectIdNotesNoteIdRoute,
  putAccountProjectsProjectIdRoute,
} from './routes'
import {
  deleteAccountArticlesArticleIdAuthorsAuthorIdRouteHandler,
  deleteAccountArticlesArticleIdCategoriesCategoryIdRouteHandler,
  deleteAccountArticlesArticleIdConfidentialityRouteHandler,
  deleteAccountArticlesArticleIdEmbargoRouteHandler,
  deleteAccountArticlesArticleIdFilesFileIdRouteHandler,
  deleteAccountArticlesArticleIdPrivateLinksLinkIdRouteHandler,
  deleteAccountArticlesArticleIdRouteHandler,
  deleteAccountCollectionsCollectionIdArticlesArticleIdRouteHandler,
  deleteAccountCollectionsCollectionIdAuthorsAuthorIdRouteHandler,
  deleteAccountCollectionsCollectionIdCategoriesCategoryIdRouteHandler,
  deleteAccountCollectionsCollectionIdPrivateLinksLinkIdRouteHandler,
  deleteAccountCollectionsCollectionIdRouteHandler,
  deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRouteHandler,
  deleteAccountProjectsProjectIdArticlesArticleIdRouteHandler,
  deleteAccountProjectsProjectIdCollaboratorsUserIdRouteHandler,
  deleteAccountProjectsProjectIdNotesNoteIdRouteHandler,
  deleteAccountProjectsProjectIdRouteHandler,
  getAccountArticlesArticleIdAuthorsRouteHandler,
  getAccountArticlesArticleIdCategoriesRouteHandler,
  getAccountArticlesArticleIdConfidentialityRouteHandler,
  getAccountArticlesArticleIdEmbargoRouteHandler,
  getAccountArticlesArticleIdFilesFileIdRouteHandler,
  getAccountArticlesArticleIdFilesRouteHandler,
  getAccountArticlesArticleIdPrivateLinksRouteHandler,
  getAccountArticlesArticleIdRouteHandler,
  getAccountArticlesExportRouteHandler,
  getAccountArticlesRouteHandler,
  getAccountAuthorsAuthorIdRouteHandler,
  getAccountCategoriesRouteHandler,
  getAccountCollectionsCollectionIdArticlesRouteHandler,
  getAccountCollectionsCollectionIdAuthorsRouteHandler,
  getAccountCollectionsCollectionIdCategoriesRouteHandler,
  getAccountCollectionsCollectionIdPrivateLinksRouteHandler,
  getAccountCollectionsCollectionIdRouteHandler,
  getAccountCollectionsRouteHandler,
  getAccountInstitutionAccountsRouteHandler,
  getAccountInstitutionArticlesRouteHandler,
  getAccountInstitutionCustomFieldsRouteHandler,
  getAccountInstitutionEmbargoOptionsRouteHandler,
  getAccountInstitutionGroupsGroupIdEmbargoOptionsRouteHandler,
  getAccountInstitutionGroupsRouteHandler,
  getAccountInstitutionReviewCurationIdCommentsRouteHandler,
  getAccountInstitutionReviewCurationIdRouteHandler,
  getAccountInstitutionReviewsRouteHandler,
  getAccountInstitutionRolesAccountIdRouteHandler,
  getAccountInstitutionRolesRouteHandler,
  getAccountInstitutionRouteHandler,
  getAccountInstitutionUsersAccountIdRouteHandler,
  getAccountLicensesRouteHandler,
  getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRouteHandler,
  getAccountProjectsProjectIdArticlesArticleIdFilesRouteHandler,
  getAccountProjectsProjectIdArticlesArticleIdRouteHandler,
  getAccountProjectsProjectIdArticlesRouteHandler,
  getAccountProjectsProjectIdCollaboratorsRouteHandler,
  getAccountProjectsProjectIdNotesNoteIdRouteHandler,
  getAccountProjectsProjectIdNotesRouteHandler,
  getAccountProjectsProjectIdRouteHandler,
  getAccountProjectsRouteHandler,
  getAccountRouteHandler,
  getArticlesArticleIdFilesFileIdRouteHandler,
  getArticlesArticleIdFilesRouteHandler,
  getArticlesArticleIdRouteHandler,
  getArticlesArticleIdVersionsRouteHandler,
  getArticlesArticleIdVersionsVNumberConfidentialityRouteHandler,
  getArticlesArticleIdVersionsVNumberEmbargoRouteHandler,
  getArticlesArticleIdVersionsVNumberRouteHandler,
  getArticlesRouteHandler,
  getCategoriesRouteHandler,
  getCollectionsCollectionIdArticlesRouteHandler,
  getCollectionsCollectionIdRouteHandler,
  getCollectionsCollectionIdVersionsRouteHandler,
  getCollectionsCollectionIdVersionsVersionIdRouteHandler,
  getCollectionsRouteHandler,
  getFileDownloadFileIdRouteHandler,
  getInstitutionsInstitutionStringIdArticlesFilterByRouteHandler,
  getItemTypesRouteHandler,
  getLicensesRouteHandler,
  getProjectsProjectIdArticlesRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProjectsRouteHandler,
  postAccountArticlesArticleIdAuthorsRouteHandler,
  postAccountArticlesArticleIdCategoriesRouteHandler,
  postAccountArticlesArticleIdFilesFileIdRouteHandler,
  postAccountArticlesArticleIdFilesRouteHandler,
  postAccountArticlesArticleIdPrivateLinksRouteHandler,
  postAccountArticlesArticleIdPublishRouteHandler,
  postAccountArticlesArticleIdReserveDoiRouteHandler,
  postAccountArticlesArticleIdReserveHandleRouteHandler,
  postAccountArticlesArticleIdResourceRouteHandler,
  postAccountArticlesExportRouteHandler,
  postAccountArticlesRouteHandler,
  postAccountArticlesSearchRouteHandler,
  postAccountAuthorsSearchRouteHandler,
  postAccountCollectionsCollectionIdArticlesRouteHandler,
  postAccountCollectionsCollectionIdAuthorsRouteHandler,
  postAccountCollectionsCollectionIdCategoriesRouteHandler,
  postAccountCollectionsCollectionIdPrivateLinksRouteHandler,
  postAccountCollectionsCollectionIdPublishRouteHandler,
  postAccountCollectionsCollectionIdReserveDoiRouteHandler,
  postAccountCollectionsCollectionIdReserveHandleRouteHandler,
  postAccountCollectionsCollectionIdResourceRouteHandler,
  postAccountCollectionsRouteHandler,
  postAccountCollectionsSearchRouteHandler,
  postAccountFundingSearchRouteHandler,
  postAccountInstitutionAccountsRouteHandler,
  postAccountInstitutionAccountsSearchRouteHandler,
  postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRouteHandler,
  postAccountInstitutionReviewCurationIdCommentsRouteHandler,
  postAccountInstitutionRolesAccountIdRouteHandler,
  postAccountProjectsProjectIdArticlesRouteHandler,
  postAccountProjectsProjectIdCollaboratorsRouteHandler,
  postAccountProjectsProjectIdLeaveRouteHandler,
  postAccountProjectsProjectIdNotesRouteHandler,
  postAccountProjectsProjectIdPublishRouteHandler,
  postAccountProjectsRouteHandler,
  postAccountProjectsSearchRouteHandler,
  postArticlesSearchRouteHandler,
  postCollectionsSearchRouteHandler,
  postInstitutionHrfeedUploadRouteHandler,
  postProjectsSearchRouteHandler,
  putAccountArticlesArticleIdAuthorsRouteHandler,
  putAccountArticlesArticleIdCategoriesRouteHandler,
  putAccountArticlesArticleIdConfidentialityRouteHandler,
  putAccountArticlesArticleIdEmbargoRouteHandler,
  putAccountArticlesArticleIdPrivateLinksLinkIdRouteHandler,
  putAccountArticlesArticleIdRouteHandler,
  putAccountArticlesArticleIdVersionsVersionIdIndexRouteHandler,
  putAccountArticlesArticleIdVersionsVersionIdUpdateThumbRouteHandler,
  putAccountCollectionsCollectionIdArticlesRouteHandler,
  putAccountCollectionsCollectionIdAuthorsRouteHandler,
  putAccountCollectionsCollectionIdCategoriesRouteHandler,
  putAccountCollectionsCollectionIdPrivateLinksLinkIdRouteHandler,
  putAccountCollectionsCollectionIdRouteHandler,
  putAccountInstitutionAccountsAccountIdRouteHandler,
  putAccountProjectsProjectIdNotesNoteIdRouteHandler,
  putAccountProjectsProjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(getAccountArticlesRoute, getAccountArticlesRouteHandler)
  .openapi(postAccountArticlesRoute, postAccountArticlesRouteHandler)
  .openapi(getAccountArticlesExportRoute, getAccountArticlesExportRouteHandler)
  .openapi(postAccountArticlesExportRoute, postAccountArticlesExportRouteHandler)
  .openapi(postAccountArticlesSearchRoute, postAccountArticlesSearchRouteHandler)
  .openapi(deleteAccountArticlesArticleIdRoute, deleteAccountArticlesArticleIdRouteHandler)
  .openapi(getAccountArticlesArticleIdRoute, getAccountArticlesArticleIdRouteHandler)
  .openapi(putAccountArticlesArticleIdRoute, putAccountArticlesArticleIdRouteHandler)
  .openapi(getAccountArticlesArticleIdAuthorsRoute, getAccountArticlesArticleIdAuthorsRouteHandler)
  .openapi(
    postAccountArticlesArticleIdAuthorsRoute,
    postAccountArticlesArticleIdAuthorsRouteHandler,
  )
  .openapi(putAccountArticlesArticleIdAuthorsRoute, putAccountArticlesArticleIdAuthorsRouteHandler)
  .openapi(
    deleteAccountArticlesArticleIdAuthorsAuthorIdRoute,
    deleteAccountArticlesArticleIdAuthorsAuthorIdRouteHandler,
  )
  .openapi(
    getAccountArticlesArticleIdCategoriesRoute,
    getAccountArticlesArticleIdCategoriesRouteHandler,
  )
  .openapi(
    postAccountArticlesArticleIdCategoriesRoute,
    postAccountArticlesArticleIdCategoriesRouteHandler,
  )
  .openapi(
    putAccountArticlesArticleIdCategoriesRoute,
    putAccountArticlesArticleIdCategoriesRouteHandler,
  )
  .openapi(
    deleteAccountArticlesArticleIdCategoriesCategoryIdRoute,
    deleteAccountArticlesArticleIdCategoriesCategoryIdRouteHandler,
  )
  .openapi(
    deleteAccountArticlesArticleIdConfidentialityRoute,
    deleteAccountArticlesArticleIdConfidentialityRouteHandler,
  )
  .openapi(
    getAccountArticlesArticleIdConfidentialityRoute,
    getAccountArticlesArticleIdConfidentialityRouteHandler,
  )
  .openapi(
    putAccountArticlesArticleIdConfidentialityRoute,
    putAccountArticlesArticleIdConfidentialityRouteHandler,
  )
  .openapi(
    deleteAccountArticlesArticleIdEmbargoRoute,
    deleteAccountArticlesArticleIdEmbargoRouteHandler,
  )
  .openapi(getAccountArticlesArticleIdEmbargoRoute, getAccountArticlesArticleIdEmbargoRouteHandler)
  .openapi(putAccountArticlesArticleIdEmbargoRoute, putAccountArticlesArticleIdEmbargoRouteHandler)
  .openapi(getAccountArticlesArticleIdFilesRoute, getAccountArticlesArticleIdFilesRouteHandler)
  .openapi(postAccountArticlesArticleIdFilesRoute, postAccountArticlesArticleIdFilesRouteHandler)
  .openapi(
    deleteAccountArticlesArticleIdFilesFileIdRoute,
    deleteAccountArticlesArticleIdFilesFileIdRouteHandler,
  )
  .openapi(
    getAccountArticlesArticleIdFilesFileIdRoute,
    getAccountArticlesArticleIdFilesFileIdRouteHandler,
  )
  .openapi(
    postAccountArticlesArticleIdFilesFileIdRoute,
    postAccountArticlesArticleIdFilesFileIdRouteHandler,
  )
  .openapi(
    getAccountArticlesArticleIdPrivateLinksRoute,
    getAccountArticlesArticleIdPrivateLinksRouteHandler,
  )
  .openapi(
    postAccountArticlesArticleIdPrivateLinksRoute,
    postAccountArticlesArticleIdPrivateLinksRouteHandler,
  )
  .openapi(
    deleteAccountArticlesArticleIdPrivateLinksLinkIdRoute,
    deleteAccountArticlesArticleIdPrivateLinksLinkIdRouteHandler,
  )
  .openapi(
    putAccountArticlesArticleIdPrivateLinksLinkIdRoute,
    putAccountArticlesArticleIdPrivateLinksLinkIdRouteHandler,
  )
  .openapi(
    postAccountArticlesArticleIdPublishRoute,
    postAccountArticlesArticleIdPublishRouteHandler,
  )
  .openapi(
    postAccountArticlesArticleIdReserveDoiRoute,
    postAccountArticlesArticleIdReserveDoiRouteHandler,
  )
  .openapi(
    postAccountArticlesArticleIdReserveHandleRoute,
    postAccountArticlesArticleIdReserveHandleRouteHandler,
  )
  .openapi(
    postAccountArticlesArticleIdResourceRoute,
    postAccountArticlesArticleIdResourceRouteHandler,
  )
  .openapi(
    putAccountArticlesArticleIdVersionsVersionIdIndexRoute,
    putAccountArticlesArticleIdVersionsVersionIdIndexRouteHandler,
  )
  .openapi(
    putAccountArticlesArticleIdVersionsVersionIdUpdateThumbRoute,
    putAccountArticlesArticleIdVersionsVersionIdUpdateThumbRouteHandler,
  )
  .openapi(postAccountAuthorsSearchRoute, postAccountAuthorsSearchRouteHandler)
  .openapi(getAccountAuthorsAuthorIdRoute, getAccountAuthorsAuthorIdRouteHandler)
  .openapi(getAccountCategoriesRoute, getAccountCategoriesRouteHandler)
  .openapi(getAccountCollectionsRoute, getAccountCollectionsRouteHandler)
  .openapi(postAccountCollectionsRoute, postAccountCollectionsRouteHandler)
  .openapi(postAccountCollectionsSearchRoute, postAccountCollectionsSearchRouteHandler)
  .openapi(
    deleteAccountCollectionsCollectionIdRoute,
    deleteAccountCollectionsCollectionIdRouteHandler,
  )
  .openapi(getAccountCollectionsCollectionIdRoute, getAccountCollectionsCollectionIdRouteHandler)
  .openapi(putAccountCollectionsCollectionIdRoute, putAccountCollectionsCollectionIdRouteHandler)
  .openapi(
    getAccountCollectionsCollectionIdArticlesRoute,
    getAccountCollectionsCollectionIdArticlesRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdArticlesRoute,
    postAccountCollectionsCollectionIdArticlesRouteHandler,
  )
  .openapi(
    putAccountCollectionsCollectionIdArticlesRoute,
    putAccountCollectionsCollectionIdArticlesRouteHandler,
  )
  .openapi(
    deleteAccountCollectionsCollectionIdArticlesArticleIdRoute,
    deleteAccountCollectionsCollectionIdArticlesArticleIdRouteHandler,
  )
  .openapi(
    getAccountCollectionsCollectionIdAuthorsRoute,
    getAccountCollectionsCollectionIdAuthorsRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdAuthorsRoute,
    postAccountCollectionsCollectionIdAuthorsRouteHandler,
  )
  .openapi(
    putAccountCollectionsCollectionIdAuthorsRoute,
    putAccountCollectionsCollectionIdAuthorsRouteHandler,
  )
  .openapi(
    deleteAccountCollectionsCollectionIdAuthorsAuthorIdRoute,
    deleteAccountCollectionsCollectionIdAuthorsAuthorIdRouteHandler,
  )
  .openapi(
    getAccountCollectionsCollectionIdCategoriesRoute,
    getAccountCollectionsCollectionIdCategoriesRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdCategoriesRoute,
    postAccountCollectionsCollectionIdCategoriesRouteHandler,
  )
  .openapi(
    putAccountCollectionsCollectionIdCategoriesRoute,
    putAccountCollectionsCollectionIdCategoriesRouteHandler,
  )
  .openapi(
    deleteAccountCollectionsCollectionIdCategoriesCategoryIdRoute,
    deleteAccountCollectionsCollectionIdCategoriesCategoryIdRouteHandler,
  )
  .openapi(
    getAccountCollectionsCollectionIdPrivateLinksRoute,
    getAccountCollectionsCollectionIdPrivateLinksRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdPrivateLinksRoute,
    postAccountCollectionsCollectionIdPrivateLinksRouteHandler,
  )
  .openapi(
    deleteAccountCollectionsCollectionIdPrivateLinksLinkIdRoute,
    deleteAccountCollectionsCollectionIdPrivateLinksLinkIdRouteHandler,
  )
  .openapi(
    putAccountCollectionsCollectionIdPrivateLinksLinkIdRoute,
    putAccountCollectionsCollectionIdPrivateLinksLinkIdRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdPublishRoute,
    postAccountCollectionsCollectionIdPublishRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdReserveDoiRoute,
    postAccountCollectionsCollectionIdReserveDoiRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdReserveHandleRoute,
    postAccountCollectionsCollectionIdReserveHandleRouteHandler,
  )
  .openapi(
    postAccountCollectionsCollectionIdResourceRoute,
    postAccountCollectionsCollectionIdResourceRouteHandler,
  )
  .openapi(postAccountFundingSearchRoute, postAccountFundingSearchRouteHandler)
  .openapi(getAccountInstitutionRoute, getAccountInstitutionRouteHandler)
  .openapi(getAccountInstitutionAccountsRoute, getAccountInstitutionAccountsRouteHandler)
  .openapi(postAccountInstitutionAccountsRoute, postAccountInstitutionAccountsRouteHandler)
  .openapi(
    postAccountInstitutionAccountsSearchRoute,
    postAccountInstitutionAccountsSearchRouteHandler,
  )
  .openapi(
    putAccountInstitutionAccountsAccountIdRoute,
    putAccountInstitutionAccountsAccountIdRouteHandler,
  )
  .openapi(getAccountInstitutionArticlesRoute, getAccountInstitutionArticlesRouteHandler)
  .openapi(getAccountInstitutionCustomFieldsRoute, getAccountInstitutionCustomFieldsRouteHandler)
  .openapi(
    postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRoute,
    postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRouteHandler,
  )
  .openapi(
    getAccountInstitutionEmbargoOptionsRoute,
    getAccountInstitutionEmbargoOptionsRouteHandler,
  )
  .openapi(getAccountInstitutionGroupsRoute, getAccountInstitutionGroupsRouteHandler)
  .openapi(
    getAccountInstitutionGroupsGroupIdEmbargoOptionsRoute,
    getAccountInstitutionGroupsGroupIdEmbargoOptionsRouteHandler,
  )
  .openapi(
    getAccountInstitutionReviewCurationIdRoute,
    getAccountInstitutionReviewCurationIdRouteHandler,
  )
  .openapi(
    getAccountInstitutionReviewCurationIdCommentsRoute,
    getAccountInstitutionReviewCurationIdCommentsRouteHandler,
  )
  .openapi(
    postAccountInstitutionReviewCurationIdCommentsRoute,
    postAccountInstitutionReviewCurationIdCommentsRouteHandler,
  )
  .openapi(getAccountInstitutionReviewsRoute, getAccountInstitutionReviewsRouteHandler)
  .openapi(getAccountInstitutionRolesRoute, getAccountInstitutionRolesRouteHandler)
  .openapi(
    getAccountInstitutionRolesAccountIdRoute,
    getAccountInstitutionRolesAccountIdRouteHandler,
  )
  .openapi(
    postAccountInstitutionRolesAccountIdRoute,
    postAccountInstitutionRolesAccountIdRouteHandler,
  )
  .openapi(
    deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRoute,
    deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRouteHandler,
  )
  .openapi(
    getAccountInstitutionUsersAccountIdRoute,
    getAccountInstitutionUsersAccountIdRouteHandler,
  )
  .openapi(getAccountLicensesRoute, getAccountLicensesRouteHandler)
  .openapi(getAccountProjectsRoute, getAccountProjectsRouteHandler)
  .openapi(postAccountProjectsRoute, postAccountProjectsRouteHandler)
  .openapi(postAccountProjectsSearchRoute, postAccountProjectsSearchRouteHandler)
  .openapi(deleteAccountProjectsProjectIdRoute, deleteAccountProjectsProjectIdRouteHandler)
  .openapi(getAccountProjectsProjectIdRoute, getAccountProjectsProjectIdRouteHandler)
  .openapi(putAccountProjectsProjectIdRoute, putAccountProjectsProjectIdRouteHandler)
  .openapi(
    getAccountProjectsProjectIdArticlesRoute,
    getAccountProjectsProjectIdArticlesRouteHandler,
  )
  .openapi(
    postAccountProjectsProjectIdArticlesRoute,
    postAccountProjectsProjectIdArticlesRouteHandler,
  )
  .openapi(
    deleteAccountProjectsProjectIdArticlesArticleIdRoute,
    deleteAccountProjectsProjectIdArticlesArticleIdRouteHandler,
  )
  .openapi(
    getAccountProjectsProjectIdArticlesArticleIdRoute,
    getAccountProjectsProjectIdArticlesArticleIdRouteHandler,
  )
  .openapi(
    getAccountProjectsProjectIdArticlesArticleIdFilesRoute,
    getAccountProjectsProjectIdArticlesArticleIdFilesRouteHandler,
  )
  .openapi(
    getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRoute,
    getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRouteHandler,
  )
  .openapi(
    getAccountProjectsProjectIdCollaboratorsRoute,
    getAccountProjectsProjectIdCollaboratorsRouteHandler,
  )
  .openapi(
    postAccountProjectsProjectIdCollaboratorsRoute,
    postAccountProjectsProjectIdCollaboratorsRouteHandler,
  )
  .openapi(
    deleteAccountProjectsProjectIdCollaboratorsUserIdRoute,
    deleteAccountProjectsProjectIdCollaboratorsUserIdRouteHandler,
  )
  .openapi(postAccountProjectsProjectIdLeaveRoute, postAccountProjectsProjectIdLeaveRouteHandler)
  .openapi(getAccountProjectsProjectIdNotesRoute, getAccountProjectsProjectIdNotesRouteHandler)
  .openapi(postAccountProjectsProjectIdNotesRoute, postAccountProjectsProjectIdNotesRouteHandler)
  .openapi(
    deleteAccountProjectsProjectIdNotesNoteIdRoute,
    deleteAccountProjectsProjectIdNotesNoteIdRouteHandler,
  )
  .openapi(
    getAccountProjectsProjectIdNotesNoteIdRoute,
    getAccountProjectsProjectIdNotesNoteIdRouteHandler,
  )
  .openapi(
    putAccountProjectsProjectIdNotesNoteIdRoute,
    putAccountProjectsProjectIdNotesNoteIdRouteHandler,
  )
  .openapi(
    postAccountProjectsProjectIdPublishRoute,
    postAccountProjectsProjectIdPublishRouteHandler,
  )
  .openapi(getArticlesRoute, getArticlesRouteHandler)
  .openapi(postArticlesSearchRoute, postArticlesSearchRouteHandler)
  .openapi(getArticlesArticleIdRoute, getArticlesArticleIdRouteHandler)
  .openapi(getArticlesArticleIdFilesRoute, getArticlesArticleIdFilesRouteHandler)
  .openapi(getArticlesArticleIdFilesFileIdRoute, getArticlesArticleIdFilesFileIdRouteHandler)
  .openapi(getArticlesArticleIdVersionsRoute, getArticlesArticleIdVersionsRouteHandler)
  .openapi(
    getArticlesArticleIdVersionsVNumberRoute,
    getArticlesArticleIdVersionsVNumberRouteHandler,
  )
  .openapi(
    getArticlesArticleIdVersionsVNumberConfidentialityRoute,
    getArticlesArticleIdVersionsVNumberConfidentialityRouteHandler,
  )
  .openapi(
    getArticlesArticleIdVersionsVNumberEmbargoRoute,
    getArticlesArticleIdVersionsVNumberEmbargoRouteHandler,
  )
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(postCollectionsSearchRoute, postCollectionsSearchRouteHandler)
  .openapi(getCollectionsCollectionIdRoute, getCollectionsCollectionIdRouteHandler)
  .openapi(getCollectionsCollectionIdArticlesRoute, getCollectionsCollectionIdArticlesRouteHandler)
  .openapi(getCollectionsCollectionIdVersionsRoute, getCollectionsCollectionIdVersionsRouteHandler)
  .openapi(
    getCollectionsCollectionIdVersionsVersionIdRoute,
    getCollectionsCollectionIdVersionsVersionIdRouteHandler,
  )
  .openapi(getFileDownloadFileIdRoute, getFileDownloadFileIdRouteHandler)
  .openapi(postInstitutionHrfeedUploadRoute, postInstitutionHrfeedUploadRouteHandler)
  .openapi(
    getInstitutionsInstitutionStringIdArticlesFilterByRoute,
    getInstitutionsInstitutionStringIdArticlesFilterByRouteHandler,
  )
  .openapi(getItemTypesRoute, getItemTypesRouteHandler)
  .openapi(getLicensesRoute, getLicensesRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsSearchRoute, postProjectsSearchRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdArticlesRoute, getProjectsProjectIdArticlesRouteHandler)

export default app
