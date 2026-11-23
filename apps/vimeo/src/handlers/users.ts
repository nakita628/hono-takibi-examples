import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  deleteUsersUserIdAlbumsAlbumIdRoute,
  deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  deleteUsersUserIdCategoriesCategoryRoute,
  deleteUsersUserIdChannelsChannelIdRoute,
  deleteUsersUserIdFollowingFollowUserIdRoute,
  deleteUsersUserIdGroupsGroupIdRoute,
  deleteUsersUserIdLikesVideoIdRoute,
  deleteUsersUserIdPicturesPortraitsetIdRoute,
  deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  deleteUsersUserIdProjectsProjectIdRoute,
  deleteUsersUserIdProjectsProjectIdVideosRoute,
  deleteUsersUserIdProjectsProjectIdVideosVideoIdRoute,
  deleteUsersUserIdUploadsUploadIdRoute,
  deleteUsersUserIdWatchlaterVideoIdRoute,
  getUsersRoute,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  getUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  getUsersUserIdAlbumsAlbumIdLogosRoute,
  getUsersUserIdAlbumsAlbumIdRoute,
  getUsersUserIdAlbumsAlbumIdVideosRoute,
  getUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  getUsersUserIdAlbumsRoute,
  getUsersUserIdAppearancesRoute,
  getUsersUserIdCategoriesCategoryRoute,
  getUsersUserIdCategoriesRoute,
  getUsersUserIdChannelsChannelIdRoute,
  getUsersUserIdChannelsRoute,
  getUsersUserIdCustomlogosLogoIdRoute,
  getUsersUserIdCustomlogosRoute,
  getUsersUserIdFeedRoute,
  getUsersUserIdFollowersRoute,
  getUsersUserIdFollowingFollowUserIdRoute,
  getUsersUserIdFollowingRoute,
  getUsersUserIdGroupsGroupIdRoute,
  getUsersUserIdGroupsRoute,
  getUsersUserIdLikesRoute,
  getUsersUserIdLikesVideoIdRoute,
  getUsersUserIdOndemandPagesRoute,
  getUsersUserIdOndemandPurchasesRoute,
  getUsersUserIdPicturesPortraitsetIdRoute,
  getUsersUserIdPicturesRoute,
  getUsersUserIdPortfoliosPortfolioIdRoute,
  getUsersUserIdPortfoliosPortfolioIdVideosRoute,
  getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  getUsersUserIdPortfoliosRoute,
  getUsersUserIdPresetsPresetIdRoute,
  getUsersUserIdPresetsPresetIdVideosRoute,
  getUsersUserIdPresetsRoute,
  getUsersUserIdProjectsProjectIdRoute,
  getUsersUserIdProjectsProjectIdVideosRoute,
  getUsersUserIdProjectsRoute,
  getUsersUserIdRoute,
  getUsersUserIdUploadsUploadIdRoute,
  getUsersUserIdVideosRoute,
  getUsersUserIdVideosVideoIdRoute,
  getUsersUserIdWatchlaterRoute,
  getUsersUserIdWatchlaterVideoIdRoute,
  patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  patchUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  patchUsersUserIdAlbumsAlbumIdRoute,
  patchUsersUserIdPicturesPortraitsetIdRoute,
  patchUsersUserIdPresetsPresetIdRoute,
  patchUsersUserIdProjectsProjectIdRoute,
  patchUsersUserIdRoute,
  postUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
  postUsersUserIdAlbumsAlbumIdLogosRoute,
  postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
  postUsersUserIdAlbumsRoute,
  postUsersUserIdCustomlogosRoute,
  postUsersUserIdFollowingRoute,
  postUsersUserIdOndemandPagesRoute,
  postUsersUserIdPicturesRoute,
  postUsersUserIdProjectsRoute,
  postUsersUserIdVideosRoute,
  putUsersUserIdAlbumsAlbumIdVideosRoute,
  putUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  putUsersUserIdCategoriesCategoryRoute,
  putUsersUserIdChannelsChannelIdRoute,
  putUsersUserIdFollowingFollowUserIdRoute,
  putUsersUserIdGroupsGroupIdRoute,
  putUsersUserIdLikesVideoIdRoute,
  putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  putUsersUserIdProjectsProjectIdVideosRoute,
  putUsersUserIdProjectsProjectIdVideosVideoIdRoute,
  putUsersUserIdWatchlaterVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsAlbumIdLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAlbumsAlbumIdLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAppearancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCustomlogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOndemandPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosPortfolioIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPresetsPresetIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWatchlaterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
