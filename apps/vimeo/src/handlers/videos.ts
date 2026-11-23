import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdCommentsCommentIdRoute,
  deleteVideosVideoIdCreditsCreditIdRoute,
  deleteVideosVideoIdPicturesPictureIdRoute,
  deleteVideosVideoIdPresetsPresetIdRoute,
  deleteVideosVideoIdPrivacyDomainsDomainRoute,
  deleteVideosVideoIdPrivacyUsersUserIdRoute,
  deleteVideosVideoIdRoute,
  deleteVideosVideoIdTagsWordRoute,
  deleteVideosVideoIdTexttracksTexttrackIdRoute,
  getVideosRoute,
  getVideosVideoIdAvailableAlbumsRoute,
  getVideosVideoIdAvailableChannelsRoute,
  getVideosVideoIdCategoriesRoute,
  getVideosVideoIdCommentsCommentIdRepliesRoute,
  getVideosVideoIdCommentsCommentIdRoute,
  getVideosVideoIdCommentsRoute,
  getVideosVideoIdCreditsCreditIdRoute,
  getVideosVideoIdCreditsRoute,
  getVideosVideoIdLikesRoute,
  getVideosVideoIdPicturesPictureIdRoute,
  getVideosVideoIdPicturesRoute,
  getVideosVideoIdPresetsPresetIdRoute,
  getVideosVideoIdPrivacyDomainsRoute,
  getVideosVideoIdPrivacyUsersRoute,
  getVideosVideoIdRoute,
  getVideosVideoIdTagsRoute,
  getVideosVideoIdTagsWordRoute,
  getVideosVideoIdTexttracksRoute,
  getVideosVideoIdTexttracksTexttrackIdRoute,
  getVideosVideoIdTimelinethumbnailsThumbnailIdRoute,
  getVideosVideoIdVideosRoute,
  patchVideosVideoIdCommentsCommentIdRoute,
  patchVideosVideoIdCreditsCreditIdRoute,
  patchVideosVideoIdPicturesPictureIdRoute,
  patchVideosVideoIdRoute,
  patchVideosVideoIdTexttracksTexttrackIdRoute,
  postVideosVideoIdCommentsCommentIdRepliesRoute,
  postVideosVideoIdCommentsRoute,
  postVideosVideoIdCreditsRoute,
  postVideosVideoIdPicturesRoute,
  postVideosVideoIdTexttracksRoute,
  postVideosVideoIdTimelinethumbnailsRoute,
  postVideosVideoIdVersionsRoute,
  putVideosVideoIdCategoriesRoute,
  putVideosVideoIdPresetsPresetIdRoute,
  putVideosVideoIdPrivacyDomainsDomainRoute,
  putVideosVideoIdPrivacyUsersRoute,
  putVideosVideoIdPrivacyUsersUserIdRoute,
  putVideosVideoIdTagsRoute,
  putVideosVideoIdTagsWordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(getVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdAvailableAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdAvailableChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdCreditsCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCreditsCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdCreditsCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPicturesPictureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPicturesPictureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdPicturesPictureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPrivacyDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPrivacyDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPrivacyDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdTexttracksTexttrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTexttracksTexttrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdTexttracksTexttrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdTimelinethumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTimelinethumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
