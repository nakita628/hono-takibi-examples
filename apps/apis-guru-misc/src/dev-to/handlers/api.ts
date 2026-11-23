import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPagesIdRoute,
  getApiArticlesIdRoute,
  getApiArticlesLatestRoute,
  getApiArticlesMeAllRoute,
  getApiArticlesMePublishedRoute,
  getApiArticlesMeRoute,
  getApiArticlesMeUnpublishedRoute,
  getApiArticlesRoute,
  getApiArticlesUsernameSlugRoute,
  getApiCommentsIdRoute,
  getApiCommentsRoute,
  getApiDisplayAdsIdRoute,
  getApiDisplayAdsRoute,
  getApiFollowersUsersRoute,
  getApiFollowsTagsRoute,
  getApiOrganizationsUsernameArticlesRoute,
  getApiOrganizationsUsernameRoute,
  getApiOrganizationsUsernameUsersRoute,
  getApiPagesIdRoute,
  getApiPagesRoute,
  getApiPodcastEpisodesRoute,
  getApiProfileImagesUsernameRoute,
  getApiReadinglistRoute,
  getApiTagsRoute,
  getApiUsersIdRoute,
  getApiUsersMeRoute,
  getApiVideosRoute,
  postApiAdminUsersRoute,
  postApiArticlesRoute,
  postApiDisplayAdsRoute,
  postApiPagesRoute,
  postApiReactionsRoute,
  postApiReactionsToggleRoute,
  putApiArticlesIdRoute,
  putApiArticlesIdUnpublishRoute,
  putApiDisplayAdsIdRoute,
  putApiDisplayAdsIdUnpublishRoute,
  putApiPagesIdRoute,
  putApiUsersIdSuspendRoute,
  putApiUsersIdUnpublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMePublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMeUnpublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiArticlesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiArticlesIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesUsernameSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDisplayAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisplayAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDisplayAdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDisplayAdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDisplayAdsIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFollowersUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFollowsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsUsernameArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsUsernameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPodcastEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProfileImagesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReactionsToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadinglistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
