import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountCollectionsCollectionIdArticlesArticleIdRoute,
  deleteAccountCollectionsCollectionIdAuthorsAuthorIdRoute,
  deleteAccountCollectionsCollectionIdCategoriesCategoryIdRoute,
  deleteAccountCollectionsCollectionIdPrivateLinksLinkIdRoute,
  deleteAccountCollectionsCollectionIdRoute,
  getAccountCollectionsCollectionIdArticlesRoute,
  getAccountCollectionsCollectionIdAuthorsRoute,
  getAccountCollectionsCollectionIdCategoriesRoute,
  getAccountCollectionsCollectionIdPrivateLinksRoute,
  getAccountCollectionsCollectionIdRoute,
  getAccountCollectionsRoute,
  getCollectionsCollectionIdArticlesRoute,
  getCollectionsCollectionIdRoute,
  getCollectionsCollectionIdVersionsRoute,
  getCollectionsCollectionIdVersionsVersionIdRoute,
  getCollectionsRoute,
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
  postCollectionsSearchRoute,
  putAccountCollectionsCollectionIdArticlesRoute,
  putAccountCollectionsCollectionIdAuthorsRoute,
  putAccountCollectionsCollectionIdCategoriesRoute,
  putAccountCollectionsCollectionIdPrivateLinksLinkIdRoute,
  putAccountCollectionsCollectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
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
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
