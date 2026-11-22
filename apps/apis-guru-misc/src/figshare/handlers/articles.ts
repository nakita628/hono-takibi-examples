import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountArticlesArticleIdAuthorsAuthorIdRoute,
  deleteAccountArticlesArticleIdCategoriesCategoryIdRoute,
  deleteAccountArticlesArticleIdConfidentialityRoute,
  deleteAccountArticlesArticleIdEmbargoRoute,
  deleteAccountArticlesArticleIdFilesFileIdRoute,
  deleteAccountArticlesArticleIdPrivateLinksLinkIdRoute,
  deleteAccountArticlesArticleIdRoute,
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
  getArticlesArticleIdFilesFileIdRoute,
  getArticlesArticleIdFilesRoute,
  getArticlesArticleIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesArticleIdVersionsVNumberConfidentialityRoute,
  getArticlesArticleIdVersionsVNumberEmbargoRoute,
  getArticlesArticleIdVersionsVNumberRoute,
  getArticlesRoute,
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
  postArticlesSearchRoute,
  putAccountArticlesArticleIdAuthorsRoute,
  putAccountArticlesArticleIdCategoriesRoute,
  putAccountArticlesArticleIdConfidentialityRoute,
  putAccountArticlesArticleIdEmbargoRoute,
  putAccountArticlesArticleIdPrivateLinksLinkIdRoute,
  putAccountArticlesArticleIdRoute,
  putAccountArticlesArticleIdVersionsVersionIdIndexRoute,
  putAccountArticlesArticleIdVersionsVersionIdUpdateThumbRoute,
} from '../routes'

const app = new OpenAPIHono()

export const articlesHandler = app
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
  .openapi(getArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArticlesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsVNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsVNumberConfidentialityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsVNumberEmbargoRoute, (c) => {
    throw new Error('Not implemented')
  })
