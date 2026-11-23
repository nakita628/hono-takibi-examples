import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAlbumsAlbumIdRoute,
  deleteMeAlbumsAlbumIdVideosVideoIdRoute,
  deleteMeCategoriesCategoryRoute,
  deleteMeChannelsChannelIdRoute,
  deleteMeFollowingFollowUserIdRoute,
  deleteMeGroupsGroupIdRoute,
  deleteMeLikesVideoIdRoute,
  deleteMePicturesPortraitsetIdRoute,
  deleteMePortfoliosPortfolioIdVideosVideoIdRoute,
  deleteMeProjectsProjectIdRoute,
  deleteMeProjectsProjectIdVideosRoute,
  deleteMeProjectsProjectIdVideosVideoIdRoute,
  deleteMeWatchedVideosRoute,
  deleteMeWatchedVideosVideoIdRoute,
  deleteMeWatchlaterVideoIdRoute,
  getMeAlbumsAlbumIdRoute,
  getMeAlbumsAlbumIdVideosRoute,
  getMeAlbumsAlbumIdVideosVideoIdRoute,
  getMeAlbumsRoute,
  getMeAppearancesRoute,
  getMeCategoriesCategoryRoute,
  getMeCategoriesRoute,
  getMeChannelsChannelIdRoute,
  getMeChannelsRoute,
  getMeCustomlogosLogoIdRoute,
  getMeCustomlogosRoute,
  getMeFeedRoute,
  getMeFollowersRoute,
  getMeFollowingFollowUserIdRoute,
  getMeFollowingRoute,
  getMeGroupsGroupIdRoute,
  getMeGroupsRoute,
  getMeLikesRoute,
  getMeLikesVideoIdRoute,
  getMeOndemandPagesRoute,
  getMeOndemandPurchasesOndemandIdRoute,
  getMeOndemandPurchasesRoute,
  getMePicturesPortraitsetIdRoute,
  getMePicturesRoute,
  getMePortfoliosPortfolioIdRoute,
  getMePortfoliosPortfolioIdVideosRoute,
  getMePortfoliosPortfolioIdVideosVideoIdRoute,
  getMePortfoliosRoute,
  getMePresetsPresetIdRoute,
  getMePresetsPresetIdVideosRoute,
  getMePresetsRoute,
  getMeProjectsProjectIdRoute,
  getMeProjectsProjectIdVideosRoute,
  getMeProjectsRoute,
  getMeRoute,
  getMeVideosRoute,
  getMeVideosVideoIdRoute,
  getMeWatchedVideosRoute,
  getMeWatchlaterRoute,
  getMeWatchlaterVideoIdRoute,
  patchMeAlbumsAlbumIdRoute,
  patchMePicturesPortraitsetIdRoute,
  patchMePresetsPresetIdRoute,
  patchMeProjectsProjectIdRoute,
  patchMeRoute,
  postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
  postMeAlbumsRoute,
  postMeCustomlogosRoute,
  postMeFollowingRoute,
  postMeOndemandPagesRoute,
  postMePicturesRoute,
  postMeProjectsRoute,
  postMeVideosRoute,
  putMeAlbumsAlbumIdVideosRoute,
  putMeAlbumsAlbumIdVideosVideoIdRoute,
  putMeCategoriesCategoryRoute,
  putMeChannelsChannelIdRoute,
  putMeFollowingFollowUserIdRoute,
  putMeGroupsGroupIdRoute,
  putMeLikesVideoIdRoute,
  putMePortfoliosPortfolioIdVideosVideoIdRoute,
  putMeProjectsProjectIdVideosRoute,
  putMeProjectsProjectIdVideosVideoIdRoute,
  putMeWatchlaterVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAppearancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCustomlogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeOndemandPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOndemandPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeOndemandPurchasesOndemandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePortfoliosPortfolioIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePresetsPresetIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeWatchedVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeWatchedVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeWatchedVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeWatchlaterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
