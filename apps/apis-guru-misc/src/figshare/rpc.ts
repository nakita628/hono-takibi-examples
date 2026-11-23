import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function getAccountArticles(
  args: InferRequestType<typeof client.account.articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles.$get(args, options))
}

export async function postAccountArticles(
  args: InferRequestType<typeof client.account.articles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles.$post(args, options))
}

export async function getAccountArticlesExport(
  args: InferRequestType<typeof client.account.articles.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles.export.$get(args, options))
}

export async function postAccountArticlesExport(options?: ClientRequestOptions) {
  return await parseResponse(client.account.articles.export.$post(undefined, options))
}

export async function postAccountArticlesSearch(
  args: InferRequestType<typeof client.account.articles.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles.search.$post(args, options))
}

export async function getAccountArticlesArticleId(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].$get(args, options))
}

export async function putAccountArticlesArticleId(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].$put(args, options))
}

export async function deleteAccountArticlesArticleId(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].$delete(args, options))
}

export async function getAccountArticlesArticleIdAuthors(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].authors.$get(args, options))
}

export async function putAccountArticlesArticleIdAuthors(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].authors.$put(args, options))
}

export async function postAccountArticlesArticleIdAuthors(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['authors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].authors.$post(args, options))
}

export async function deleteAccountArticlesArticleIdAuthorsAuthorId(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['authors'][':author_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].authors[':author_id'].$delete(args, options),
  )
}

export async function getAccountArticlesArticleIdCategories(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].categories.$get(args, options))
}

export async function putAccountArticlesArticleIdCategories(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].categories.$put(args, options))
}

export async function postAccountArticlesArticleIdCategories(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['categories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].categories.$post(args, options))
}

export async function deleteAccountArticlesArticleIdCategoriesCategoryId(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['categories'][':category_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].categories[':category_id'].$delete(args, options),
  )
}

export async function getAccountArticlesArticleIdConfidentiality(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].confidentiality.$get(args, options),
  )
}

export async function putAccountArticlesArticleIdConfidentiality(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].confidentiality.$put(args, options),
  )
}

export async function deleteAccountArticlesArticleIdConfidentiality(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['confidentiality']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].confidentiality.$delete(args, options),
  )
}

export async function getAccountArticlesArticleIdEmbargo(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].embargo.$get(args, options))
}

export async function putAccountArticlesArticleIdEmbargo(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].embargo.$put(args, options))
}

export async function deleteAccountArticlesArticleIdEmbargo(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['embargo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].embargo.$delete(args, options))
}

export async function getAccountArticlesArticleIdFiles(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].files.$get(args, options))
}

export async function postAccountArticlesArticleIdFiles(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].files.$post(args, options))
}

export async function getAccountArticlesArticleIdFilesFileId(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].files[':file_id'].$get(args, options),
  )
}

export async function postAccountArticlesArticleIdFilesFileId(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].files[':file_id'].$post(args, options),
  )
}

export async function deleteAccountArticlesArticleIdFilesFileId(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['files'][':file_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].files[':file_id'].$delete(args, options),
  )
}

export async function getAccountArticlesArticleIdPrivateLinks(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].private_links.$get(args, options),
  )
}

export async function postAccountArticlesArticleIdPrivateLinks(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['private_links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].private_links.$post(args, options),
  )
}

export async function putAccountArticlesArticleIdPrivateLinksLinkId(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].private_links[':link_id'].$put(args, options),
  )
}

export async function deleteAccountArticlesArticleIdPrivateLinksLinkId(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['private_links'][':link_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].private_links[':link_id'].$delete(args, options),
  )
}

export async function postAccountArticlesArticleIdPublish(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].publish.$post(args, options))
}

export async function postAccountArticlesArticleIdReserveDoi(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['reserve_doi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].reserve_doi.$post(args, options),
  )
}

export async function postAccountArticlesArticleIdReserveHandle(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['reserve_handle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].reserve_handle.$post(args, options),
  )
}

export async function postAccountArticlesArticleIdResource(
  args: InferRequestType<(typeof client.account.articles)[':article_id']['resource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.articles[':article_id'].resource.$post(args, options))
}

export async function putAccountArticlesArticleIdVersionsVersionIdIndex(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['versions'][':version_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].versions[':version_id'].index.$put(args, options),
  )
}

export async function putAccountArticlesArticleIdVersionsVersionIdUpdateThumb(
  args: InferRequestType<
    (typeof client.account.articles)[':article_id']['versions'][':version_id']['update_thumb']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.articles[':article_id'].versions[':version_id'].update_thumb.$put(args, options),
  )
}

export async function postAccountAuthorsSearch(
  args: InferRequestType<typeof client.account.authors.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.authors.search.$post(args, options))
}

export async function getAccountAuthorsAuthorId(
  args: InferRequestType<(typeof client.account.authors)[':author_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.authors[':author_id'].$get(args, options))
}

export async function getAccountCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.account.categories.$get(undefined, options))
}

export async function getAccountCollections(
  args: InferRequestType<typeof client.account.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.collections.$get(args, options))
}

export async function postAccountCollections(
  args: InferRequestType<typeof client.account.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.collections.$post(args, options))
}

export async function postAccountCollectionsSearch(
  args: InferRequestType<typeof client.account.collections.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.collections.search.$post(args, options))
}

export async function getAccountCollectionsCollectionId(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.collections[':collection_id'].$get(args, options))
}

export async function putAccountCollectionsCollectionId(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.collections[':collection_id'].$put(args, options))
}

export async function deleteAccountCollectionsCollectionId(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.collections[':collection_id'].$delete(args, options))
}

export async function getAccountCollectionsCollectionIdArticles(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].articles.$get(args, options),
  )
}

export async function putAccountCollectionsCollectionIdArticles(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['articles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].articles.$put(args, options),
  )
}

export async function postAccountCollectionsCollectionIdArticles(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['articles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].articles.$post(args, options),
  )
}

export async function deleteAccountCollectionsCollectionIdArticlesArticleId(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['articles'][':article_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].articles[':article_id'].$delete(args, options),
  )
}

export async function getAccountCollectionsCollectionIdAuthors(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].authors.$get(args, options),
  )
}

export async function putAccountCollectionsCollectionIdAuthors(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].authors.$put(args, options),
  )
}

export async function postAccountCollectionsCollectionIdAuthors(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['authors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].authors.$post(args, options),
  )
}

export async function deleteAccountCollectionsCollectionIdAuthorsAuthorId(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['authors'][':author_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].authors[':author_id'].$delete(args, options),
  )
}

export async function getAccountCollectionsCollectionIdCategories(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].categories.$get(args, options),
  )
}

export async function putAccountCollectionsCollectionIdCategories(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].categories.$put(args, options),
  )
}

export async function postAccountCollectionsCollectionIdCategories(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].categories.$post(args, options),
  )
}

export async function deleteAccountCollectionsCollectionIdCategoriesCategoryId(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['categories'][':category_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].categories[':category_id'].$delete(args, options),
  )
}

export async function getAccountCollectionsCollectionIdPrivateLinks(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].private_links.$get(args, options),
  )
}

export async function postAccountCollectionsCollectionIdPrivateLinks(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].private_links.$post(args, options),
  )
}

export async function putAccountCollectionsCollectionIdPrivateLinksLinkId(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].private_links[':link_id'].$put(args, options),
  )
}

export async function deleteAccountCollectionsCollectionIdPrivateLinksLinkId(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['private_links'][':link_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].private_links[':link_id'].$delete(args, options),
  )
}

export async function postAccountCollectionsCollectionIdPublish(
  args: InferRequestType<(typeof client.account.collections)[':collection_id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].publish.$post(args, options),
  )
}

export async function postAccountCollectionsCollectionIdReserveDoi(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['reserve_doi']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].reserve_doi.$post(args, options),
  )
}

export async function postAccountCollectionsCollectionIdReserveHandle(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['reserve_handle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].reserve_handle.$post(args, options),
  )
}

export async function postAccountCollectionsCollectionIdResource(
  args: InferRequestType<
    (typeof client.account.collections)[':collection_id']['resource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.collections[':collection_id'].resource.$post(args, options),
  )
}

export async function postAccountFundingSearch(
  args: InferRequestType<typeof client.account.funding.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.funding.search.$post(args, options))
}

export async function getAccountInstitution(options?: ClientRequestOptions) {
  return await parseResponse(client.account.institution.$get(undefined, options))
}

export async function getAccountInstitutionAccounts(
  args: InferRequestType<typeof client.account.institution.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.accounts.$get(args, options))
}

export async function postAccountInstitutionAccounts(
  args: InferRequestType<typeof client.account.institution.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.accounts.$post(args, options))
}

export async function postAccountInstitutionAccountsSearch(
  args: InferRequestType<typeof client.account.institution.accounts.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.accounts.search.$post(args, options))
}

export async function putAccountInstitutionAccountsAccountId(
  args: InferRequestType<(typeof client.account.institution.accounts)[':account_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.accounts[':account_id'].$put(args, options))
}

export async function getAccountInstitutionArticles(
  args: InferRequestType<typeof client.account.institution.articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.articles.$get(args, options))
}

export async function getAccountInstitutionCustomFields(
  args: InferRequestType<typeof client.account.institution.custom_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.custom_fields.$get(args, options))
}

export async function postAccountInstitutionCustomFieldsCustomFieldIdItemsUpload(
  args: InferRequestType<
    (typeof client.account.institution.custom_fields)[':custom_field_id']['items']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.institution.custom_fields[':custom_field_id'].items.upload.$post(args, options),
  )
}

export async function getAccountInstitutionEmbargoOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.account.institution.embargo_options.$get(undefined, options))
}

export async function getAccountInstitutionGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.account.institution.groups.$get(undefined, options))
}

export async function getAccountInstitutionGroupsGroupIdEmbargoOptions(
  args: InferRequestType<
    (typeof client.account.institution.groups)[':group_id']['embargo_options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.institution.groups[':group_id'].embargo_options.$get(args, options),
  )
}

export async function getAccountInstitutionReviewCurationId(
  args: InferRequestType<(typeof client.account.institution.review)[':curation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.review[':curation_id'].$get(args, options))
}

export async function getAccountInstitutionReviewCurationIdComments(
  args: InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.institution.review[':curation_id'].comments.$get(args, options),
  )
}

export async function postAccountInstitutionReviewCurationIdComments(
  args: InferRequestType<
    (typeof client.account.institution.review)[':curation_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.institution.review[':curation_id'].comments.$post(args, options),
  )
}

export async function getAccountInstitutionReviews(
  args: InferRequestType<typeof client.account.institution.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.reviews.$get(args, options))
}

export async function getAccountInstitutionRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.account.institution.roles.$get(undefined, options))
}

export async function getAccountInstitutionRolesAccountId(
  args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.roles[':account_id'].$get(args, options))
}

export async function postAccountInstitutionRolesAccountId(
  args: InferRequestType<(typeof client.account.institution.roles)[':account_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.roles[':account_id'].$post(args, options))
}

export async function deleteAccountInstitutionRolesAccountIdGroupIdRoleId(
  args: InferRequestType<
    (typeof client.account.institution.roles)[':account_id'][':group_id'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.institution.roles[':account_id'][':group_id'][':role_id'].$delete(args, options),
  )
}

export async function getAccountInstitutionUsersAccountId(
  args: InferRequestType<(typeof client.account.institution.users)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.institution.users[':account_id'].$get(args, options))
}

export async function getAccountLicenses(options?: ClientRequestOptions) {
  return await parseResponse(client.account.licenses.$get(undefined, options))
}

export async function getAccountProjects(
  args: InferRequestType<typeof client.account.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects.$get(args, options))
}

export async function postAccountProjects(
  args: InferRequestType<typeof client.account.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects.$post(args, options))
}

export async function postAccountProjectsSearch(
  args: InferRequestType<typeof client.account.projects.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects.search.$post(args, options))
}

export async function getAccountProjectsProjectId(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].$get(args, options))
}

export async function putAccountProjectsProjectId(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].$put(args, options))
}

export async function deleteAccountProjectsProjectId(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].$delete(args, options))
}

export async function getAccountProjectsProjectIdArticles(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].articles.$get(args, options))
}

export async function postAccountProjectsProjectIdArticles(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['articles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].articles.$post(args, options))
}

export async function getAccountProjectsProjectIdArticlesArticleId(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].articles[':article_id'].$get(args, options),
  )
}

export async function deleteAccountProjectsProjectIdArticlesArticleId(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].articles[':article_id'].$delete(args, options),
  )
}

export async function getAccountProjectsProjectIdArticlesArticleIdFiles(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].articles[':article_id'].files.$get(args, options),
  )
}

export async function getAccountProjectsProjectIdArticlesArticleIdFilesFileId(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['articles'][':article_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].articles[':article_id'].files[':file_id'].$get(
      args,
      options,
    ),
  )
}

export async function getAccountProjectsProjectIdCollaborators(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].collaborators.$get(args, options),
  )
}

export async function postAccountProjectsProjectIdCollaborators(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['collaborators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].collaborators.$post(args, options),
  )
}

export async function deleteAccountProjectsProjectIdCollaboratorsUserId(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['collaborators'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].collaborators[':user_id'].$delete(args, options),
  )
}

export async function postAccountProjectsProjectIdLeave(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].leave.$post(args, options))
}

export async function getAccountProjectsProjectIdNotes(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].notes.$get(args, options))
}

export async function postAccountProjectsProjectIdNotes(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].notes.$post(args, options))
}

export async function getAccountProjectsProjectIdNotesNoteId(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].notes[':note_id'].$get(args, options),
  )
}

export async function putAccountProjectsProjectIdNotesNoteId(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].notes[':note_id'].$put(args, options),
  )
}

export async function deleteAccountProjectsProjectIdNotesNoteId(
  args: InferRequestType<
    (typeof client.account.projects)[':project_id']['notes'][':note_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.projects[':project_id'].notes[':note_id'].$delete(args, options),
  )
}

export async function postAccountProjectsProjectIdPublish(
  args: InferRequestType<(typeof client.account.projects)[':project_id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.projects[':project_id'].publish.$post(args, options))
}

export async function getArticles(
  args: InferRequestType<typeof client.articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles.$get(args, options))
}

export async function postArticlesSearch(
  args: InferRequestType<typeof client.articles.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles.search.$post(args, options))
}

export async function getArticlesArticleId(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].$get(args, options))
}

export async function getArticlesArticleIdFiles(
  args: InferRequestType<(typeof client.articles)[':article_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].files.$get(args, options))
}

export async function getArticlesArticleIdFilesFileId(
  args: InferRequestType<(typeof client.articles)[':article_id']['files'][':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].files[':file_id'].$get(args, options))
}

export async function getArticlesArticleIdVersions(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].versions.$get(args, options))
}

export async function getArticlesArticleIdVersionsVNumber(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':v_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.articles[':article_id'].versions[':v_number'].$get(args, options),
  )
}

export async function getArticlesArticleIdVersionsVNumberConfidentiality(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['confidentiality']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.articles[':article_id'].versions[':v_number'].confidentiality.$get(args, options),
  )
}

export async function getArticlesArticleIdVersionsVNumberEmbargo(
  args: InferRequestType<
    (typeof client.articles)[':article_id']['versions'][':v_number']['embargo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.articles[':article_id'].versions[':v_number'].embargo.$get(args, options),
  )
}

export async function getCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.categories.$get(undefined, options))
}

export async function getCollections(
  args: InferRequestType<typeof client.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$get(args, options))
}

export async function postCollectionsSearch(
  args: InferRequestType<typeof client.collections.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.search.$post(args, options))
}

export async function getCollectionsCollectionId(
  args: InferRequestType<(typeof client.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_id'].$get(args, options))
}

export async function getCollectionsCollectionIdArticles(
  args: InferRequestType<(typeof client.collections)[':collection_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_id'].articles.$get(args, options))
}

export async function getCollectionsCollectionIdVersions(
  args: InferRequestType<(typeof client.collections)[':collection_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_id'].versions.$get(args, options))
}

export async function getCollectionsCollectionIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].versions[':version_id'].$get(args, options),
  )
}

export async function getFileDownloadFileId(
  args: InferRequestType<(typeof client.file.download)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file.download[':file_id'].$get(args, options))
}

export async function postInstitutionHrfeedUpload(
  args: InferRequestType<typeof client.institution.hrfeed.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institution.hrfeed.upload.$post(args, options))
}

export async function getInstitutionsInstitutionStringIdArticlesFilterBy(
  args: InferRequestType<
    (typeof client.institutions)[':institution_string_id']['articles']['filter-by']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.institutions[':institution_string_id'].articles['filter-by'].$get(args, options),
  )
}

export async function getItemTypes(
  args: InferRequestType<typeof client.item_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_types.$get(args, options))
}

export async function getLicenses(options?: ClientRequestOptions) {
  return await parseResponse(client.licenses.$get(undefined, options))
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjectsSearch(
  args: InferRequestType<typeof client.projects.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.search.$post(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].$get(args, options))
}

export async function getProjectsProjectIdArticles(
  args: InferRequestType<(typeof client.projects)[':project_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].articles.$get(args, options))
}
