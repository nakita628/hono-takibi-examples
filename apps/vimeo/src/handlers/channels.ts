import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdCategoriesCategoryRoute,
  deleteChannelsChannelIdModeratorsRoute,
  deleteChannelsChannelIdModeratorsUserIdRoute,
  deleteChannelsChannelIdPrivacyUsersUserIdRoute,
  deleteChannelsChannelIdRoute,
  deleteChannelsChannelIdTagsWordRoute,
  deleteChannelsChannelIdVideosRoute,
  deleteChannelsChannelIdVideosVideoIdRoute,
  getChannelsChannelIdCategoriesRoute,
  getChannelsChannelIdModeratorsRoute,
  getChannelsChannelIdModeratorsUserIdRoute,
  getChannelsChannelIdPrivacyUsersRoute,
  getChannelsChannelIdRoute,
  getChannelsChannelIdTagsRoute,
  getChannelsChannelIdTagsWordRoute,
  getChannelsChannelIdUsersRoute,
  getChannelsChannelIdVideosRoute,
  getChannelsChannelIdVideosVideoIdCommentsRoute,
  getChannelsChannelIdVideosVideoIdCreditsRoute,
  getChannelsChannelIdVideosVideoIdLikesRoute,
  getChannelsChannelIdVideosVideoIdPicturesRoute,
  getChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
  getChannelsChannelIdVideosVideoIdRoute,
  getChannelsChannelIdVideosVideoIdTexttracksRoute,
  getChannelsRoute,
  patchChannelsChannelIdModeratorsRoute,
  patchChannelsChannelIdRoute,
  postChannelsChannelIdVideosVideoIdCommentsRoute,
  postChannelsChannelIdVideosVideoIdCreditsRoute,
  postChannelsChannelIdVideosVideoIdPicturesRoute,
  postChannelsChannelIdVideosVideoIdTexttracksRoute,
  postChannelsRoute,
  putChannelsChannelIdCategoriesCategoryRoute,
  putChannelsChannelIdCategoriesRoute,
  putChannelsChannelIdModeratorsRoute,
  putChannelsChannelIdModeratorsUserIdRoute,
  putChannelsChannelIdPrivacyUsersRoute,
  putChannelsChannelIdPrivacyUsersUserIdRoute,
  putChannelsChannelIdTagsRoute,
  putChannelsChannelIdTagsWordRoute,
  putChannelsChannelIdVideosRoute,
  putChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
  putChannelsChannelIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdModeratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdModeratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdModeratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
