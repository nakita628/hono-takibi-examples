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
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountArticlesArticleIdAuthorsAuthorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountArticlesArticleIdCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountArticlesArticleIdConfidentialityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdConfidentialityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdConfidentialityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountArticlesArticleIdEmbargoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdEmbargoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdEmbargoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountArticlesArticleIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountArticlesArticleIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountArticlesArticleIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdReserveDoiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdReserveHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountArticlesArticleIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdVersionsVersionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountArticlesArticleIdVersionsVersionIdUpdateThumbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAuthorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAuthorsAuthorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCollectionsCollectionIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountCollectionsCollectionIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountCollectionsCollectionIdArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCollectionsCollectionIdAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountCollectionsCollectionIdAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountCollectionsCollectionIdAuthorsAuthorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCollectionsCollectionIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountCollectionsCollectionIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountCollectionsCollectionIdCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCollectionsCollectionIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdPrivateLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountCollectionsCollectionIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountCollectionsCollectionIdPrivateLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdReserveDoiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdReserveHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountCollectionsCollectionIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountFundingSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionAccountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountInstitutionAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionCustomFieldsCustomFieldIdItemsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionEmbargoOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionGroupsGroupIdEmbargoOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionReviewCurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionReviewCurationIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionReviewCurationIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionRolesAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountInstitutionRolesAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountInstitutionRolesAccountIdGroupIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInstitutionUsersAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesArticleIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdArticlesArticleIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdCollaboratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProjectsProjectIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProjectsProjectIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProjectsProjectIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountProjectsProjectIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
